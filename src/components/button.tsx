import { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonVariants = tv({
    base: 'rounded-lg px-5 py-2 font-medium flex items-center gap-2',

    variants: {
        variant: {
            primary: 'bg-zinc-800 text-white hover:bg-zinc-700',
            secondary: 'bg-purple-700 text-white hover:bg-purple-600',
          
        }
    },

    defaultVariants: {  
        variant: 'primary',
    }
})

interface ButtonProops  extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
    children: ReactNode
}

export function Button({ children, variant, ...props }: ButtonProops) {
    return (
        <button {...props} className={buttonVariants({ variant })}>
            {children}
        </button>
      
    )
} 