import { recipe } from '@vanilla-extract/recipes'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '../tokens/colors.css'
import { space, radius, shadow } from '../tokens/spacing.css'

export const card = recipe({
  base: {
    background: vars.color.bgSubtle,
    border: `1px solid ${vars.color.border}`,
    borderRadius: radius.lg,
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  },

  variants: {
    padding: {
      sm: { padding: space[4] },
      md: { padding: space[6] },
      lg: { padding: space[8] },
    },
    hoverable: {
      true: {
        cursor: 'pointer',
        ':hover': {
          borderColor: vars.color.borderFocus,
          boxShadow: shadow.md,
        },
      },
    },
  },

  defaultVariants: {
    padding: 'md',
  },
})

export type CardVariants = RecipeVariants<typeof card>
