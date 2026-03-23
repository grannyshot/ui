import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const toggleGroupRoot = cva({
  base: {
    display: 'inline-flex',
    borderRadius: 'md',
    border: '1px solid token(colors.border)',
    overflow: 'hidden',
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  defaultVariants: { size: 'md' },
})

export const toggleGroupItem = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'medium',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    bg: 'bg',
    color: 'fg.muted',
    borderRight: '1px solid token(colors.border)',
    '&:last-child': { borderRight: 'none' },
    '&:hover': { bg: 'bg.muted', color: 'fg' },
    '&[data-state=on]': {
      bg: 'accent',
      color: 'accent.fg',
      '&:hover': { bg: 'accent.hover' },
    },
    '&[data-disabled]': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  variants: {
    size: {
      sm: { px: '3', py: '1', fontSize: 'xs', height: '32px' },
      md: { px: '4', py: '1.5', fontSize: 'sm', height: '36px' },
      lg: { px: '5', py: '2', fontSize: 'md', height: '44px' },
    },
  },
  defaultVariants: { size: 'md' },
})

export type ToggleGroupRootVariants = RecipeVariantProps<typeof toggleGroupRoot>
