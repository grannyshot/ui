import { css } from '@/styled-system/css'

export const tableRoot = css({
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: 'sm',
})

export const tableHeader = css({
  borderBottom: '1px solid token(colors.border)',
})

export const tableHeaderCell = css({
  px: '4',
  py: '3',
  textAlign: 'left',
  fontSize: 'xs',
  fontWeight: 'semibold',
  color: 'fg.muted',
  textTransform: 'uppercase',
  letterSpacing: 'wide',
})

export const tableBody = css({})

export const tableRow = css({
  borderBottom: '1px solid token(colors.border.muted)',
  transition: 'background 0.1s ease',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&:hover': {
    bg: 'bg.subtle',
  },
})

export const tableCell = css({
  px: '4',
  py: '3',
  color: 'fg',
})

export const tableCaption = css({
  mt: '2',
  fontSize: 'sm',
  color: 'fg.muted',
  textAlign: 'left',
})