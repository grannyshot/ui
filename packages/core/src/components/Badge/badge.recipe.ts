import { cva } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const badge = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'medium',
    lineHeight: '1',
    borderRadius: 'full',
  },

  variants: {
    variant: {
      success: {
        bg: 'success.subtle',
        color: 'success',
      },
      warning: {
        bg: 'warning.subtle',
        color: 'warning',
      },
      error: {
        bg: 'error.subtle',
        color: 'error',
      },
      info: {
        bg: 'info.subtle',
        color: 'info',
      },
      neutral: {
        bg: 'bg.muted',
        color: 'fg.muted',
      },
    },
    size: {
      sm: {
        px: '2',
        py: '0',
        fontSize: 'xs',
        height: '20px',
      },
      md: {
        px: '2',
        py: '1',
        fontSize: 'xs',
        height: '24px',
      },
    },
  },

  defaultVariants: {
    variant: 'neutral',
    size: 'md',
  },
})

export type BadgeVariants = RecipeVariantProps<typeof badge>