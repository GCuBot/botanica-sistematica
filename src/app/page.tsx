"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Session } from "@supabase/supabase-js";
import {
  GraduationCap,
  Library,
  LogOut,
  CircleUserRound,
  ScanSearch,
  Users,
  X,
} from "lucide-react";
import AuthPanel from "@/components/AuthPanel";
import CommunityProfiles from "@/components/CommunityProfiles";
import FirstExamPractice from "@/components/FirstExamPractice";
import Quiz from "@/components/Quiz";
import RecordsList from "@/components/RecordsList";
import SpeciesForm from "@/components/SpeciesForm";
import {
  deletePhotoRecord,
  addCommunityFriend,
  getPhotoRecords,
  getCommunityFriendIds,
  getVisiblePhotoRecords,
  removeCommunityFriend,
  savePhotoRecord,
  saveQuizSession,
  setPhotoRecordConfirmed,
  updatePhotoRecord,
} from "@/lib/supabaseOperations";
import { supabase } from "@/lib/supabase";
import { usePersistentState } from "@/hooks/usePersistentState";
import { Especie, PhotoRecord, PlantFormData } from "@/types";
import { especiesData } from "@/data/clados";
import { SECOND_EDITION_ROOT_NODE_ID } from "@/data/secondEdition";

type PageState = "quiz" | "form" | "edit" | "complete";
type WorkspaceTab = "identifier" | "records" | "community" | "first-exam";
type ManualEdition = "first" | "second";

const ALLOWED_DOMAIN = "@agro.uba.ar";
const WORKSPACE_TABS: readonly WorkspaceTab[] = ["identifier", "records", "community", "first-exam"];
const MANUAL_EDITIONS: readonly ManualEdition[] = ["first", "second"];
const MANUAL_EDITION_STORAGE_KEY = "botanica:manual-edition:v2";
const MATECITO_URL = "https://matecito.co/botanicasis";
const MATECITO_BUTTON_URL = "https://cdn.matecito.co/assets_v2/images/button_11.svg";

