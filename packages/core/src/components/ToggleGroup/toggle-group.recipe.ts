import { tv } from 'tailwind-variants'

export const toggleGroupRoot = tv({
  base: 'inline-flex rounded-md border border-gs-border overflow-hidden',
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: { size: 'md' },
})

export const toggleGroupItem = tv({
  base: 'inline-flex items-center justify-center font-medium cursor-pointer transition-all duration-150 ease-in-out bg-gs-bg text-gs-fg-muted border-r border-gs-border last:border-r-0 hover:bg-gs-bg-muted hover:text-gs-fg data-[state=on]:bg-gs-accent data-[state=on]:text-gs-accent-fg data-[state=on]:hover:bg-gs-accent-hover data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
  variants: {
    size: {
      sm: 'pl-3 pr-3 py-1 text-xs h-[32px]',
      md: 'pl-4 pr-4 py-1.5 text-sm h-[36px]',
      lg: 'pl-5 pr-5 py-2 text-base h-[44px]',
    },
  },
  defaultVariants: { size: 'md' },
})

export type ToggleGroupRootVariants = Parameters<typeof toggleGroupRoot>[0]
