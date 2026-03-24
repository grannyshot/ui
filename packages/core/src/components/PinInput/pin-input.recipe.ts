import { tv } from 'tailwind-variants'

export const pinInputRoot = 'flex flex-col gap-2'

export const pinInputLabel = 'text-sm font-medium text-gs-fg'

export const pinInputControl = 'flex gap-2'

export const pinInputInput = tv({
  base: 'text-center rounded-md border border-gs-border bg-gs-bg text-gs-fg font-semibold outline-none transition-[border-color,box-shadow] duration-150 ease-in-out focus:border-gs-accent focus:shadow-[0_0_0_2px_var(--gs-bg),0_0_0_4px_var(--gs-ring)] data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',

  variants: {
    size: {
      sm: 'w-9 h-9 text-sm',
      md: 'w-11 h-11 text-base',
      lg: 'w-13 h-13 text-lg',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type PinInputVariants = Parameters<typeof pinInputInput>[0]
