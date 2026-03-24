import { tv } from 'tailwind-variants'

export const progressRoot =
  'flex flex-col gap-1 w-full'

export const progressHeader =
  'flex justify-between items-center'

export const progressLabel =
  'text-sm font-medium text-gs-fg'

export const progressTrack = tv({
  base: 'w-full rounded-full bg-gs-bg-muted overflow-hidden',

  variants: {
    size: {
      sm: 'h-[4px]',
      md: 'h-[8px]',
      lg: 'h-[12px]',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const progressRange =
  'h-full bg-gs-accent rounded-full transition-[width] duration-300 ease-in-out'

export const progressValueText =
  'text-xs text-gs-fg-muted'

export type ProgressTrackVariants = Parameters<typeof progressTrack>[0]
