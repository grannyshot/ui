import { tv } from 'tailwind-variants'

export const textarea = tv({
  base: 'w-full rounded-md border border-gs-border bg-gs-bg text-gs-fg outline-none transition-[border-color] duration-150 ease-in-out leading-normal placeholder:text-gs-fg-subtle focus:border-gs-border-focus disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    size: {
      sm: 'px-3 py-1 text-xs min-h-16',
      md: 'px-3 py-2 text-sm min-h-20',
      lg: 'px-4 py-3 text-base min-h-30',
    },
    state: {
      default: '',
      error: 'border-gs-error focus:border-gs-error',
      success: 'border-gs-success focus:border-gs-success',
    },
    resize: {
      none: 'resize-none',
      vertical: 'resize-y',
      both: 'resize',
    },
  },
  defaultVariants: {
    size: 'md',
    state: 'default',
    resize: 'vertical',
  },
})

export type TextareaVariants = Parameters<typeof textarea>[0]
