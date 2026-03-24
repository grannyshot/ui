import { tv } from 'tailwind-variants'

export const avatar = tv({
  base: 'inline-flex items-center justify-center rounded-full overflow-hidden bg-gs-bg-muted text-gs-fg-muted font-medium shrink-0 select-none',
  variants: {
    size: {
      sm: 'w-8 h-8 text-xs',
      md: 'w-10 h-10 text-sm',
      lg: 'w-12 h-12 text-base',
      xl: 'w-16 h-16 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const avatarImage = 'w-full h-full object-cover'

export type AvatarVariants = Parameters<typeof avatar>[0]
