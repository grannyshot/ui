import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const fileUploadRoot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '3',
  width: '100%',
})

export const fileUploadLabel = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
})

export const fileUploadDropzone = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2',
  padding: '8',
  borderRadius: 'lg',
  border: '2px dashed token(colors.border)',
  bg: 'bg.subtle',
  color: 'fg.muted',
  cursor: 'pointer',
  transition: 'border-color 0.15s ease, background 0.15s ease',
  '&:hover': {
    borderColor: 'accent',
    bg: 'accent.subtle',
  },
  '&[data-dragging]': {
    borderColor: 'accent',
    bg: 'accent.subtle',
  },
})

export const fileUploadTrigger = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'accent',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
})

export const fileUploadItemGroup = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2',
})

export const fileUploadItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '3',
  padding: '2',
  borderRadius: 'md',
  border: '1px solid token(colors.border)',
  bg: 'bg',
  fontSize: 'sm',
})

export const fileUploadItemName = css({
  flex: 1,
  color: 'fg',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const fileUploadItemSizeText = css({
  color: 'fg.muted',
  fontSize: 'xs',
  flexShrink: 0,
})

export const fileUploadItemDeleteTrigger = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  borderRadius: 'sm',
  color: 'fg.muted',
  cursor: 'pointer',
  transition: 'background 0.15s ease, color 0.15s ease',
  flexShrink: 0,
  '&:hover': {
    bg: 'bg.muted',
    color: 'error',
  },
})
