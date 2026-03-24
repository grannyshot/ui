import { tv } from 'tailwind-variants'

export const sliderRoot = 'flex flex-col gap-1 w-full'

export const sliderLabelGroup = 'flex justify-between'

export const sliderLabel = 'text-sm font-medium text-gs-fg'

export const sliderControl = 'flex items-center relative'

export const sliderTrack = tv({
  base: 'w-full rounded-full bg-gs-bg-muted relative overflow-hidden',

  variants: {
    size: {
      sm: 'h-1',
      md: 'h-1.5',
      lg: 'h-2',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const sliderRange = 'absolute h-full bg-gs-accent rounded-full'

export const sliderThumb = tv({
  base: 'rounded-full bg-gs-bg border-2 border-gs-accent shadow-sm cursor-pointer transition-[box-shadow,border-color] duration-200 ease-in-out outline-none data-[focus-visible]:shadow-[0_0_0_2px_var(--gs-bg),0_0_0_4px_var(--gs-ring)] data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',

  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const sliderValueText = 'text-sm text-gs-fg-muted'

export type SliderTrackVariants = Parameters<typeof sliderTrack>[0]