export default function Home() {
  const [pageState, setPageState] = useState<PageState>("quiz");
  const [workspaceTab, setWorkspaceTab] = usePersistentState<WorkspaceTab>(
    "botanica:last-workspace-tab",
    "identifier",
    WORKSPACE_TABS
  );
  const [manualEdition, setManualEdition] = usePersistentState<ManualEdition>(
    MANUAL_EDITION_STORAGE_KEY,
    "second",
    MANUAL_EDITIONS
  );
  const [selectedEspecie, setSelectedEspecie] = useState<Especie | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [records, setRecords] = useState<PhotoRecord[]>([]);
  const [communityRecords, setCommunityRecords] = useState<PhotoRecord[]>([]);
  const [communityFriendIds, setCommunityFriendIds] = useState<string[]>([]);
  const [isRecordsLoading, setIsRecordsLoading] = useState(false);
  const [isCommunityLoading, setIsCommunityLoading] = useState(false);
  const [communityError, setCommunityError] = useState("");
  const [lastPlantNumber, setLastPlantNumber] = useState<number | null>(null);
  const [editingRecord, setEditingRecord] = useState<PhotoRecord | null>(null);
  const [recordNotice, setRecordNotice] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const user = session?.user || null;
  const userEmail = user?.email || "";
  const isAllowedEmail = userEmail.toLowerCase().endsWith(ALLOWED_DOMAIN);
  const defaultUserName = useMemo(() => userEmail.split("@")[0] || "", [userEmail]);

  const loadRecords = useCallback(async () => {
    if (!user || !isAllowedEmail) return;

    setIsRecordsLoading(true);
    try {
      const userRecords = await getPhotoRecords(user.id);
      setRecords(userRecords);
    } catch (error) {
      console.error("Error cargando registros:", error);
    } finally {
      setIsRecordsLoading(false);
    }
  }, [isAllowedEmail, user]);

  const loadCommunityRecords = useCallback(async () => {
    if (!user || !isAllowedEmail) return;

    setIsCommunityLoading(true);
    setCommunityError("");
    try {
      const [visibleRecords, friendIds] = await Promise.all([
        getVisiblePhotoRecords(),
        getCommunityFriendIds(),
      ]);
      setCommunityRecords(visibleRecords);
      setCommunityFriendIds(friendIds);
    } catch (error) {
      console.error("Error cargando perfiles:", error);
      setCommunityError(
        error instanceof Error ? error.message : "No se pudieron cargar los perfiles"
      );
    } finally {
      setIsCommunityLoading(false);
    }
  }, [isAllowedEmail, user]);

  const handleAddCommunityFriend = async (friendUserId: string) => {
    await addCommunityFriend(friendUserId);
    setCommunityFriendIds((current) =>
      current.includes(friendUserId) ? current : [...current, friendUserId]
    );
  };

  const handleRemoveCommunityFriend = async (friendUserId: string) => {
    await removeCommunityFriend(friendUserId);
    setCommunityFriendIds((current) => current.filter((id) => id !== friendUserId));
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setIsAuthLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
      if (!currentSession) {
        setPageState("quiz");
        setWorkspaceTab("identifier");
        setSelectedEspecie(null);
        setEditingRecord(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [setWorkspaceTab]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadRecords();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadRecords]);

  useEffect(() => {
    if (workspaceTab !== "community") return;

    const timer = window.setTimeout(() => {
      void loadCommunityRecords();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadCommunityRecords, workspaceTab]);

  const handleSignOut = async () => {
    setIsMobileMenuOpen(false);
    await supabase.auth.signOut();
    setRecords([]);
    setCommunityRecords([]);
    setCommunityFriendIds([]);
    setLastPlantNumber(null);
  };

  const handleQuizComplete = async (especie: Especie) => {
    setSelectedEspecie(especie);
    setPageState("form");

    if (user) {
      await saveQuizSession(especie.id, {}, user.id);
    }
  };

  const handleFormSubmit = async (formData: PlantFormData) => {
    if (!selectedEspecie || !user) return;

    try {
      const savedRecord = await savePhotoRecord(selectedEspecie.id, formData, user.id);
      setLastPlantNumber(savedRecord.plantNumber);

      await loadRecords();
      setPageState("complete");
    } catch (error) {
      console.error("Error en el proceso:", error);
      alert(
        `Error: ${error instanceof Error ? error.message : "Error desconocido"}`
      );
    }
  };

  const handleEditRecord = (record: PhotoRecord) => {
    setRecordNotice("");
    setEditingRecord(record);
    setPageState("edit");
    setWorkspaceTab("records");
  };

  const handleEditSubmit = async (formData: PlantFormData) => {
    if (!editingRecord) return;

    try {
      await updatePhotoRecord(editingRecord, formData);
      await loadRecords();
      setRecordNotice(`Planta N° ${editingRecord.plant_number} actualizada.`);
      setEditingRecord(null);
      setPageState("quiz");
    } catch (error) {
      console.error("Error actualizando el registro:", error);
      alert(`Error: ${error instanceof Error ? error.message : "Error desconocido"}`);
    }
  };

  const handleDeleteRecord = async (record: PhotoRecord) => {
    await deletePhotoRecord(record);
    setRecordNotice(
      `Planta N° ${record.plant_number} eliminada. Los demás números no cambiaron.`
    );
    if (editingRecord?.id === record.id) {
      setEditingRecord(null);
      setPageState("quiz");
    }
    await loadRecords();
  };

  const handleConfirmRecord = async (record: PhotoRecord, isConfirmed: boolean) => {
    await setPhotoRecordConfirmed(record.id, isConfirmed);
    setRecords((current) =>
      current.map((item) =>
        item.id === record.id ? { ...item, is_confirmed: isConfirmed } : item
      )
    );
  };

  const handleWorkspaceTabChange = (tab: WorkspaceTab) => {
    if (tab !== "records" && pageState === "edit") {
      setEditingRecord(null);
      setPageState("quiz");
    }
    setIsMobileMenuOpen(false);
    setWorkspaceTab(tab);
  };

  if (isAuthLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
        <p className="text-center text-gray-700">Cargando...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 px-4 pb-24 pt-8 lg:pb-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start">
          <div className="text-center lg:col-start-2">
            <h1 className="text-4xl font-bold text-green-800 mb-2">
              🌿 Identificador de Plantas
            </h1>
            <p className="text-gray-700">
              Facultad de Agronomía - UBA | Botánica Sistemática
            </p>
            {user && isAllowedEmail && (
              <a
                href={MATECITO_URL}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Convidame un Matecito"
                className="mt-3 inline-flex opacity-90 transition hover:opacity-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- External Matecito badge snippet. */}
                <img
                  src={MATECITO_BUTTON_URL}
                  alt="Convidame un Matecito"
                  className="h-auto w-40"
                />
              </a>
            )}
          </div>

          {user && isAllowedEmail && (
            <div className="hidden w-fit items-center gap-2 rounded-md border border-gray-200 bg-white py-1.5 pl-3 pr-1.5 shadow-sm lg:col-start-3 lg:row-start-1 lg:flex lg:justify-self-end">
              <span className="max-w-32 truncate text-sm font-medium text-gray-800" title={defaultUserName}>
                {defaultUserName}
              </span>
              <button
                onClick={handleSignOut}
                type="button"
                aria-label="Cerrar sesión"
                title="Cerrar sesión"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <LogOut aria-hidden="true" size={17} strokeWidth={2} />
              </button>
            </div>
          )}
        </header>

        {!user && <AuthPanel />}

        {user && !isAllowedEmail && (
          <section className="mx-auto max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Mail no habilitado
            </h2>
            <p className="text-gray-700 mb-5">
              Esta app usa cuentas institucionales terminadas en {ALLOWED_DOMAIN}.
            </p>
            <button
              onClick={handleSignOut}
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            >
              Salir
            </button>
          </section>
        )}

        {user && isAllowedEmail && (
          <>
            <nav className="mb-7 hidden border-b border-gray-300 lg:flex" aria-label="Secciones principales">
              <button
                onClick={() => handleWorkspaceTabChange("identifier")}
                className={`shrink-0 border-b-2 px-5 py-3 font-semibold ${workspaceTab === "identifier" ? "border-green-700 text-green-800" : "border-transparent text-gray-600 hover:text-gray-900"}`}
              >
                Identificador
              </button>
              <button
                onClick={() => handleWorkspaceTabChange("records")}
                className={`shrink-0 border-b-2 px-5 py-3 font-semibold ${workspaceTab === "records" ? "border-green-700 text-green-800" : "border-transparent text-gray-600 hover:text-gray-900"}`}
              >
                Mis plantas
              </button>
              <button
                onClick={() => handleWorkspaceTabChange("community")}
                className={`shrink-0 border-b-2 px-5 py-3 font-semibold ${workspaceTab === "community" ? "border-green-700 text-green-800" : "border-transparent text-gray-600 hover:text-gray-900"}`}
              >
                Comunidad
              </button>
              <button
                onClick={() => handleWorkspaceTabChange("first-exam")}
                className={`shrink-0 border-b-2 px-5 py-3 font-semibold ${workspaceTab === "first-exam" ? "border-green-700 text-green-800" : "border-transparent text-gray-600 hover:text-gray-900"}`}
              >
                Primer parcial
              </button>
            </nav>

            {workspaceTab === "first-exam" ? (
              <FirstExamPractice />
            ) : workspaceTab === "community" ? (
              <div className="mx-auto max-w-4xl">
                <CommunityProfiles
                  records={communityRecords}
                  ownRecords={records}
                  friendIds={communityFriendIds}
                  currentUserId={user.id}
                  isLoading={isCommunityLoading}
                  error={communityError}
                  onAddFriend={handleAddCommunityFriend}
                  onRemoveFriend={handleRemoveCommunityFriend}
                />
              </div>
            ) : workspaceTab === "records" ? (
              <div className="mx-auto max-w-4xl">
                {recordNotice && (
                  <div className="mb-6 flex items-start justify-between gap-3 rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-900" role="status">
                    <span>{recordNotice}</span>
                    <button
                      type="button"
                      onClick={() => setRecordNotice("")}
                      className="font-semibold text-green-800 hover:underline"
                    >
                      Cerrar
                    </button>
                  </div>
                )}

                {pageState === "edit" && editingRecord ? (
                  <div className="flex justify-center">
                    <SpeciesForm
                      key={editingRecord.id}
                      especie={especiesData[editingRecord.especie_id]}
                      defaultUserName={defaultUserName}
                      record={editingRecord}
                      onSubmit={handleEditSubmit}
                      onCancel={() => {
                        setEditingRecord(null);
                        setPageState("quiz");
                      }}
                    />
                  </div>
                ) : (
                  <RecordsList
                    records={records}
                    isLoading={isRecordsLoading}
                    onEdit={handleEditRecord}
                    onDelete={handleDeleteRecord}
                    onConfirm={handleConfirmRecord}
                  />
                )}
              </div>
            ) : (
              <div>
                {pageState === "quiz" && (
                  <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                      <div className="mb-3 grid grid-cols-2 rounded-md border border-gray-300 bg-white p-0.5" aria-label="Edicion del manual">
                        <button
                          type="button"
                          onClick={() => setManualEdition("first")}
                          className={`rounded px-3 py-1.5 text-sm font-semibold ${manualEdition === "first" ? "bg-green-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                        >
                          1.ª edicion
                        </button>
                        <button
                          type="button"
                          onClick={() => setManualEdition("second")}
                          className={`rounded px-3 py-1.5 text-sm font-semibold ${manualEdition === "second" ? "bg-green-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                        >
                          2.ª edicion
                        </button>
                      </div>
                      <Quiz
                        key={manualEdition}
                        rootNodeId={manualEdition === "second" ? SECOND_EDITION_ROOT_NODE_ID : "root"}
                        onComplete={handleQuizComplete}
                      />
                    </div>
                  </div>
                )}

                {pageState === "form" && selectedEspecie && (
                  <div className="flex justify-center">
                    <SpeciesForm
                      especie={selectedEspecie}
                      defaultUserName={defaultUserName}
                      onSubmit={handleFormSubmit}
                    />
                  </div>
                )}

                {pageState === "complete" && selectedEspecie && (
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-green-700 mb-4">
                      ✅ Registro completado
                    </h2>
                    <p className="text-gray-700 mb-6">
                      Tu registro quedó guardado. Podés imprimir la etiqueta desde Mis plantas.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
                      {lastPlantNumber && (
                        <p className="text-sm font-medium text-green-800 mb-1">
                          Planta N° {lastPlantNumber}
                        </p>
                      )}
                      <p className="text-lg font-bold text-green-700">
                        {selectedEspecie.nombreCientifico}
                      </p>
                      <p className="text-gray-700">{selectedEspecie.nombreVulgar}</p>
                    </div>
                    <div className="flex flex-col justify-center gap-3 sm:flex-row">
                      <button
                        onClick={() => {
                          setPageState("quiz");
                          setSelectedEspecie(null);
                        }}
                        className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                      >
                        Identificar otra planta
                      </button>
                      <button
                        onClick={() => setWorkspaceTab("records")}
                        className="rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-800 hover:bg-gray-50"
                      >
                        Ver mis plantas
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <nav
              className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-gray-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden"
              aria-label="Navegación principal"
            >
              <button
                type="button"
                onClick={() => handleWorkspaceTabChange("identifier")}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 pb-[env(safe-area-inset-bottom)] text-xs font-medium ${workspaceTab === "identifier" ? "text-green-800" : "text-gray-600"}`}
              >
                <ScanSearch aria-hidden="true" size={20} />
                Identificar
              </button>
              <button
                type="button"
                onClick={() => handleWorkspaceTabChange("records")}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 pb-[env(safe-area-inset-bottom)] text-xs font-medium ${workspaceTab === "records" ? "text-green-800" : "text-gray-600"}`}
              >
                <Library aria-hidden="true" size={20} />
                Mis plantas
              </button>
              <button
                type="button"
                onClick={() => handleWorkspaceTabChange("community")}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 pb-[env(safe-area-inset-bottom)] text-xs font-medium ${workspaceTab === "community" ? "text-green-800" : "text-gray-600"}`}
              >
                <Users aria-hidden="true" size={20} />
                Comunidad
              </button>
              <button
                type="button"
                onClick={() => handleWorkspaceTabChange("first-exam")}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 pb-[env(safe-area-inset-bottom)] text-xs font-medium ${workspaceTab === "first-exam" ? "text-green-800" : "text-gray-600"}`}
              >
                <GraduationCap aria-hidden="true" size={20} />
                Parcial
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((current) => !current)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-account-menu"
                className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 pb-[env(safe-area-inset-bottom)] text-xs font-medium ${isMobileMenuOpen ? "text-green-800" : "text-gray-600"}`}
              >
                {isMobileMenuOpen ? <X aria-hidden="true" size={20} /> : <CircleUserRound aria-hidden="true" size={20} />}
                Sesión
              </button>
            </nav>

            {isMobileMenuOpen && (
              <div
                id="mobile-account-menu"
                className="fixed inset-x-3 bottom-20 z-50 rounded-lg border border-gray-200 bg-white p-3 shadow-xl lg:hidden"
              >
                <p className="px-2 pb-2 text-sm font-medium text-gray-800">{defaultUserName}</p>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium text-red-700 hover:bg-red-50"
                >
                  <LogOut aria-hidden="true" size={18} />
                  Cerrar sesión
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
