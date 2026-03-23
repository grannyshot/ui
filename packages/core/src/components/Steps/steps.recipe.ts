import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const stepsRoot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
  width: '100%',
})

export const stepsList = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0',
  width: '100%',
})

export const stepsItem = css({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  '&:last-child': {
    flex: 'none',
  },
})

export const stepsTrigger = css({
  display: 'flex',
  alignItems: 'center',
  gap: '2',
  cursor: 'pointer',
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg.muted',
  whiteSpace: 'nowrap',
  '&[data-current]': {
    color: 'accent',
  },
  '&[data-complete]': {
    color: 'fg',
  },
})

export const stepsIndicator = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    border: '2px solid token(colors.border)',
    bg: 'bg',
    color: 'fg.muted',
    fontWeight: 'semibold',
    fontSize: 'xs',
    flexShrink: 0,
    transition: 'all 0.15s ease',
    '&[data-current]': {
      borderColor: 'accent',
      color: 'accent',
    },
    '&[data-complete]': {
      borderColor: 'accent',
      bg: 'accent',
      color: 'accent.fg',
    },
  },
  variants: {
    size: {
      sm: { width: '28px', height: '28px' },
      md: { width: '32px', height: '32px' },
    },
  },
  defaultVariants: { size: 'md' },
})

export const stepsSeparator = css({
  flex: 1,
  height: '2px',
  bg: 'border',
  mx: '2',
  '&[data-complete]': {
    bg: 'accent',
  },
})

export const stepsContent = css({
  fontSize: 'sm',
  color: 'fg.muted',
})

export type StepsIndicatorVariants = RecipeVariantProps<typeof stepsIndicator>
