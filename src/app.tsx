export function App() {

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Convide seus amigoos e planeja sua próxima viagem</p>
        
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center">
          <input type="text" placeholder="Para onde você deseja viajar?" />
          <input type="text" placeholder="Quando?" />

          <button>Continuar</button>
        </div> 
        <p className="text-sm text-zinc-500">A o planejar sua viagem pelo plann.er você automaticamente concorda <br />
           com nossos <a className="text-zinc-300" href="#">termos de uso</a> e <a className="text-zinc-300" href="#">politica de privacidade</a>
        </p>
      </div>
    </div>
  )
}