import { tv } from 'tailwind-variants'

export const skeleton = tv({
  base: 'bg-gs-bg-muted rounded-md animate-pulse',
  variants: {
    variant: {
      text: 'h-[1em] w-full rounded-sm',
      circular: 'rounded-full',
      rectangular: 'rounded-md',
    },
  },
  defaultVariants: {
    variant: 'rectangular',
  },
})

export type SkeletonVariants = Parameters<typeof skeleton>[0]
