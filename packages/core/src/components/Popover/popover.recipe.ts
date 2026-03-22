import { css } from '@/styled-system/css'

export const popoverContent = css({
  position: 'relative',
  bg: 'bg',
  border: '1px solid token(colors.border)',
  borderRadius: 'md',
  boxShadow: 'lg',
  p: '4',
  zIndex: 'popover',
  minWidth: '200px',
  '&[data-state=open]': {
    animation: 'fadeIn 0.15s ease',
  },
  '&[data-state=closed]': {
    animation: 'fadeOut 0.1s ease',
  },
})

export const popoverArrow = css({
  '--arrow-size': '8px',
  '--arrow-background': 'token(colors.bg)',
})

export const popoverArrowTip = css({
  borderTopWidth: '1px',
  borderLeftWidth: '1px',
  borderColor: 'border',
})

export const popoverTitle = css({
  fontSize: 'sm',
  fontWeight: 'semibold',
  color: 'fg',
})

export const popoverDescription = css({
  fontSize: 'sm',
  color: 'fg.muted',
})

export const popoverCloseTrigger = css({
  position: 'absolute',
  top: '2',
  right: '2',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  borderRadius: 'sm',
  color: 'fg.muted',
  cursor: 'pointer',
  transition: 'color 0.15s ease',
  _hover: {
    color: 'fg',
  },
})