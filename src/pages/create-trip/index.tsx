import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite.guests-model";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";
import { DateRange } from "react-day-picker";
  
  export function CreateTripPage() {
    const navigate = useNavigate();

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

    const [destination, setDestination] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerEmail, setOwnerEmail ] = useState('')
    const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()

  
   
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

      console.log(destination)
      console.log(eventStartAndEndDates)
      console.log(emailToInvite)
      console.log(ownerName)
      console.log(ownerEmail)


      //navigate('/trips/123')
    };
  
    return (
      <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <div className="flex flex-col items-center gap-3">
            <img src="/logo.svg" alt="plann.er" />
            <p className="text-zinc-300 text-lg">
              Convide seus amigos e planeja sua próxima viagem
            </p>
          </div>
  
          <div className="space-y-4">
            <DestinationAndDateStep 
              closeGuestInput={closeConfirmTripModal}
              isGuestsInputOpen={isGuestsInputOpen}
              openGuestsInput={openGuestsInput} 
              setDestination={setDestination}
              eventStartAndEndDates={eventStartAndEndDates}
              setEventStartAndEndDates={setEventStartAndEndDates}
            />

            {isGuestsInputOpen && (
              <InviteGuestsStep 
              openGuestsModal={openGuestsModal}
              openConfirmTripModal={openConfirmTripModal}
              emailToInvite={emailToInvite}
              />
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
            setOwnerName={setOwnerName}
            setOwnerEmail={setOwnerEmail}
          />
        )}
      </div>
    );
  };
  