import { tv } from 'tailwind-variants'

export const comboboxControl = 'relative w-full'

export const comboboxInput = tv({
  base: 'w-full rounded-md border border-gs-border bg-gs-bg text-gs-fg outline-none pl-3 pr-3 transition-[border-color] duration-150 ease-in-out focus:border-gs-border-focus placeholder:text-gs-fg-subtle data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',

  variants: {
    size: {
      sm: 'h-8 text-xs',
      md: 'h-9 text-sm',
      lg: 'h-11 text-base',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const comboboxContent = 'bg-gs-bg text-gs-fg border border-gs-border rounded-md shadow-lg py-1 z-[1000] overflow-hidden max-h-[200px] overflow-y-auto min-w-[var(--reference-width)] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out'

export const comboboxItem = 'flex items-center justify-between pl-3 pr-3 py-2 text-sm cursor-pointer transition-[background] duration-100 ease-in-out outline-none data-[highlighted]:bg-gs-bg-muted data-[state=checked]:text-gs-accent data-[state=checked]:font-medium data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed'

export const comboboxItemIndicator = 'text-gs-accent shrink-0'

export const comboboxTrigger = 'absolute right-0 top-0 bottom-0 inline-flex items-center justify-center pl-2 pr-2 text-gs-fg-subtle cursor-pointer bg-transparent border-none outline-none transition-transform duration-150 ease-in-out data-[state=open]:rotate-180'

export const comboboxClearTrigger = 'absolute right-6 top-0 bottom-0 inline-flex items-center justify-center pl-1 pr-1 text-gs-fg-subtle cursor-pointer bg-transparent border-none outline-none hover:text-gs-fg'

export type ComboboxInputVariants = Parameters<typeof comboboxInput>[0]
