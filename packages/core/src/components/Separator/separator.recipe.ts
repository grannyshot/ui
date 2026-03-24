import { tv } from 'tailwind-variants'

export const separator = tv({
  base: 'bg-gs-border shrink-0',
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'w-px h-full self-stretch',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export type SeparatorVariants = Parameters<typeof separator>[0]
