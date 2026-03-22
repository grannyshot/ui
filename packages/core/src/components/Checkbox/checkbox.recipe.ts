import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const checkboxRoot = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2',
  cursor: 'pointer',
  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const checkboxControl = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'sm',
    border: '1px solid token(colors.border)',
    bg: 'bg',
    transition: 'all 0.15s ease',
    flexShrink: 0,
    color: 'transparent',
    '&[data-state=checked], &[data-state=indeterminate]': {
      bg: 'accent',
      borderColor: 'accent',
      color: 'accent.fg',
    },
    '&[data-focus-visible]': {
      boxShadow: '0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.ring)',
    },
    '&[data-hover]:not([data-disabled])': {
      borderColor: 'border.strong',
    },
  },

  variants: {
    size: {
      sm: {
        width: '16px',
        height: '16px',
        '& svg': {
          width: '12px',
          height: '12px',
        },
      },
      md: {
        width: '20px',
        height: '20px',
        '& svg': {
          width: '14px',
          height: '14px',
        },
      },
      lg: {
        width: '24px',
        height: '24px',
        '& svg': {
          width: '16px',
          height: '16px',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const checkboxLabel = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
  userSelect: 'none',
  '&[data-disabled]': {
    color: 'fg.subtle',
  },
})

export type CheckboxControlVariants = RecipeVariantProps<typeof checkboxControl>
