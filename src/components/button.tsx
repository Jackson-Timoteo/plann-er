import { ReactNode } from "react";
import { tv } from "tailwind-variants";



const buttonVriants = tv({
    base: 'rounded-lg px-5 py-2 font-medium flex items-center gap-2'
})

interface ButtonProops {
    children: ReactNode
}

export function Button({ children, ...props }: ButtonProops) {
    return (
        <button {...props} className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
            {children}
        </button>
      
    )
}