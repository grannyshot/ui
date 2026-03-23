import { css } from '@/styled-system/css'

export const breadcrumbRoot = css({
  display: 'flex',
})

export const breadcrumbList = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1',
  flexWrap: 'wrap',
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

export const breadcrumbItem = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '1',
  fontSize: 'sm',
})

export const breadcrumbLink = css({
  color: 'fg.muted',
  textDecoration: 'none',
  transition: 'color 0.15s ease',
  '&:hover': {
    color: 'fg',
  },
  '&[aria-current=page]': {
    color: 'fg',
    fontWeight: 'medium',
    cursor: 'default',
    '&:hover': {
      color: 'fg',
    },
  },
})

export const breadcrumbSeparator = css({
  color: 'fg.subtle',
  fontSize: 'sm',
  userSelect: 'none',
})
