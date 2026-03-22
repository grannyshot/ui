import { cva } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const textarea = cva({
  base: {
    width: '100%',
    borderRadius: 'md',
    border: '1px solid token(colors.border)',
    bg: 'bg',
    color: 'fg',
    outline: 'none',
    transition: 'border-color 0.15s ease',
    lineHeight: 'normal',
    _placeholder: { color: 'fg.subtle' },
    _focus: { borderColor: 'border.focus' },
    _disabled: { opacity: 0.5, cursor: 'not-allowed' },
  },
  variants: {
    size: {
      sm: { px: '3', py: '1', fontSize: 'xs', minHeight: '64px' },
      md: { px: '3', py: '2', fontSize: 'sm', minHeight: '80px' },
      lg: { px: '4', py: '3', fontSize: 'md', minHeight: '120px' },
    },
    state: {
      default: {},
      error: { borderColor: 'error', _focus: { borderColor: 'error' } },
      success: { borderColor: 'success', _focus: { borderColor: 'success' } },
    },
    resize: {
      none: { resize: 'none' },
      vertical: { resize: 'vertical' },
      both: { resize: 'both' },
    },
  },
  defaultVariants: { size: 'md', state: 'default', resize: 'vertical' },
})

export type TextareaVariants = RecipeVariantProps<typeof textarea>
