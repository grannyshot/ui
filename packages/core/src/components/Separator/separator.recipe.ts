import { cva } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const separator = cva({
  base: {
    bg: 'border',
    flexShrink: 0,
  },

  variants: {
    orientation: {
      horizontal: {
        width: '100%',
        height: '1px',
      },
      vertical: {
        width: '1px',
        height: '100%',
        alignSelf: 'stretch',
      },
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
  },
})

export type SeparatorVariants = RecipeVariantProps<typeof separator>
