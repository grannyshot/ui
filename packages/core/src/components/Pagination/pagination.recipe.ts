import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const paginationRoot = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1',
})

export const paginationItem = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'medium',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    border: '1px solid transparent',
    color: 'fg.muted',
    bg: 'transparent',
    '&:hover': {
      bg: 'bg.muted',
      color: 'fg',
    },
    '&[data-selected]': {
      bg: 'accent',
      color: 'accent.fg',
      borderColor: 'accent',
      '&:hover': {
        bg: 'accent.hover',
      },
    },
    '&[data-disabled]': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },

  variants: {
    size: {
      sm: {
        minWidth: '32px',
        height: '32px',
        fontSize: 'xs',
      },
      md: {
        minWidth: '36px',
        height: '36px',
        fontSize: 'sm',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const paginationEllipsis = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'fg.subtle',
    userSelect: 'none',
  },

  variants: {
    size: {
      sm: {
        minWidth: '32px',
        height: '32px',
        fontSize: 'xs',
      },
      md: {
        minWidth: '36px',
        height: '36px',
        fontSize: 'sm',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type PaginationItemVariants = RecipeVariantProps<typeof paginationItem>
