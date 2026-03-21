import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '../tokens/colors.css'
import { space, radius } from '../tokens/spacing.css'
import { fontSize, fontWeight } from '../tokens/typography.css'

export const input = recipe({
  base: {
    width: '100%',
    borderRadius: radius.md,
    border: `1px solid ${vars.color.border}`,
    background: vars.color.bg,
    color: vars.color.fg,
    outline: 'none',
    transition: 'border-color 0.15s ease',
    '::placeholder': {
      color: vars.color.fgSubtle,
    },
    ':focus': {
      borderColor: vars.color.borderFocus,
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },

  variants: {
    size: {
      sm: {
        padding: `${space[1]} ${space[3]}`,
        fontSize: fontSize.xs,
        height: '32px',
      },
      md: {
        padding: `${space[2]} ${space[3]}`,
        fontSize: fontSize.sm,
        height: '36px',
      },
      lg: {
        padding: `${space[3]} ${space[4]}`,
        fontSize: fontSize.md,
        height: '44px',
      },
    },
    state: {
      default: {},
      error: {
        borderColor: vars.color.error,
        ':focus': { borderColor: vars.color.error },
      },
      success: {
        borderColor: vars.color.success,
        ':focus': { borderColor: vars.color.success },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    state: 'default',
  },
})

export const inputLabel = style({
  display: 'block',
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
  color: vars.color.fg,
  marginBottom: space[1],
})

export const inputHint = style({
  fontSize: fontSize.xs,
  color: vars.color.fgMuted,
  marginTop: space[1],
})

export const inputError = style({
  fontSize: fontSize.xs,
  color: vars.color.error,
  marginTop: space[1],
})

export type InputVariants = RecipeVariants<typeof input>
