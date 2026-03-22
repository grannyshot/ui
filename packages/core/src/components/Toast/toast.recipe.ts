import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const toastRoot = cva({
  base: {
    display: 'flex',
    gap: '3',
    alignItems: 'flex-start',
    bg: 'bg',
    border: '1px solid token(colors.border)',
    borderRadius: 'md',
    boxShadow: 'lg',
    p: '4',
    borderLeftWidth: '3px',
    borderLeftStyle: 'solid',
    minWidth: '280px',
    maxWidth: '420px',
    opacity: 'var(--opacity)',
    transform: 'translateX(var(--x)) translateY(var(--y)) scale(var(--scale, 1))',
    height: 'var(--height, auto)',
    zIndex: 'var(--z-index)',
    transition: 'transform 0.35s cubic-bezier(0.21, 1.02, 0.73, 1), opacity 0.3s ease, height 0.35s ease',
    willChange: 'transform, opacity, height',
  },

  variants: {
    variant: {
      default: {
        borderLeftColor: 'token(colors.border)',
      },
      success: {
        borderLeftColor: 'token(colors.success)',
      },
      error: {
        borderLeftColor: 'token(colors.error)',
      },
      warning: {
        borderLeftColor: 'token(colors.warning)',
      },
      info: {
        borderLeftColor: 'token(colors.info)',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export const toastTitle = css({
  fontSize: 'sm',
  fontWeight: 'semibold',
  color: 'fg',
})

export const toastDescription = css({
  fontSize: 'sm',
  color: 'fg.muted',
  mt: '1',
})

export const toastCloseTrigger = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '20px',
  height: '20px',
  borderRadius: 'sm',
  color: 'fg.subtle',
  cursor: 'pointer',
  border: 'none',
  bg: 'transparent',
  transition: 'color 0.15s ease, background 0.15s ease',
  ml: 'auto',
  _hover: {
    color: 'fg',
    bg: 'bg.muted',
  },
})

export const toastGroup = css({
  outline: 'none',
})

export type ToastRootVariants = RecipeVariantProps<typeof toastRoot>