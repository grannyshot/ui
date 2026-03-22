import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const progressRoot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
  width: '100%',
})

export const progressHeader = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const progressLabel = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
})

export const progressTrack = cva({
  base: {
    width: '100%',
    borderRadius: 'full',
    bg: 'bg.muted',
    overflow: 'hidden',
  },

  variants: {
    size: {
      sm: {
        height: '4px',
      },
      md: {
        height: '8px',
      },
      lg: {
        height: '12px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const progressRange = css({
  height: '100%',
  bg: 'accent',
  borderRadius: 'full',
  transition: 'width 0.3s ease',
})

export const progressValueText = css({
  fontSize: 'xs',
  color: 'fg.muted',
})

export type ProgressTrackVariants = RecipeVariantProps<typeof progressTrack>
