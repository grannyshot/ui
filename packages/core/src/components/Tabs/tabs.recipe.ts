import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const tabsRoot = css({
  width: '100%',
})

export const tabsList = cva({
  base: {
    display: 'flex',
    borderBottom: '1px solid token(colors.border)',
  },

  variants: {
    variant: {
      line: {},
    },
  },

  defaultVariants: {
    variant: 'line',
  },
})

export const tabsTrigger = css({
  px: '4',
  py: '2',
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg.muted',
  borderBottom: '2px solid transparent',
  transition: 'color 0.15s ease, border-color 0.15s ease',
  cursor: 'pointer',
  outline: 'none',
  bg: 'transparent',
  '&[data-selected]': {
    color: 'accent',
    borderBottomColor: 'accent',
  },
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