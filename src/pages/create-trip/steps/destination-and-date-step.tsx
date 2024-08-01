import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    openGuestsInput:() => void
    closeGuestInput: () => void
}   

export function DestinationAndDateStep({
    isGuestsInputOpen,
    openGuestsInput,
    closeGuestInput,
}: DestinationAndDateStepProps ) {
    return (

    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
    <div className="flex items-center gap-2 flex-1">
      <MapPin className="size-5 text-zinc-400" />
      <input
        disabled={isGuestsInputOpen}
        type="text"
        placeholder="Para onde desejar ir?"
        className="bg-transparent placeholder-zinc-400 outline-none flex-1"
      />
    </div>

    <div className="flex items-center gap-2">
      <Calendar className="size-5 text-zinc-400" />
      <input
        disabled={isGuestsInputOpen}
        type="text"
        placeholder="Quando?"
        className="bg-transparent text-lg placeholder-zinc-400 outline-none"
      />
    </div>

    <div className="w-px h-6 bg-gray-300" />

    {isGuestsInputOpen ? (

      <Button onClick={closeGuestInput} variant="primary">
         Alterar Local/Data
        <Settings2 className="size-5" /> 
      </Button>

    ) : (

      <Button onClick={openGuestsInput} variant="secondary">
        Continuar
        <ArrowRight className="size-5 text-white" />
      </Button>
      
    )}
  </div>
    )
}