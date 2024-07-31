import { CircleDashed, UserCircle } from "lucide-react";
import { Button } from "../../components/button";

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

          <Button variant="primary" size="full">
            <UserCircle className="size-5" />
            Verificar convidados
          </Button>
          
      </div>
    )
}