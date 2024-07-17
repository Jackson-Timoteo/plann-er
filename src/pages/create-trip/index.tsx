import {
    ArrowRight,
    UserRoundPlus,
  } from "lucide-react";
  import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite.guests-model";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
  
  export function CreateTripPage() {
    const navigate = useNavigate();

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  
   
    const [emailToInvite, setEmailsToInvite] = useState(["jackson@gmail.com.br"]);
  
    function openGuestsInput() {
      setIsGuestsInputOpen(true);
    }
   
    function closeGuestInput() {
      setIsGuestsInputOpen(false);
    }
  
    function openGuestsModal() {
      setIsGuestsModalOpen(true);
    }
  
    function closeGuestsModal() {
      setIsGuestsModalOpen(false);
    }
  
  
    function openConfirmTripModal() {
      setIsConfirmTripModalOpen(true);
    }
  
    function closeConfirmTripModal() {
      setIsConfirmTripModalOpen(false);
    }
  
    function addNewEailToInvite(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const data = new FormData(event.currentTarget);
      const email = data.get("email")?.toString();
  
      if (!email) {
        return;
      }
  
      if (emailToInvite.includes(email)) {
        return;
      }
  
      setEmailsToInvite([...emailToInvite, email]);
  
      event.currentTarget.reset();
    }
  
    function removeEmailFromInvites(emailToRemove: string) {
      const newEmaisList = emailToInvite.filter(
        (email) => email !== emailToRemove
      );
  
      setEmailsToInvite(newEmaisList);
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {

      event.preventDefault()
      navigate('/trips/123')
    };
  
    return (
      <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <div className="flex flex-col items-center gap-3">
            <img src="/logo.svg" alt="plann.er" />
            <p className="text-zinc-300 text-lg">
              Convide seus amigoos e planeja sua próxima viagem
            </p>
          </div>
  
          <div className="space-y-4">
            <DestinationAndDateStep 
              closeGuestInput={closeConfirmTripModal}
              isGuestsInputOpen={isGuestsInputOpen}
              openGuestsInput={openGuestsInput} 
            />

            {isGuestsInputOpen && (
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                <button
                  type="button"
                  onClick={openGuestsModal}
                  className="flex items-center gap-2 flex-1 text-left"
                >
                  <UserRoundPlus className="size-5 text-zinc-400" />
                  {emailToInvite.length > 0 ? (
                    <span className="text-zinc-100 text-lg flex-1">
                      {emailToInvite.length} pessoa(s) convidados(s)
                    </span>
                  ) : (
                    <span className="text-zinc-400 text-lg flex-1"> Quem irá viajar com você?</span>
                  )}
                </button>
  
                <button onClick={openConfirmTripModal} className="bg-purple-700 text-white rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-600">
                  Confirmar viagem
                  <ArrowRight className="size-5 text-white" />
                </button>
              </div>
            )}
          </div>
  
          <p className="text-sm text-zinc-500">
            A o planejar sua viagem pelo plann.er você automaticamente concorda<br />com nossos <a className="text-zinc-300" href="#">
              termos de uso</a> e <a className="text-zinc-300" href="#">politica de privacidade</a>
          </p>
        </div>
  
        {isGuestsModalOpen && (
          <InviteGuestsModal 
            emailToInvite={emailToInvite}
            addNewEmailToInvite={addNewEailToInvite}
            closeGuestsModal={closeGuestsModal}
            removeEmailFromInvites={removeEmailFromInvites}
          />
        )}
  
        {isConfirmTripModalOpen && (
          <ConfirmTripModal 
            closeConfirmTripModal={closeConfirmTripModal}
            createTrip={createTrip}
          />
        )}
      </div>
    );
  };
  