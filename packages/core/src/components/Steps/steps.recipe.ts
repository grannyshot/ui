import { tv } from 'tailwind-variants'

export const stepsRoot =
  'flex flex-col gap-4 w-full'

export const stepsList =
  'flex items-center gap-0 w-full'

export const stepsItem =
  'flex items-center flex-1 last:flex-none'

export const stepsTrigger =
  'flex items-center gap-2 cursor-pointer text-sm font-medium text-gs-fg-muted whitespace-nowrap data-[current]:text-gs-accent data-[complete]:text-gs-fg'

export const stepsIndicator = tv({
  base: 'flex items-center justify-center rounded-full border-2 border-gs-border bg-gs-bg text-gs-fg-muted font-semibold text-xs shrink-0 transition-all duration-150 ease-in-out data-[current]:border-gs-accent data-[current]:text-gs-accent data-[complete]:border-gs-accent data-[complete]:bg-gs-accent data-[complete]:text-gs-accent-fg',
  variants: {
    size: {
      sm: 'w-[28px] h-[28px]',
      md: 'w-[32px] h-[32px]',
    },
  },
  defaultVariants: { size: 'md' },
})

export const stepsSeparator =
  'flex-1 h-0.5 bg-gs-border mx-2 data-[complete]:bg-gs-accent'

export const stepsContent =
  'text-sm text-gs-fg-muted'

export type StepsIndicatorVariants = Parameters<typeof stepsIndicator>[0]
