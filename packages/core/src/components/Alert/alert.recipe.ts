import { tv } from 'tailwind-variants'

export const alert = tv({
  base: 'flex items-start gap-3 p-4 rounded-lg border text-sm leading-normal',
  variants: {
    variant: {
      info: 'bg-gs-info-subtle border-gs-info text-gs-fg',
      success: 'bg-gs-success-subtle border-gs-success text-gs-fg',
      warning: 'bg-gs-warning-subtle border-gs-warning text-gs-fg',
      error: 'bg-gs-error-subtle border-gs-error text-gs-fg',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
})

export const alertIcon = tv({
  base: 'shrink-0 w-5 h-5 mt-px',
  variants: {
    variant: {
      info: 'text-gs-info',
      success: 'text-gs-success',
      warning: 'text-gs-warning',
      error: 'text-gs-error',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
})

export const alertTitle = 'font-semibold text-gs-fg'
export const alertDescription = 'text-gs-fg-muted'

export type AlertVariants = Parameters<typeof alert>[0]
