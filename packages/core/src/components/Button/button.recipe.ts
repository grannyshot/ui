import { cva } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const button = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    borderRadius: 'md',
    fontWeight: 'medium',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    outline: 'none',
    lineHeight: '1',
    _active: {
      transform: 'scale(0.97)',
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      _active: { transform: 'none' },
    },
    _focusVisible: {
      boxShadow: '0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.border.focus)',
    },
  },

  variants: {
    variant: {
      primary: {
        bg: 'accent',
        color: 'accent.fg',
        _hover: { bg: 'accent.hover' },
      },
      secondary: {
        bg: 'bg.muted',
        color: 'fg',
        border: '1px solid token(colors.border)',
        _hover: { bg: 'bg.subtle' },
      },
      ghost: {
        bg: 'transparent',
        color: 'fg.muted',
        _hover: { bg: 'bg.muted', color: 'fg' },
      },
      danger: {
        bg: 'error',
        color: 'accent.fg',
        _hover: { opacity: 0.9 },
      },
      outline: {
        bg: 'transparent',
        color: 'accent',
        border: '1px solid token(colors.accent)',
        _hover: { bg: 'accent.subtle' },
      },
    },
    size: {
      sm: {
        px: '3',
        py: '1',
        fontSize: 'xs',
        height: '32px',
      },
      md: {
        px: '4',
        py: '2',
        fontSize: 'sm',
        height: '36px',
      },
      lg: {
        px: '6',
        py: '3',
        fontSize: 'md',
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

export type ButtonVariants = RecipeVariantProps<typeof button>