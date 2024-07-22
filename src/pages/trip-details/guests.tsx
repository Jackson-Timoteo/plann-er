import { CircleDashed, UserCircle } from "lucide-react";

export function Guests() {
    return (
        <div className="space-y-6">
        <h2 className="font-semibold text-xl">Convidados</h2>

        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <span className="block font-medium text-zinc-100">Walter White</span>
              <span className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                ww@gmail.com
              </span>
            </div>
            <CircleDashed className="text-zinc-400 size-5" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <span className="block font-medium text-zinc-100">Van Helsing </span>
              <span className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                van@gmail.com
              </span>
            </div>
            <CircleDashed className="text-zinc-400 size-5" />
          </div>
        </div>

          <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
            <UserCircle className="size-5" />
            Verificar convidados
          </button>
      </div>
    )
}