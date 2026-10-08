"use client";

import { useMemo, useState } from "react";
import {
  CircleCheckBig,
  ExternalLink,
  Image as ImageIcon,
  LoaderCircle,
  Search,
  UserMinus,
  UserPlus,
} from "lucide-react";
import { especiesData } from "@/data/clados";
import { PhotoRecord } from "@/types";

interface CommunityProfilesProps {
  records: PhotoRecord[];
  ownRecords: PhotoRecord[];
  friendIds: string[];
  currentUserId: string;
  isLoading: boolean;
  error?: string;
  onAddFriend: (friendUserId: string) => Promise<void>;
  onRemoveFriend: (friendUserId: string) => Promise<void>;
}

type CommunityMode = "friends" | "search";

interface CommunityProfile {
  userId: string;
  displayName: string;
  total: number;
  confirmed: number;
  latestDate: string;
  speciesIds: Set<string>;
  sharedSpeciesCount: number;
}

const HIDDEN_PROFILE_NAMES = new Set(["gonzalo cullen"]);

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function CommunityProfiles({
  records,
  ownRecords,
  friendIds,
  currentUserId,
  isLoading,
  error = "",
  onAddFriend,
  onRemoveFriend,
}: CommunityProfilesProps) {
  const [mode, setMode] = useState<CommunityMode>("friends");
  const [profileSearch, setProfileSearch] = useState("");
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [updatingFriendId, setUpdatingFriendId] = useState<string | null>(null);
  const [friendActionError, setFriendActionError] = useState("");
  const friendIdSet = useMemo(() => new Set(friendIds), [friendIds]);

  const getSpeciesKey = (record: PhotoRecord) =>
    normalizeSearchText(especiesData[record.especie_id]?.nombreCientifico || record.especie_id);

  const currentSpeciesIds = useMemo(
    () => new Set(ownRecords.map((record) => getSpeciesKey(record))),
    [ownRecords]
  );

  const profiles = useMemo(() => {
    const byUser = new Map<string, CommunityProfile>();

    for (const record of records) {
      if (!record.user_id) continue;
      if (record.user_id === currentUserId) continue;
      if (HIDDEN_PROFILE_NAMES.has(normalizeSearchText(record.nombre_usuario || ""))) continue;

      const current = byUser.get(record.user_id);
      if (current) {
        current.total += 1;
        current.speciesIds.add(getSpeciesKey(record));
        if (record.is_confirmed) current.confirmed += 1;
        if (record.created_at > current.latestDate) current.latestDate = record.created_at;
      } else {
        byUser.set(record.user_id, {
          userId: record.user_id,
          displayName: record.nombre_usuario || "Sin nombre",
          total: 1,
          confirmed: record.is_confirmed ? 1 : 0,
          latestDate: record.created_at,
          speciesIds: new Set([getSpeciesKey(record)]),
          sharedSpeciesCount: 0,
        });
      }
    }

    return Array.from(byUser.values())
      .map((profile) => ({
        ...profile,
        sharedSpeciesCount: Array.from(profile.speciesIds).filter((speciesKey) =>
          currentSpeciesIds.has(speciesKey)
        ).length,
      }))
      .sort((a, b) => a.displayName.localeCompare(b.displayName, "es"));
  }, [currentSpeciesIds, currentUserId, records]);

  const visibleProfiles = useMemo(
    () =>
      mode === "friends"
        ? profiles.filter((profile) => friendIdSet.has(profile.userId))
        : profiles,
    [friendIdSet, mode, profiles]
  );

  const filteredProfiles = useMemo(() => {
    const normalizedSearch = normalizeSearchText(profileSearch.trim());
    if (!normalizedSearch) return visibleProfiles;

    return visibleProfiles.filter((profile) =>
      normalizeSearchText(profile.displayName).includes(normalizedSearch)
    );
  }, [profileSearch, visibleProfiles]);

  const selectedProfile =
    filteredProfiles.find((profile) => profile.userId === selectedUserId) ||
    filteredProfiles[0] ||
    null;
  const selectedRecords = useMemo(() => {
    if (!selectedProfile) return [];
    return records
      .filter((record) => record.user_id === selectedProfile.userId)
      .sort((a, b) => b.plant_number - a.plant_number);
  }, [records, selectedProfile]);
  const selectedProfileIsFriend = selectedProfile
    ? friendIdSet.has(selectedProfile.userId)
    : false;

  const handleModeChange = (nextMode: CommunityMode) => {
    setMode(nextMode);
    setSelectedUserId(null);
    setFriendActionError("");
    if (nextMode === "friends") setProfileSearch("");
  };

  const handleFriendAction = async (friendUserId: string, shouldAdd: boolean) => {
    setFriendActionError("");
    setUpdatingFriendId(friendUserId);
    try {
      if (shouldAdd) {
        await onAddFriend(friendUserId);
      } else {
        await onRemoveFriend(friendUserId);
      }
    } catch (actionError) {
      setFriendActionError(
        actionError instanceof Error ? actionError.message : "No se pudo actualizar el perfil"
      );
    } finally {
      setUpdatingFriendId(null);
    }
  };

  return (
    <section className="rounded-lg bg-white p-4 shadow-lg sm:p-5">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Comunidad</h2>
          <p className="text-sm text-gray-700">Guarda perfiles para ver sus plantas sin recorrer toda la lista.</p>
        </div>
        <span className="text-sm text-gray-700">
          {friendIds.length} amigos · {profiles.length} perfiles visibles
        </span>
      </div>

      <div className="mb-4 grid grid-cols-2 rounded-md border border-gray-300 bg-white p-0.5" aria-label="Vista de comunidad">
        <button
          type="button"
          onClick={() => handleModeChange("friends")}
          className={`rounded px-3 py-1.5 text-sm font-semibold ${mode === "friends" ? "bg-green-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
        >
          Mis amigos
        </button>
        <button
          type="button"
          onClick={() => handleModeChange("search")}
          className={`rounded px-3 py-1.5 text-sm font-semibold ${mode === "search" ? "bg-green-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
        >
          Buscar perfiles
        </button>
      </div>

      {isLoading && <p className="text-gray-700">Cargando perfiles...</p>}

      {error && (
        <p className="mb-3 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
          {error}
        </p>
      )}

      {!isLoading && !error && profiles.length === 0 && (
        <p className="text-gray-700">Todavia no hay perfiles visibles.</p>
      )}

      {!isLoading && !error && profiles.length > 0 && (
        <div className="grid gap-4 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-800">
              {mode === "friends" ? "Buscar amigo" : "Buscar perfil"}
              <span className="mt-1 flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2">
                <Search aria-hidden="true" size={16} className="shrink-0 text-gray-500" />
                <input
                  type="search"
                  value={profileSearch}
                  onChange={(event) => setProfileSearch(event.target.value)}
                  placeholder="Nombre de usuario"
                  className="min-w-0 flex-1 text-sm outline-none"
                />
              </span>
            </label>

            <div className="max-h-80 space-y-1 overflow-y-auto pr-1">
              {filteredProfiles.map((profile) => (
                <button
                  key={profile.userId}
                  type="button"
                  onClick={() => setSelectedUserId(profile.userId)}
                  className={`w-full rounded-md border px-3 py-2 text-left text-sm transition ${selectedProfile?.userId === profile.userId ? "border-green-300 bg-green-50 text-green-950" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <span className="block truncate font-semibold">{profile.displayName}</span>
                  <span className="block text-xs text-gray-600">
                    {profile.total} plantas · {profile.sharedSpeciesCount} en comun
                  </span>
                </button>
              ))}

              {filteredProfiles.length === 0 && mode === "friends" && !profileSearch && (
                <p className="text-sm text-gray-700">Todavia no agregaste amigos.</p>
              )}

              {filteredProfiles.length === 0 && (mode !== "friends" || profileSearch) && (
                <p className="text-sm text-gray-700">No hay perfiles con ese nombre.</p>
              )}
            </div>
          </div>

          <div className="min-w-0">
            {selectedProfile && (
              <>
                <div className="mb-3 flex flex-col gap-2 border-b border-gray-200 pb-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{selectedProfile.displayName}</h3>
                    <p className="text-sm text-gray-700">
                      {selectedProfile.total} plantas · {selectedProfile.confirmed} confirmadas · {selectedProfile.sharedSpeciesCount} en comun
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      void handleFriendAction(selectedProfile.userId, !selectedProfileIsFriend)
                    }
                    disabled={updatingFriendId === selectedProfile.userId}
                    className={`inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold ${selectedProfileIsFriend ? "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50" : "bg-green-700 text-white hover:bg-green-800"} disabled:opacity-60`}
                  >
                    {updatingFriendId === selectedProfile.userId ? (
                      <LoaderCircle aria-hidden="true" className="animate-spin" size={16} />
                    ) : selectedProfileIsFriend ? (
                      <UserMinus aria-hidden="true" size={16} />
                    ) : (
                      <UserPlus aria-hidden="true" size={16} />
                    )}
                    {selectedProfileIsFriend ? "Quitar" : "Agregar"}
                  </button>
                </div>

                {friendActionError && (
                  <p className="mb-3 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
                    {friendActionError}
                  </p>
                )}

                <div className="space-y-2">
                  {selectedRecords.map((record) => {
                    const especie = especiesData[record.especie_id];
                    const isSharedSpecies = currentSpeciesIds.has(getSpeciesKey(record));

                    return (
                      <article
                        key={record.id}
                        className={`grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-3 rounded-md border p-3 ${isSharedSpecies ? "border-amber-300 bg-amber-50" : record.is_confirmed ? "border-green-200" : "border-gray-200"}`}
                      >
                        {record.photo_url ? (
                          <a
                            href={record.photo_url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Ampliar foto de la planta N° ${record.plant_number}`}
                            title="Ampliar foto"
                            className="h-14 w-14 overflow-hidden rounded-md bg-gray-100"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element -- Public Supabase image URL. */}
                            <img
                              src={record.photo_url}
                              alt=""
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover"
                            />
                          </a>
                        ) : (
                          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gray-100 text-gray-400" title="Sin foto">
                            <ImageIcon aria-hidden="true" size={20} />
                          </div>
                        )}

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                            <span className="font-bold text-green-800">N° {record.plant_number}</span>
                            {record.is_confirmed && (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700" title="Identificacion confirmada">
                                <CircleCheckBig aria-hidden="true" size={14} />
                                Confirmada
                              </span>
                            )}
                            {isSharedSpecies && (
                              <span className="text-xs font-semibold text-amber-800">
                                En comun
                              </span>
                            )}
                            <span className="truncate text-sm italic text-gray-900">
                              {especie?.nombreCientifico || record.especie_id}
                            </span>
                          </div>
                          <p className="truncate text-sm text-gray-700">
                            {record.nombre_vulgar || especie?.nombreVulgar || "Sin nombre vulgar"}
                          </p>
                          <p className="truncate text-xs text-gray-500">
                            {record.lugar} · <time>{record.fecha}</time>
                          </p>
                        </div>

                        {record.photo_url && (
                          <a
                            href={record.photo_url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Ver foto de la planta N° ${record.plant_number}`}
                            title="Ver foto"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-blue-700 hover:bg-blue-50"
                          >
                            <ExternalLink aria-hidden="true" size={16} strokeWidth={2} />
                          </a>
                        )}
                      </article>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
