import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const pinInputRoot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2',
})

export const pinInputLabel = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
})

export const pinInputControl = css({
  display: 'flex',
  gap: '2',
})

export const pinInputInput = cva({
  base: {
    textAlign: 'center',
    borderRadius: 'md',
    border: '1px solid token(colors.border)',
    bg: 'bg',
    color: 'fg',
    fontWeight: 'semibold',
    outline: 'none',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    '&:focus': {
      borderColor: 'accent',
      boxShadow: '0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.ring)',
    },
    '&[data-disabled]': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },

  variants: {
    size: {
      sm: {
        width: '36px',
        height: '36px',
        fontSize: 'sm',
      },
      md: {
        width: '44px',
        height: '44px',
        fontSize: 'md',
      },
      lg: {
        width: '52px',
        height: '52px',
        fontSize: 'lg',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type PinInputVariants = RecipeVariantProps<typeof pinInputInput>
