import { Calendar, MapPin, Plus, Settings2, } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImpoortantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activites } from "./activites";

export function TripDetailsPage() {
  const [ isCreateActivityModalOpen, setIsCreateActivityModalOpen ] = useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="siz-5 text-zinc-400" />
          <span className="text-lg text-zinc-100">Florianopolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="siz-5 text-zinc-400" />
            <span className="text-lg text-zinc-100">17 a 27 de agosto</span>
          </div>

          <div className="w-px h-6 bg-gray-300" />
          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar Local/Data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={openCreateActivityModal} className="bg-purple-700 text-white rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-600">
              <Plus className="size-5 text-white" />
              Cadastrar Atividade
            </button>
          </div>

          <Activites />
        </div>

        <div className="w-80 space-y-6">
          <ImpoortantLinks />

          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal}/>
      )}
    </div>
  );
}
