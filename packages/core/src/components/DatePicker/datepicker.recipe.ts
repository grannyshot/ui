import { css } from '@/styled-system/css'

export const datePickerControl = css({
  display: 'flex',
  gap: '2',
})

export const datePickerInput = css({
  width: '100%',
  border: '1px solid token(colors.border)',
  borderRadius: 'md',
  px: '3',
  height: '36px',
  fontSize: 'sm',
  bg: 'bg',
  color: 'fg',
  outline: 'none',
  transition: 'border-color 0.15s ease',
  '&:focus': {
    borderColor: 'border.focus',
  },
  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&::placeholder': {
    color: 'fg.subtle',
  },
})

export const datePickerTrigger = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '36px',
  height: '36px',
  borderRadius: 'md',
  border: '1px solid token(colors.border)',
  bg: 'bg',
  color: 'fg.muted',
  cursor: 'pointer',
  transition: 'border-color 0.15s ease, color 0.15s ease',
  '&:hover': {
    borderColor: 'border.focus',
    color: 'fg',
  },
  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const datePickerContent = css({
  bg: 'bg',
  border: '1px solid token(colors.border)',
  borderRadius: 'md',
  boxShadow: 'lg',
  p: '4',
  zIndex: 'dropdown',
  '&[data-state=open]': {
    animation: 'fadeIn 0.15s ease',
  },
  '&[data-state=closed]': {
    animation: 'fadeOut 0.1s ease',
  },
})

export const datePickerViewControl = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: '2',
})

export const datePickerViewTrigger = css({
  fontSize: 'sm',
  fontWeight: 'semibold',
  color: 'fg',
  cursor: 'pointer',
  bg: 'transparent',
  border: 'none',
  borderRadius: 'md',
  px: '2',
  py: '1',
  transition: 'background 0.1s ease',
  '&:hover': {
    bg: 'bg.muted',
  },
})

export const datePickerPrevTrigger = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: 'md',
  bg: 'transparent',
  border: 'none',
  color: 'fg.muted',
  cursor: 'pointer',
  transition: 'background 0.1s ease, color 0.1s ease',
  '&:hover': {
    bg: 'bg.muted',
    color: 'fg',
  },
})

export const datePickerNextTrigger = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: 'md',
  bg: 'transparent',
  border: 'none',
  color: 'fg.muted',
  cursor: 'pointer',
  transition: 'background 0.1s ease, color 0.1s ease',
  '&:hover': {
    bg: 'bg.muted',
    color: 'fg',
  },
})

export const datePickerTable = css({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0',
  textAlign: 'center',
})

export const datePickerTableHeader = css({
  fontSize: 'xs',
  fontWeight: 'medium',
  color: 'fg.subtle',
  textAlign: 'center',
  pb: '1',
})

export const datePickerTableCellTrigger = css({
  width: '36px',
  height: '36px',
  borderRadius: 'md',
  fontSize: 'sm',
  cursor: 'pointer',
  bg: 'transparent',
  border: 'none',
  color: 'fg',
  transition: 'background 0.1s ease',
  '&[data-today]': {
    fontWeight: 'bold',
  },
  '&[data-selected]': {
    bg: 'accent',
    color: 'accent.fg',
  },
  '&:hover:not([data-selected])': {
    bg: 'bg.muted',
  },
  '&[data-outside-range]': {
    color: 'fg.subtle',
    opacity: 0.5,
  },
  '&[data-disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
})
