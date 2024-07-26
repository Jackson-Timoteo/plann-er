import { ReactNode } from "react";
import { tv } from "tailwind-variants";



const buttonVariants = tv({
    base: 'rounded-lg px-5 py-2 font-medium flex items-center gap-2',

    variants: {
        variant: {
            primary: 'bg-zinc-800 text-white hover:bg-zinc-700',
            secondary: 'bg-purple-700 text-white hover:bg-purple-600',
        }
    },
})

interface ButtonProops {
    children: ReactNode
}

export function Button({ children, ...props }: ButtonProops) {
    return (
        <button {...props} className={buttonVariants({ variant: 'primary' })}>
            {children}
        </button>
      
    )
}