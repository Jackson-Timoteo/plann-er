import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImpoortantLinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Imporantes</h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100">Reservas do AirBnB</span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                    https://www.youtube.com/watch?v=iejEg_JgGdsdsdadasdadasdasdasdasdsdaE0
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100">Regras da casa </span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                    https://www.youtube.com/watch?v=iejEg_JgGdsdsdadasdadasdasdasdasdsdaE0
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5" />
              </div>
            </div>


              <Button variant="primary" size="full">
                <Plus className="size-5" />
                Cadastrar novo link
              </Button>
          </div>
    )
}