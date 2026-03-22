import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const dialogOverlay = css({
  position: 'fixed',
  inset: 0,
  bg: 'overlay',
  zIndex: 'overlay',
  '&[data-state=open]': {
    animation: 'fadeIn 0.2s ease',
  },
  '&[data-state=closed]': {
    animation: 'fadeOut 0.15s ease',
  },
})

export const dialogContent = cva({
  base: {
    position: 'relative',
    bg: 'bg',
    border: '1px solid token(colors.border)',
    borderRadius: 'lg',
    boxShadow: 'xl',
    zIndex: 'modal',
    width: '100%',
    p: '6',
    '&[data-state=open]': {
      animation: 'fadeIn 0.2s ease',
    },
    '&[data-state=closed]': {
      animation: 'fadeOut 0.15s ease',
    },
  },

  variants: {
    size: {
      sm: {
        maxWidth: 'sm',
      },
      md: {
        maxWidth: 'md',
      },
      lg: {
        maxWidth: 'lg',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const dialogPositioner = css({
  position: 'fixed',
  inset: 0,
  zIndex: 'modal',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: '4',
})

export const dialogTitle = css({
  fontSize: 'lg',
  fontWeight: 'semibold',
  color: 'fg',
  mb: '2',
})

export const dialogDescription = css({
  fontSize: 'sm',
  color: 'fg.muted',
  mb: '4',
})

export const dialogCloseTrigger = css({
  position: 'absolute',
  top: '3',
  right: '3',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: 'sm',
  color: 'fg.muted',
  cursor: 'pointer',
  transition: 'background 0.15s ease, color 0.15s ease',
  '&:hover': {
    bg: 'bg.muted',
    color: 'fg',
  },
})

export type DialogContentVariants = RecipeVariantProps<typeof dialogContent>