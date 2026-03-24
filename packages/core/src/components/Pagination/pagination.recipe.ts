import { tv } from 'tailwind-variants'

export const paginationRoot =
  'flex items-center gap-1'

export const paginationItem = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium cursor-pointer transition-all duration-150 ease-in-out border border-transparent text-gs-fg-muted bg-transparent hover:bg-gs-bg-muted hover:text-gs-fg data-[selected]:bg-gs-accent data-[selected]:text-gs-accent-fg data-[selected]:border-gs-accent data-[selected]:hover:bg-gs-accent-hover data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',

  variants: {
    size: {
      sm: 'min-w-[32px] h-[32px] text-xs',
      md: 'min-w-[36px] h-[36px] text-sm',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const paginationEllipsis = tv({
  base: 'inline-flex items-center justify-center text-gs-fg-subtle select-none',

  variants: {
    size: {
      sm: 'min-w-[32px] h-[32px] text-xs',
      md: 'min-w-[36px] h-[36px] text-sm',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type PaginationItemVariants = Parameters<typeof paginationItem>[0]
