import { tv } from 'tailwind-variants'

export const selectTrigger = tv({
  base: 'inline-flex items-center justify-between w-full rounded-md border border-gs-border bg-gs-bg text-gs-fg cursor-pointer transition-[border-color] duration-150 ease-in-out outline-none gap-2 data-[placeholder-shown]:text-gs-fg-subtle data-[state=open]:border-gs-border-focus data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:shadow-[0_0_0_2px_var(--gs-bg),0_0_0_4px_var(--gs-ring)]',

  variants: {
    size: {
      sm: 'pl-3 pr-3 h-8 text-xs',
      md: 'pl-3 pr-3 h-9 text-sm',
      lg: 'pl-4 pr-4 h-11 text-base',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const selectContent = 'bg-gs-bg text-gs-fg border border-gs-border rounded-md shadow-lg overflow-hidden py-1 z-[1000] min-w-[var(--reference-width)] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out'

export const selectItem = 'flex items-center justify-between pl-3 pr-3 py-2 text-sm cursor-pointer transition-[background] duration-100 ease-in-out outline-none data-[highlighted]:bg-gs-bg-muted data-[state=checked]:text-gs-accent data-[state=checked]:font-medium data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed'

export const selectIndicator = 'text-gs-fg-subtle transition-transform duration-150 ease-in-out shrink-0 w-4 h-4 data-[state=open]:rotate-180'

export const selectItemIndicator = 'text-gs-accent shrink-0'

export const selectLabel = 'block text-xs font-medium text-gs-fg mb-1'

export type SelectTriggerVariants = Parameters<typeof selectTrigger>[0]
