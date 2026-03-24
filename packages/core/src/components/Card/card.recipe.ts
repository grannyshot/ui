import { tv } from 'tailwind-variants'

export const card = tv({
  base: 'bg-gs-bg-subtle border border-gs-border rounded-lg transition-[border-color,box-shadow] duration-200 ease-in-out',
  variants: {
    padding: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
    hoverable: {
      true: 'cursor-pointer hover:border-gs-border-focus hover:shadow-md',
    },
  },
  defaultVariants: {
    padding: 'md',
  },
})

export type CardVariants = Parameters<typeof card>[0]
