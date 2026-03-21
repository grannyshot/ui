import { recipe } from '@vanilla-extract/recipes'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '../tokens/colors.css'
import { space, radius } from '../tokens/spacing.css'
import { fontSize, fontWeight } from '../tokens/typography.css'

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space[2],
    borderRadius: radius.md,
    fontWeight: fontWeight.medium,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    outline: 'none',
    lineHeight: 1,
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    ':focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.bg}, 0 0 0 4px ${vars.color.borderFocus}`,
    },
  },

  variants: {
    variant: {
      primary: {
        background: vars.color.accent,
        color: vars.color.accentFg,
        ':hover': { background: vars.color.accentHover },
      },
      secondary: {
        background: vars.color.bgMuted,
        color: vars.color.fg,
        border: `1px solid ${vars.color.border}`,
        ':hover': { background: vars.color.bgSubtle },
      },
      ghost: {
        background: 'transparent',
        color: vars.color.fgMuted,
        ':hover': { background: vars.color.bgMuted, color: vars.color.fg },
      },
      danger: {
        background: vars.color.error,
        color: '#ffffff',
        ':hover': { opacity: 0.9 },
      },
      outline: {
        background: 'transparent',
        color: vars.color.accent,
        border: `1px solid ${vars.color.accent}`,
        ':hover': { background: vars.color.accentSubtle },
      },
    },
    size: {
      sm: {
        padding: `${space[1]} ${space[3]}`,
        fontSize: fontSize.xs,
        height: '32px',
      },
      md: {
        padding: `${space[2]} ${space[4]}`,
        fontSize: fontSize.sm,
        height: '36px',
      },
      lg: {
        padding: `${space[3]} ${space[6]}`,
        fontSize: fontSize.md,
        height: '44px',
      },
    },
    fullWidth: {
      true: { width: '100%' },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
