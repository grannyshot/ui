import { css } from '@/styled-system/css'

export const tooltipTrigger = css({
  display: 'inline-flex',
})

export const tooltipContent = css({
  bg: 'bg.inverse',
  color: 'fg.inverse',
  fontSize: 'xs',
  fontWeight: 'medium',
  px: '3',
  py: '1',
  borderRadius: 'sm',
  boxShadow: 'md',
  zIndex: 'popover',
  maxWidth: '200px',
  '&[data-state=open]': {
    animation: 'fadeIn 0.15s ease',
  },
  '&[data-state=closed]': {
    animation: 'fadeOut 0.1s ease',
  },
})

export const tooltipArrow = css({
  '--arrow-size': '8px',
  '--arrow-background': 'token(colors.bg.inverse)',
})
