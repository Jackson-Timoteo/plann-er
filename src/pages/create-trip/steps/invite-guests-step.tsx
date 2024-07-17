import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
    openGuestsModal: () => void
    openConfirmTripModal: () => void
    emailToInvite: string[]
}

export function InviteGuestsStep({
    openGuestsModal,
    openConfirmTripModal,
    emailToInvite
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center gap-2 flex-1 text-left"
      >
        <UserRoundPlus className ="size-5 text-zinc-400" />
        {emailToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1">
            {emailToInvite.length} pessoa(s) convidados(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
=            Quem irá viajar com você?
          </span>
        )}
      </button>

      <button
        onClick={openConfirmTripModal}
        className="bg-purple-700 text-white rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-600"
      >
        Confirmar viagem
        <ArrowRight className="size-5 text-white" />
      </button>
    </div>
  );
}
