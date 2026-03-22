import { css } from '@/styled-system/css'

export const accordionRoot = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const accordionItem = css({
  borderBottom: '1px solid token(colors.border)',
})

export const accordionItemTrigger = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  py: '3',
  px: '0',
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'fg',
  cursor: 'pointer',
  bg: 'transparent',
  border: 'none',
  outline: 'none',
  transition: 'color 0.15s ease',
  '&[data-hover]:not([data-disabled])': {
    color: 'accent',
  },
  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&[data-focus-visible]': {
    boxShadow: '0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.ring)',
  },
})

export const accordionItemContent = css({
  overflow: 'hidden',
  fontSize: 'sm',
  color: 'fg.muted',
  pb: '3',
})

export const accordionItemIndicator = css({
  color: 'fg.subtle',
  flexShrink: 0,
  transition: 'transform 0.2s ease',
  '&[data-state=open]': {
    transform: 'rotate(180deg)',
  },
})