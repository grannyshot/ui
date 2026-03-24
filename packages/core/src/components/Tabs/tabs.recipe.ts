import { tv } from 'tailwind-variants'

export const tabsRoot =
  'w-full'

export const tabsList = tv({
  base: 'inline-flex',

  variants: {
    variant: {
      line: 'border-b border-gs-border w-full',
      pill: 'gap-1 bg-gs-bg-muted p-1 rounded-lg',
    },
  },

  defaultVariants: {
    variant: 'line',
  },
})

export const tabsTrigger = tv({
  base: 'text-sm font-medium text-gs-fg-muted transition-all duration-150 ease-in-out cursor-pointer outline-none bg-transparent border-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[hover]:not-data-selected:not-data-disabled:text-gs-fg data-[focus-visible]:shadow-[0_0_0_2px_var(--gs-bg),0_0_0_4px_var(--gs-ring)]',

  variants: {
    variant: {
      line: 'px-4 py-2 border-b-2 border-transparent data-[selected]:text-gs-accent data-[selected]:border-b-gs-accent',
      pill: 'px-4 py-1 rounded-md data-[selected]:text-gs-fg data-[selected]:bg-gs-bg data-[selected]:shadow-xs',
    },
  },

  defaultVariants: {
    variant: 'line',
  },
})

export const tabsContent =
  'pt-4 outline-none'

export const tabsIndicator =
  'bg-gs-accent h-0.5'

export type TabsListVariants = Parameters<typeof tabsList>[0]
export type TabsTriggerVariants = Parameters<typeof tabsTrigger>[0]
