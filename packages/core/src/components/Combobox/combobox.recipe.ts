import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const comboboxControl = css({
  position: 'relative',
  width: '100%',
})

export const comboboxInput = cva({
  base: {
    width: '100%',
    borderRadius: 'md',
    border: '1px solid token(colors.border)',
    bg: 'bg',
    color: 'fg',
    outline: 'none',
    px: '3',
    transition: 'border-color 0.15s ease',
    '&:focus': {
      borderColor: 'border.focus',
    },
    '&::placeholder': {
      color: 'fg.subtle',
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
        fontSize: 'xs',
      },
      md: {
        height: '36px',
        fontSize: 'sm',
      },
      lg: {
        height: '44px',
        fontSize: 'md',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const comboboxContent = css({
  bg: 'bg',
  border: '1px solid token(colors.border)',
  borderRadius: 'md',
  boxShadow: 'lg',
  py: '1',
  zIndex: 'dropdown',
  overflow: 'hidden',
  maxHeight: '200px',
  overflowY: 'auto',
  minWidth: 'var(--reference-width)',
  '&[data-state=open]': {
    animation: 'fadeIn 0.15s ease',
  },
  '&[data-state=closed]': {
    animation: 'fadeOut 0.1s ease',
  },
})

export const comboboxItem = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: '3',
  py: '2',
  fontSize: 'sm',
  cursor: 'pointer',
  transition: 'background 0.1s ease',
  outline: 'none',
  '&[data-highlighted]': {
    bg: 'bg.muted',
  },
  '&[data-state=checked]': {
    color: 'accent',
    fontWeight: 'medium',
  },
  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const comboboxItemIndicator = css({
  color: 'accent',
  flexShrink: 0,
})

export const comboboxTrigger = css({
  position: 'absolute',
  right: '0',
  top: '0',
  bottom: '0',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: '2',
  color: 'fg.subtle',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  outline: 'none',
  transition: 'transform 0.15s ease',
  '&[data-state=open]': {
    transform: 'rotate(180deg)',
  },
})

export const comboboxClearTrigger = css({
  position: 'absolute',
  right: '24px',
  top: '0',
  bottom: '0',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: '1',
  color: 'fg.subtle',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  outline: 'none',
  '&:hover': {
    color: 'fg',
  },
})

export type ComboboxInputVariants = RecipeVariantProps<typeof comboboxInput>