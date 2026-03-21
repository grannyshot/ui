import { recipe } from '@vanilla-extract/recipes'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '../tokens/colors.css'
import { space, radius } from '../tokens/spacing.css'
import { fontSize, fontWeight } from '../tokens/typography.css'

export const badge = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: fontWeight.medium,
    lineHeight: 1,
    borderRadius: radius.full,
  },

  variants: {
    variant: {
      success: {
        background: vars.color.successSubtle,
        color: vars.color.success,
      },
      warning: {
        background: vars.color.warningSubtle,
        color: vars.color.warning,
      },
      error: {
        background: vars.color.errorSubtle,
        color: vars.color.error,
      },
      info: {
        background: vars.color.infoSubtle,
        color: vars.color.info,
      },
      neutral: {
        background: vars.color.bgMuted,
        color: vars.color.fgMuted,
      },
    },
    size: {
      sm: {
        padding: `${space[0]} ${space[2]}`,
        fontSize: fontSize.xs,
        height: '20px',
      },
      md: {
        padding: `${space[1]} ${space[2]}`,
        fontSize: fontSize.xs,
        height: '24px',
      },
    },
  },

  defaultVariants: {
    variant: 'neutral',
    size: 'md',
  },
})

export type BadgeVariants = RecipeVariants<typeof badge>
