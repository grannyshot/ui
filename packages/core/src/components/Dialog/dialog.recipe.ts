import { tv } from 'tailwind-variants'

export const dialogOverlay =
  'fixed inset-0 bg-gs-overlay z-[1300] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out'

export const dialogContent = tv({
  base: 'relative bg-gs-bg border border-gs-border rounded-lg shadow-xl z-[1400] w-full p-6 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',

  variants: {
    size: {
      sm: 'max-w-xs',
      md: 'max-w-md',
      lg: 'max-w-lg',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const dialogPositioner =
  'fixed inset-0 z-[1400] flex items-center justify-center p-4'

export const dialogTitle =
  'text-lg font-semibold text-gs-fg mb-2'

export const dialogDescription =
  'text-sm text-gs-fg-muted mb-4'

export const dialogCloseTrigger =
  'absolute top-3 right-3 inline-flex items-center justify-center w-[28px] h-[28px] rounded-sm text-gs-fg-muted cursor-pointer transition-[background,color] duration-150 ease-in-out hover:bg-gs-bg-muted hover:text-gs-fg'

export type DialogContentVariants = Parameters<typeof dialogContent>[0]
