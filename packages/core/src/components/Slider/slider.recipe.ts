import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const sliderRoot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
  width: '100%',
})

export const sliderLabelGroup = css({
  display: 'flex',
  justifyContent: 'space-between',
})

export const sliderLabel = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
})

export const sliderControl = css({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
})

export const sliderTrack = cva({
  base: {
    width: '100%',
    borderRadius: 'full',
    bg: 'bg.muted',
    position: 'relative',
    overflow: 'hidden',
  },

  variants: {
    size: {
      sm: {
        height: '4px',
      },
      md: {
        height: '6px',
      },
      lg: {
        height: '8px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const sliderRange = css({
  position: 'absolute',
  height: '100%',
  bg: 'accent',
  borderRadius: 'full',
})

export const sliderThumb = cva({
  base: {
    borderRadius: 'full',
    bg: 'bg',
    border: '2px solid token(colors.accent)',
    boxShadow: 'sm',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
    outline: 'none',
    '&[data-focus-visible]': {
      boxShadow: '0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.ring)',
    },
    '&[data-disabled]': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },

  variants: {
    size: {
      sm: {
        width: '16px',
        height: '16px',
      },
      md: {
        width: '20px',
        height: '20px',
      },
      lg: {
        width: '24px',
        height: '24px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const sliderValueText = css({
  fontSize: 'sm',
  color: 'fg.muted',
})

export type SliderTrackVariants = RecipeVariantProps<typeof sliderTrack>