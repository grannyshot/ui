import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const numberInputRoot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
})

export const numberInputLabel = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
})

export const numberInputControl = css({
  display: 'flex',
  position: 'relative',
})

export const numberInputInput = cva({
  base: {
    width: '100%',
    borderRadius: 'md',
    border: '1px solid token(colors.border)',
    bg: 'bg',
    color: 'fg',
    outline: 'none',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    paddingRight: '32px',
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
        height: '32px',
        fontSize: 'sm',
        px: '3',
      },
      md: {
        height: '36px',
        fontSize: 'sm',
        px: '3',
      },
      lg: {
        height: '44px',
        fontSize: 'md',
        px: '4',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const numberInputTrigger = css({
  position: 'absolute',
  right: '1px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  borderLeft: '1px solid token(colors.border)',
  bg: 'transparent',
  color: 'fg.muted',
  cursor: 'pointer',
  transition: 'background 0.15s ease, color 0.15s ease',
  '&:hover': {
    bg: 'bg.muted',
    color: 'fg',
  },
  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '& svg': {
    width: '12px',
    height: '12px',
  },
})

export const numberInputIncrementTrigger = css({
  top: '1px',
  height: 'calc(50% - 0.5px)',
  borderTopRightRadius: 'calc(token(radii.md) - 1px)',
  borderBottom: '0.5px solid token(colors.border)',
})

export const numberInputDecrementTrigger = css({
  bottom: '1px',
  height: 'calc(50% - 0.5px)',
  borderBottomRightRadius: 'calc(token(radii.md) - 1px)',
  borderTop: '0.5px solid token(colors.border)',
})

export type NumberInputVariants = RecipeVariantProps<typeof numberInputInput>
