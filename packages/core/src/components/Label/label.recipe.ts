import { cva } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const label = cva({
  base: {
    display: 'block',
    fontSize: 'xs',
    fontWeight: 'medium',
    color: 'fg',
    cursor: 'default',
  },

  variants: {
    required: {
      true: {
        _after: {
          content: '" *"',
          color: 'error',
        },
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
})

export type LabelVariants = RecipeVariantProps<typeof label>
