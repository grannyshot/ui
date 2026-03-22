import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const switchRoot = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2',
  cursor: 'pointer',
  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const switchControl = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 'full',
    bg: 'bg.muted',
    transition: 'all 0.2s ease',
    flexShrink: 0,
    position: 'relative',
    '&[data-state=checked]': {
      bg: 'accent',
    },
    '&[data-focus-visible]': {
      boxShadow: '0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.ring)',
    },
  },

  variants: {
    size: {
      sm: {
        width: '32px',
        height: '18px',
      },
      md: {
        width: '40px',
        height: '22px',
      },
      lg: {
        width: '48px',
        height: '26px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const switchThumb = cva({
  base: {
    borderRadius: 'full',
    bg: 'white',
    boxShadow: 'xs',
    transition: 'transform 0.2s ease',
  },

  variants: {
    size: {
      sm: {
        width: '14px',
        height: '14px',
        transform: 'translateX(2px)',
        '&[data-state=checked]': {
          transform: 'translateX(16px)',
        },
      },
      md: {
        width: '18px',
        height: '18px',
        transform: 'translateX(2px)',
        '&[data-state=checked]': {
          transform: 'translateX(20px)',
        },
      },
      lg: {
        width: '22px',
        height: '22px',
        transform: 'translateX(2px)',
        '&[data-state=checked]': {
          transform: 'translateX(24px)',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const switchLabel = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
  userSelect: 'none',
  '&[data-disabled]': {
    color: 'fg.subtle',
  },
})

export type SwitchControlVariants = RecipeVariantProps<typeof switchControl>
