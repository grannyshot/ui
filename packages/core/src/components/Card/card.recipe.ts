import { cva } from '../../styled-system/css'
import type { RecipeVariantProps } from '../../styled-system/css'

export const card = cva({
  base: {
    bg: 'bg.subtle',
    border: '1px solid token(colors.border)',
    borderRadius: 'lg',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  },

  variants: {
    padding: {
      sm: { p: '4' },
      md: { p: '6' },
      lg: { p: '8' },
    },
    hoverable: {
      true: {
        cursor: 'pointer',
        _hover: {
          borderColor: 'border.focus',
          shadow: 'md',
        },
      },
    },
  },

  defaultVariants: {
    padding: 'md',
  },
})

export type CardVariants = RecipeVariantProps<typeof card>