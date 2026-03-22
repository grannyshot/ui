import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const tabsRoot = css({
  width: '100%',
})

export const tabsList = cva({
  base: {
    display: 'inline-flex',
  },

  variants: {
    variant: {
      line: {
        borderBottom: '1px solid token(colors.border)',
        width: '100%',
      },
      pill: {
        gap: '1',
        bg: 'bg.muted',
        p: '1',
        borderRadius: 'lg',
      },
    },
  },

  defaultVariants: {
    variant: 'line',
  },
})

export const tabsTrigger = cva({
  base: {
    fontSize: 'sm',
    fontWeight: 'medium',
    color: 'fg.muted',
    transition: 'all 0.15s ease',
    cursor: 'pointer',
    outline: 'none',
    bg: 'transparent',
    border: 'none',
    '&[data-disabled]': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    '&[data-hover]:not([data-selected]):not([data-disabled])': {
      color: 'fg',
    },
    '&[data-focus-visible]': {
      boxShadow: '0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.ring)',
    },
  },

  variants: {
    variant: {
      line: {
        px: '4',
        py: '2',
        borderBottom: '2px solid transparent',
        '&[data-selected]': {
          color: 'accent',
          borderBottomColor: 'accent',
        },
      },
      pill: {
        px: '4',
        py: '1',
        borderRadius: 'md',
        '&[data-selected]': {
          color: 'fg',
          bg: 'bg',
          boxShadow: 'xs',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'line',
  },
})

export const tabsContent = css({
  pt: '4',
  outline: 'none',
})

export const tabsIndicator = css({
  bg: 'accent',
  height: '2px',
})

export type TabsListVariants = RecipeVariantProps<typeof tabsList>
export type TabsTriggerVariants = RecipeVariantProps<typeof tabsTrigger>