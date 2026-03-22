import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const selectTrigger = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 'md',
    border: '1px solid token(colors.border)',
    bg: 'bg',
    color: 'fg',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease',
    outline: 'none',
    gap: '2',
    '&[data-placeholder-shown]': {
      color: 'fg.subtle',
    },
    '&[data-state=open]': {
      borderColor: 'border.focus',
    },
    '&[data-disabled]': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    '&[data-focus-visible]': {
      boxShadow: '0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.ring)',
    },
  },

  variants: {
    size: {
      sm: {
        px: '3',
        height: '32px',
        fontSize: 'xs',
      },
      md: {
        px: '3',
        height: '36px',
        fontSize: 'sm',
      },
      lg: {
        px: '4',
        height: '44px',
        fontSize: 'md',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const selectContent = css({
  bg: 'bg',
  border: '1px solid token(colors.border)',
  borderRadius: 'md',
  boxShadow: 'lg',
  overflow: 'hidden',
  py: '1',
  zIndex: 'dropdown',
  minWidth: 'var(--reference-width)',
  '&[data-state=open]': {
    animation: 'fadeIn 0.15s ease',
  },
  '&[data-state=closed]': {
    animation: 'fadeOut 0.1s ease',
  },
})

export const selectItem = css({
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

export const selectIndicator = css({
  color: 'fg.subtle',
  transition: 'transform 0.15s ease',
  flexShrink: 0,
  width: '16px',
  height: '16px',
  '&[data-state=open]': {
    transform: 'rotate(180deg)',
  },
})

export const selectItemIndicator = css({
  color: 'accent',
  flexShrink: 0,
})

export const selectLabel = css({
  display: 'block',
  fontSize: 'xs',
  fontWeight: 'medium',
  color: 'fg',
  mb: '1',
})

export type SelectTriggerVariants = RecipeVariantProps<typeof selectTrigger>
