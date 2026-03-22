import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const avatar = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    overflow: 'hidden',
    bg: 'bg.muted',
    color: 'fg.muted',
    fontWeight: 'medium',
    flexShrink: 0,
    userSelect: 'none',
  },

  variants: {
    size: {
      sm: {
        w: '32px',
        h: '32px',
        fontSize: 'xs',
      },
      md: {
        w: '40px',
        h: '40px',
        fontSize: 'sm',
      },
      lg: {
        w: '48px',
        h: '48px',
        fontSize: 'md',
      },
      xl: {
        w: '64px',
        h: '64px',
        fontSize: 'lg',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const avatarImage = css({
  w: '100%',
  h: '100%',
  objectFit: 'cover',
})

export type AvatarVariants = RecipeVariantProps<typeof avatar>