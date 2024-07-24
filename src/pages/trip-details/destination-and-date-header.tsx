import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDateHeader () {
    return (
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

          <div className="w-px h-6 bg-zinc-700" />

          <Button>
            Alterar Local/Data
            <Settings2 className="size-5" />
          </Button>
          
        </div>
      </div> 
    )
}