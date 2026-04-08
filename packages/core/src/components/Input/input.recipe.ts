import { tv } from 'tailwind-variants'

export const input = tv({
  base: 'w-full rounded-md border border-gs-border bg-gs-bg text-gs-fg outline-none transition-[border-color] duration-150 ease-in-out placeholder:text-gs-fg-subtle focus:border-gs-border-focus disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    size: {
      sm: 'pl-3 pr-3 py-1 text-xs h-8',
      md: 'pl-3 pr-3 py-2 text-sm h-9',
      lg: 'pl-4 pr-4 py-3 text-base h-11',
    },
    state: {
      default: '',
      error: 'border-gs-error focus:border-gs-error',
      success: 'border-gs-success focus:border-gs-success',
    },
  },
  defaultVariants: {
    size: 'md',
    state: 'default',
  },
})

export type InputVariants = Parameters<typeof input>[0]
