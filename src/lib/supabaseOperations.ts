import { PhotoRecord, PlantFormData } from "@/types";
import { supabase } from "./supabase";

function sanitizeFileName(fileName: string) {
  return fileName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .toLowerCase();
}

async function optimizePhoto(file: File) {
  if (!file.type.startsWith("image/") || file.type === "image/gif") return file;

  try {
    const source = await createImageBitmap(file);
    const maxSide = 1600;
    const needsResize = Math.max(source.width, source.height) > maxSide;
    const needsCompression = file.size > 1_500_000;
    if (!needsResize && !needsCompression) {
      source.close();
      return file;
    }

    const scale = Math.min(1, maxSide / Math.max(source.width, source.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(source.width * scale);
    canvas.height = Math.round(source.height * scale);
    const context = canvas.getContext("2d");
    if (!context) {
      source.close();
      return file;
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(source, 0, 0, canvas.width, canvas.height);
    source.close();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", 0.82)
    );
    if (!blob) return file;

    const baseName = file.name.replace(/\.[^.]+$/, "") || "planta";
    return new File([blob], `${baseName}.jpg`, {
      type: "image/jpeg",
      lastModified: Date.now(),
    });
  } catch (error) {
    console.warn("No se pudo optimizar la foto; se subirá el archivo original.", error);
    return file;
  }
}

async function getNextPlantNumber(userId: string) {
  const { data, error } = await supabase
    .from("photo_records")
    .select("plant_number")
    .eq("user_id", userId)
    .order("plant_number", { ascending: true });

  if (error) {
    throw new Error(`No se pudo calcular el número de planta: ${error.message}`);
  }

  let nextNumber = 1;
  for (const record of data || []) {
    if (record.plant_number === nextNumber) nextNumber += 1;
    if (record.plant_number > nextNumber) break;
  }

  return nextNumber;
}

async function uploadPhoto(file: File, userId: string) {
  const optimizedFile = await optimizePhoto(file);
  const fileName = `${Date.now()}-${sanitizeFileName(optimizedFile.name)}`;
  const path = `${userId}/${fileName}`;
  const { error } = await supabase.storage.from("plant-photos").upload(path, optimizedFile, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) throw new Error(`Error subiendo foto: ${error.message}`);

  const { data } = supabase.storage.from("plant-photos").getPublicUrl(path);
  return { path, publicUrl: data.publicUrl };
}

function getPhotoPath(photoUrl: string | null) {
  if (!photoUrl) return null;

  try {
    const marker = "/storage/v1/object/public/plant-photos/";
    const pathname = new URL(photoUrl).pathname;
    const markerIndex = pathname.indexOf(marker);
    return markerIndex >= 0
      ? decodeURIComponent(pathname.slice(markerIndex + marker.length))
      : null;
  } catch {
    return null;
  }
}

async function removeStoredPhoto(photoUrl: string | null) {
  const path = getPhotoPath(photoUrl);
  if (!path) return;

  const { error } = await supabase.storage.from("plant-photos").remove([path]);
  if (error) console.error("No se pudo eliminar la foto de Storage:", error);
}

export async function savePhotoRecord(
  especieId: string,
  formData: PlantFormData,
  userId: string
): Promise<{ id: string; plantNumber: number }> {
  let photoUrl: string | null = null;
  let uploadedPath: string | null = null;

  if (formData.foto) {
    const uploaded = await uploadPhoto(formData.foto, userId);
    uploadedPath = uploaded.path;
    photoUrl = uploaded.publicUrl;
  }

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const plantNumber = await getNextPlantNumber(userId);
    const { data, error } = await supabase
      .from("photo_records")
      .insert([
        {
          user_id: userId,
          plant_number: plantNumber,
          especie_id: especieId,
          nombre_vulgar: formData.nombreVulgar.trim() || null,
          nombre_usuario: formData.nombreUsuario,
          fecha: formData.fecha,
          lugar: formData.lugar,
          observaciones: formData.observaciones || null,
          photo_url: photoUrl,
        },
      ])
      .select("id")
      .single();

    if (!error && data) return { id: data.id, plantNumber };
    if (error?.code !== "23505") {
      if (uploadedPath) await supabase.storage.from("plant-photos").remove([uploadedPath]);
      throw new Error(`Error guardando en base de datos: ${error?.message || "Error desconocido"}`);
    }
  }

  if (uploadedPath) await supabase.storage.from("plant-photos").remove([uploadedPath]);
  throw new Error("No se pudo reservar un numero de planta. Intente nuevamente.");
}

export async function updatePhotoRecord(
  record: PhotoRecord,
  formData: PlantFormData
): Promise<void> {
  let newPhotoUrl: string | null | undefined;
  let uploadedPath: string | null = null;

  if (formData.foto) {
    const uploaded = await uploadPhoto(formData.foto, record.user_id);
    uploadedPath = uploaded.path;
    newPhotoUrl = uploaded.publicUrl;
  } else if (formData.removeExistingPhoto) {
    newPhotoUrl = null;
  }

  const updates: Record<string, unknown> = {
    nombre_vulgar: formData.nombreVulgar.trim() || null,
    nombre_usuario: formData.nombreUsuario,
    fecha: formData.fecha,
    lugar: formData.lugar,
    observaciones: formData.observaciones || null,
  };
  if (newPhotoUrl !== undefined) updates.photo_url = newPhotoUrl;

  const { data, error } = await supabase
    .from("photo_records")
    .update(updates)
    .eq("id", record.id)
    .select("id")
    .single();

  if (error || !data) {
    if (uploadedPath) await supabase.storage.from("plant-photos").remove([uploadedPath]);
    throw new Error(`No se pudo actualizar el registro: ${error?.message || "Registro no encontrado"}`);
  }

  if (newPhotoUrl !== undefined && record.photo_url) {
    await removeStoredPhoto(record.photo_url);
  }
}

export async function deletePhotoRecord(record: PhotoRecord): Promise<void> {
  const { data, error } = await supabase
    .from("photo_records")
    .delete()
    .eq("id", record.id)
    .select("id")
    .single();
  if (error || !data) {
    throw new Error(`No se pudo eliminar el registro: ${error?.message || "Registro no encontrado"}`);
  }

  await removeStoredPhoto(record.photo_url);
}

export async function setPhotoRecordConfirmed(
  recordId: string,
  isConfirmed: boolean
): Promise<void> {
  const { data, error } = await supabase
    .from("photo_records")
    .update({ is_confirmed: isConfirmed })
    .eq("id", recordId)
    .select("id")
    .single();

  if (error || !data) {
    throw new Error(
      `No se pudo cambiar la confirmacion: ${error?.message || "Registro no encontrado"}`
    );
  }
}

const PHOTO_RECORD_SELECT =
  "id,user_id,plant_number,especie_id,nombre_vulgar,nombre_usuario,fecha,lugar,observaciones,photo_url,is_confirmed,created_at";

export async function getPhotoRecords(userId?: string): Promise<PhotoRecord[]> {
  let query = supabase
    .from("photo_records")
    .select(PHOTO_RECORD_SELECT)
    .order("plant_number", { ascending: false });

  if (userId) query = query.eq("user_id", userId);

  const { data, error } = await query;

  if (error) {
    throw new Error(`No se pudieron cargar los registros: ${error.message}`);
  }

  return data || [];
}

export async function getVisiblePhotoRecords(): Promise<PhotoRecord[]> {
  const { data, error } = await supabase
    .from("photo_records")
    .select(PHOTO_RECORD_SELECT)
    .order("nombre_usuario", { ascending: true })
    .order("plant_number", { ascending: false });

  if (error) {
    throw new Error(`No se pudieron cargar los registros: ${error.message}`);
  }

  return data || [];
}

export async function getCommunityFriendIds(): Promise<string[]> {
  const { data, error } = await supabase
    .from("community_friends")
    .select("friend_user_id")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`No se pudieron cargar los amigos: ${error.message}`);
  }

  return (data || []).map((friend) => friend.friend_user_id);
}

export async function addCommunityFriend(friendUserId: string): Promise<void> {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) {
    throw new Error("No se pudo identificar el usuario actual.");
  }

  const { error } = await supabase
    .from("community_friends")
    .insert([{ owner_user_id: userData.user.id, friend_user_id: friendUserId }]);

  if (error && error.code !== "23505") {
    throw new Error(`No se pudo agregar el perfil: ${error.message}`);
  }
}

export async function removeCommunityFriend(friendUserId: string): Promise<void> {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) {
    throw new Error("No se pudo identificar el usuario actual.");
  }

  const { error } = await supabase
    .from("community_friends")
    .delete()
    .eq("owner_user_id", userData.user.id)
    .eq("friend_user_id", friendUserId);

  if (error) {
    throw new Error(`No se pudo quitar el perfil: ${error.message}`);
  }
}

export async function saveQuizSession(
  especieId: string,
  answers: Record<string, string>,
  userId: string
): Promise<void> {
  const { error } = await supabase.from("quiz_sessions").insert([
    {
      user_id: userId,
      current_node_id: "completed",
      answers,
      final_especie_id: especieId,
      completed_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Error guardando sesión de quiz:", error);
  }
}
