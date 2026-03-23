import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const tagsInputRoot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
  width: '100%',
})

export const tagsInputLabel = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
})

export const tagsInputControl = cva({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '1',
    borderRadius: 'md',
    border: '1px solid token(colors.border)',
    bg: 'bg',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    '&:focus-within': {
      borderColor: 'accent',
      boxShadow: '0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.ring)',
    },
  },
  variants: {
    size: {
      sm: { minHeight: '32px', px: '2', py: '1' },
      md: { minHeight: '36px', px: '2', py: '1' },
      lg: { minHeight: '44px', px: '3', py: '1.5' },
    },
  },
  defaultVariants: { size: 'md' },
})

export const tagsInputItem = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '1',
  borderRadius: 'sm',
  bg: 'bg.muted',
  color: 'fg',
  fontSize: 'sm',
  px: '2',
  py: '0.5',
})

export const tagsInputItemText = css({
  fontSize: 'sm',
})

export const tagsInputItemDeleteTrigger = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'fg.muted',
  cursor: 'pointer',
  borderRadius: 'sm',
  '&:hover': { color: 'fg' },
  '& svg': { width: '12px', height: '12px' },
})

export const tagsInputInput = cva({
  base: {
    flex: 1,
    minWidth: '80px',
    border: 'none',
    outline: 'none',
    bg: 'transparent',
    color: 'fg',
  },
  variants: {
    size: {
      sm: { fontSize: 'sm', height: '24px' },
      md: { fontSize: 'sm', height: '28px' },
      lg: { fontSize: 'md', height: '32px' },
    },
  },
  defaultVariants: { size: 'md' },
})

export type TagsInputControlVariants = RecipeVariantProps<typeof tagsInputControl>
