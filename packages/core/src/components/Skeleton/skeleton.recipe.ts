import { cva } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const skeleton = cva({
  base: {
    bg: 'bg.muted',
    borderRadius: 'md',
    animation: 'pulse 2s ease-in-out infinite',
  },

  variants: {
    variant: {
      text: {
        height: '1em',
        width: '100%',
        borderRadius: 'sm',
      },
      circular: {
        borderRadius: 'full',
      },
      rectangular: {
        borderRadius: 'md',
      },
    },
  },

  defaultVariants: {
    variant: 'rectangular',
  },
})

export type SkeletonVariants = RecipeVariantProps<typeof skeleton>