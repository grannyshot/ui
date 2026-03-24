import { tv } from 'tailwind-variants'

export const radioGroupRoot = 'flex flex-col gap-2 data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap data-[orientation=horizontal]:gap-4'

export const radioGroupLabel = 'text-sm font-medium text-gs-fg mb-1'

export const radioGroupItem = 'inline-flex items-center gap-2 cursor-pointer data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed'

export const radioGroupItemControl = tv({
  base: 'flex items-center justify-center rounded-full border-2 border-gs-border bg-gs-bg transition-[border-color,box-shadow] duration-150 ease-in-out shrink-0 data-[state=checked]:border-gs-accent data-[focus-visible]:shadow-[0_0_0_2px_var(--gs-bg),0_0_0_4px_var(--gs-ring)] data-[hover]:not-data-[disabled]:border-gs-border-strong data-[hover]:data-[state=checked]:not-data-[disabled]:border-gs-accent-hover',

  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const radioGroupIndicator = tv({
  base: 'rounded-full bg-gs-accent transition-transform duration-150 ease-in-out scale-0 data-[state=checked]:scale-100',

  variants: {
    size: {
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const radioGroupItemText = 'text-sm font-medium text-gs-fg select-none data-[disabled]:text-gs-fg-subtle'

export type RadioGroupItemControlVariants = Parameters<typeof radioGroupItemControl>[0]
