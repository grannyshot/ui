import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const alert = cva({
  base: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '3',
    padding: '4',
    borderRadius: 'lg',
    border: '1px solid',
    fontSize: 'sm',
    lineHeight: 'normal',
  },

  variants: {
    variant: {
      info: {
        bg: 'info.subtle',
        borderColor: 'info',
        color: 'fg',
      },
      success: {
        bg: 'success.subtle',
        borderColor: 'success',
        color: 'fg',
      },
      warning: {
        bg: 'warning.subtle',
        borderColor: 'warning',
        color: 'fg',
      },
      error: {
        bg: 'error.subtle',
        borderColor: 'error',
        color: 'fg',
      },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
})

export const alertIcon = cva({
  base: {
    flexShrink: 0,
    width: '20px',
    height: '20px',
    marginTop: '1px',
  },

  variants: {
    variant: {
      info: { color: 'info' },
      success: { color: 'success' },
      warning: { color: 'warning' },
      error: { color: 'error' },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
})

export const alertTitle = css({
  fontWeight: 'semibold',
  color: 'fg',
})

export const alertDescription = css({
  color: 'fg.muted',
})

export type AlertVariants = RecipeVariantProps<typeof alert>
