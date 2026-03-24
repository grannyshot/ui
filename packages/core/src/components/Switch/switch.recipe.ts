import { tv } from 'tailwind-variants'

export const switchRoot = 'inline-flex items-center gap-2 cursor-pointer data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed'

export const switchControl = tv({
  base: 'inline-flex items-center rounded-full bg-gs-bg-muted transition-all duration-200 ease-in-out shrink-0 relative data-[state=checked]:bg-gs-accent data-[focus-visible]:shadow-[0_0_0_2px_var(--gs-bg),0_0_0_4px_var(--gs-ring)]',

  variants: {
    size: {
      sm: 'w-8 h-[18px]',
      md: 'w-10 h-[22px]',
      lg: 'w-12 h-[26px]',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const switchThumb = tv({
  base: 'rounded-full bg-white shadow-xs transition-transform duration-200 ease-in-out',

  variants: {
    size: {
      sm: 'w-3.5 h-3.5 translate-x-0.5 data-[state=checked]:translate-x-4',
      md: 'w-[18px] h-[18px] translate-x-0.5 data-[state=checked]:translate-x-5',
      lg: 'w-[22px] h-[22px] translate-x-0.5 data-[state=checked]:translate-x-6',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const switchLabel = 'text-sm font-medium text-gs-fg select-none data-[disabled]:text-gs-fg-subtle'

export type SwitchControlVariants = Parameters<typeof switchControl>[0]
