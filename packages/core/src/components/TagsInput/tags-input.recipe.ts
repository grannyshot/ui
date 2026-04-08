import { tv } from 'tailwind-variants'

export const tagsInputRoot = 'flex flex-col gap-1 w-full'

export const tagsInputLabel = 'text-sm font-medium text-gs-fg'

export const tagsInputControl = tv({
  base: 'flex flex-wrap items-center gap-1 rounded-md border border-gs-border bg-gs-bg transition-[border-color,box-shadow] duration-150 ease-in-out focus-within:border-gs-accent focus-within:shadow-[0_0_0_2px_var(--gs-bg),0_0_0_4px_var(--gs-ring)]',
  variants: {
    size: {
      sm: 'min-h-8 pl-2 pr-2 py-1',
      md: 'min-h-9 pl-2 pr-2 py-1',
      lg: 'min-h-11 pl-3 pr-3 py-1.5',
    },
  },
  defaultVariants: { size: 'md' },
})

export const tagsInputItem = 'inline-flex items-center gap-1 rounded-sm bg-gs-bg-muted text-gs-fg text-sm pl-2 pr-2 py-0.5'

export const tagsInputItemText = 'text-sm'

export const tagsInputItemDeleteTrigger = 'inline-flex items-center justify-center text-gs-fg-muted cursor-pointer rounded-sm hover:text-gs-fg [&_svg]:w-3 [&_svg]:h-3'

export const tagsInputInput = tv({
  base: 'flex-1 min-w-[80px] border-none outline-none bg-transparent text-gs-fg',
  variants: {
    size: {
      sm: 'text-sm h-6',
      md: 'text-sm h-7',
      lg: 'text-base h-8',
    },
  },
  defaultVariants: { size: 'md' },
})

export type TagsInputControlVariants = Parameters<typeof tagsInputControl>[0]
