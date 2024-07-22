import { CircleCheck } from "lucide-react";

export function Activites() {
    return (
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
            <span className="text-xl text-zinc-200 font-semibold">Dia 18</span>
            <span className="text-xs text-zinc-400">Domingo</span>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape">
              <CircleCheck className="size-5 text-lime-300" />
              <span className="text-zinc-100">Academia em grupo</span>
              <span className="text-zinc-100 ml-auto">08:00h</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="px-5 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
              <CircleCheck className="size-5 text-lime-300" />
              <span className="text-zinc-100">Futebol</span>
              <span className="text-zinc-100 ml-auto">08:00h</span>
            </div>
          </div>
        </div>
      </div>
    )
}