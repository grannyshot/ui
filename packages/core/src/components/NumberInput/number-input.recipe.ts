import { tv } from 'tailwind-variants'

export const numberInputRoot = 'flex flex-col gap-1'

export const numberInputLabel = 'text-sm font-medium text-gs-fg'

export const numberInputControl = 'flex relative'

export const numberInputInput = tv({
  base: 'w-full rounded-md border border-gs-border bg-gs-bg text-gs-fg outline-none transition-[border-color,box-shadow] duration-150 ease-in-out pr-8 focus:border-gs-accent focus:shadow-[0_0_0_2px_var(--gs-bg),0_0_0_4px_var(--gs-ring)] data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',

  variants: {
    size: {
      sm: 'h-8 text-sm px-3',
      md: 'h-9 text-sm px-3',
      lg: 'h-11 text-base px-4',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const numberInputTrigger = 'absolute right-px flex items-center justify-center w-7 border-l border-gs-border bg-transparent text-gs-fg-muted cursor-pointer transition-[background,color] duration-150 ease-in-out hover:bg-gs-bg-muted hover:text-gs-fg data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed [&_svg]:w-3 [&_svg]:h-3'

export const numberInputIncrementTrigger = 'top-px h-[calc(50%-0.5px)] rounded-tr-[calc(var(--gs-radii-md,0.375rem)-1px)] border-b-[0.5px] border-gs-border'

export const numberInputDecrementTrigger = 'bottom-px h-[calc(50%-0.5px)] rounded-br-[calc(var(--gs-radii-md,0.375rem)-1px)] border-t-[0.5px] border-gs-border'

export type NumberInputVariants = Parameters<typeof numberInputInput>[0]
