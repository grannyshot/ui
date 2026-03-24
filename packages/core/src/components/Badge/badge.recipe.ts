import { tv } from 'tailwind-variants'

export const badge = tv({
  base: 'inline-flex items-center font-medium leading-none rounded-full',
  variants: {
    variant: {
      success: 'bg-gs-success-subtle text-gs-success',
      warning: 'bg-gs-warning-subtle text-gs-warning',
      error: 'bg-gs-error-subtle text-gs-error',
      info: 'bg-gs-info-subtle text-gs-info',
      neutral: 'bg-gs-bg-muted text-gs-fg-muted',
    },
    size: {
      sm: 'px-2 py-0 text-xs h-5',
      md: 'px-2 py-1 text-xs h-6',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'md',
  },
})

export type BadgeVariants = Parameters<typeof badge>[0]
