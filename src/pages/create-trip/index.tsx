import {
    ArrowRight,
    Calendar,
    MapPin,
    Settings2,
    User,
    UserRoundPlus,
    X,
  } from "lucide-react";
  import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite.guests-model";
  
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

    function createTrip() {
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
                <button
                  onClick={closeGuestInput}
                  className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
                >
                  Alterar Local/Data
                  <Settings2 className="size-5" />
                </button>
              ) : (
                <button
                  onClick={openGuestsInput}
                  className="bg-purple-700 text-white rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-600"
                >
                  Continuar
                  <ArrowRight className="size-5 text-white" />
                </button>
              )}
            </div>
  
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
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
                  <button type="button" onClick={closeConfirmTripModal}>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Para concluir a criação de viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil
                  </span> nas datas de <span className="font-semibold text-zinc-100">16 e 27 de Agosto de 2024</span> preencha seus dados abaixo:
                </p>
              </div>
  
              <form
                onSubmit={addNewEailToInvite}
                className="space-y-3"
              >
                <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <User className="text-zinc-400 size-5" />
                  <input
                    name="name"
                    placeholder="Seu nome completo"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  />
                </div>
  
                 <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <User className="text-zinc-400 size-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail pessoal"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  />
                </div>
  
                <button
                onClick={createTrip}
                  type="submit"
                  className="bg-purple-700 text-white w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-purple-600"
                >
                  Confirmar Viagem
                </button>
              </form>
            </div>
          </div>
          )}
      </div>
    );
  };
  