import { tv } from 'tailwind-variants'

export const button = tv({
  base: 'inline-flex items-center justify-center gap-2 rounded-md font-medium border-0 cursor-pointer transition-all duration-150 ease-in-out outline-none leading-none active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 focus-visible:shadow-[0_0_0_2px_var(--gs-bg),0_0_0_4px_var(--gs-ring)]',
  variants: {
    variant: {
      primary: 'bg-gs-accent text-gs-accent-fg hover:bg-gs-accent-hover',
      secondary: 'bg-gs-bg-muted text-gs-fg border border-gs-border hover:bg-gs-bg-subtle',
      ghost: 'bg-transparent text-gs-fg-muted hover:bg-gs-bg-muted hover:text-gs-fg',
      danger: 'bg-gs-error text-gs-error-fg hover:opacity-90',
      outline: 'bg-transparent text-gs-accent border border-gs-accent hover:bg-gs-accent-subtle',
    },
    size: {
      sm: 'px-3 py-1 text-xs h-8',
      md: 'px-4 py-2 text-sm h-9',
      lg: 'px-6 py-3 text-base h-11',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonVariants = Parameters<typeof button>[0]
