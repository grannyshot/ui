import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const radioGroupRoot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2',
  '&[data-orientation=horizontal]': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '4',
  },
})

export const radioGroupLabel = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
  mb: '1',
})

export const radioGroupItem = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2',
  cursor: 'pointer',
  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const radioGroupItemControl = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    border: '2px solid token(colors.border)',
    bg: 'bg',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    flexShrink: 0,
    '&[data-state=checked]': {
      borderColor: 'accent',
    },
    '&[data-focus-visible]': {
      boxShadow: '0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.ring)',
    },
    '&[data-hover]:not([data-disabled])': {
      borderColor: 'border.strong',
    },
    '&[data-hover][data-state=checked]:not([data-disabled])': {
      borderColor: 'accent.hover',
    },
  },

  variants: {
    size: {
      sm: {
        width: '16px',
        height: '16px',
      },
      md: {
        width: '20px',
        height: '20px',
      },
      lg: {
        width: '24px',
        height: '24px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const radioGroupIndicator = cva({
  base: {
    borderRadius: 'full',
    bg: 'accent',
    transition: 'transform 0.15s ease',
    transform: 'scale(0)',
    '&[data-state=checked]': {
      transform: 'scale(1)',
    },
  },

  variants: {
    size: {
      sm: {
        width: '8px',
        height: '8px',
      },
      md: {
        width: '10px',
        height: '10px',
      },
      lg: {
        width: '12px',
        height: '12px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const radioGroupItemText = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
  userSelect: 'none',
  '&[data-disabled]': {
    color: 'fg.subtle',
  },
})

export type RadioGroupItemControlVariants = RecipeVariantProps<typeof radioGroupItemControl>
