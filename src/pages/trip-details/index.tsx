import { Calendar, CircleCheck, MapPin, Plus, Settings2 } from "lucide-react";

export function TripDetailsPage() {
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

      <main className="flex gap-16">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button className="bg-purple-700 text-white rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-600">
              <Plus className="size-5 text-white" />
              Cadastrar Atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-200">Dia 17</span>
                <span className="text-xs text-zinc-400">Segunda</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Nenhuma ativiada nesta data.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-200">Dia 18</span>
                <span className="text-xs text-zinc-400">Domingo</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80"></div>
      </main>
    </div>
  );
}
