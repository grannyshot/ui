import { tv } from 'tailwind-variants'

export const checkboxRoot = 'inline-flex items-center gap-2 cursor-pointer data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed'

export const checkboxControl = tv({
  base: 'flex items-center justify-center rounded-sm border border-gs-border bg-gs-bg transition-all duration-150 ease-in-out shrink-0 text-transparent data-[state=checked]:bg-gs-accent data-[state=checked]:border-gs-accent data-[state=checked]:text-gs-accent-fg data-[state=indeterminate]:bg-gs-accent data-[state=indeterminate]:border-gs-accent data-[state=indeterminate]:text-gs-accent-fg data-[focus-visible]:shadow-[0_0_0_2px_var(--gs-bg),0_0_0_4px_var(--gs-ring)] data-[hover]:not-data-[disabled]:border-gs-border-strong',

  variants: {
    size: {
      sm: 'w-4 h-4 [&_svg]:w-3 [&_svg]:h-3',
      md: 'w-5 h-5 [&_svg]:w-3.5 [&_svg]:h-3.5',
      lg: 'w-6 h-6 [&_svg]:w-4 [&_svg]:h-4',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const checkboxLabel = 'text-sm font-medium text-gs-fg select-none data-[disabled]:text-gs-fg-subtle'

export type CheckboxControlVariants = Parameters<typeof checkboxControl>[0]
