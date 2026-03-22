import { css } from '@/styled-system/css'

export const menuContent = css({
  bg: 'bg',
  border: '1px solid token(colors.border)',
  borderRadius: 'md',
  boxShadow: 'lg',
  py: '1',
  zIndex: 'dropdown',
  minWidth: '160px',
  '&[data-state=open]': {
    animation: 'fadeIn 0.15s ease',
  },
  '&[data-state=closed]': {
    animation: 'fadeOut 0.1s ease',
  },
})

export const menuItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '2',
  px: '3',
  py: '2',
  fontSize: 'sm',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background 0.1s ease',
  '&[data-highlighted]': {
    bg: 'bg.muted',
  },
  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const menuSeparator = css({
  height: '1px',
  bg: 'border',
  mx: '1',
  my: '1',
})

export const menuItemGroup = css({})

export const menuItemGroupLabel = css({
  px: '3',
  py: '1',
  fontSize: 'xs',
  fontWeight: 'semibold',
  color: 'fg.muted',
})

export const menuTriggerItem = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2',
  px: '3',
  py: '2',
  fontSize: 'sm',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background 0.1s ease',
  '&[data-highlighted]': {
    bg: 'bg.muted',
  },
  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
