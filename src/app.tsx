import { ArrowRight, Calendar, MapPin } from "lucide-react";

export function App() {

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Convide seus amigoos e planeja sua próxima viagem</p>
        
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400"/>
            <input type="text" placeholder="Para onde desejar ir?" className="bg-transparent placeholder-zinc-400"/>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400"/>
            <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400"/>
          </div>

          <div className="w-px h-6 bg-gray-300" />

          
          <button className="bg-purple-700 text-white rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-600">
            Continuar
            <ArrowRight className="size-5 text-white" />
          </button>
        </div> 

        <p className="text-sm text-zinc-500">A o planejar sua viagem pelo plann.er você automaticamente concorda <br />
           com nossos <a className="text-zinc-300" href="#">termos de uso</a> e <a className="text-zinc-300" href="#">politica de privacidade</a>
        </p>
      </div>
    </div>
  )
}