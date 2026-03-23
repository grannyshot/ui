import { css } from '@/styled-system/css'

export const emptyStateRoot = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '8',
  gap: '3',
})

export const emptyStateIcon = css({
  color: 'fg.subtle',
  width: '48px',
  height: '48px',
})

export const emptyStateTitle = css({
  fontSize: 'lg',
  fontWeight: 'semibold',
  color: 'fg',
})

export const emptyStateDescription = css({
  fontSize: 'sm',
  color: 'fg.muted',
  maxWidth: '360px',
})

export const emptyStateActions = css({
  display: 'flex',
  gap: '2',
  marginTop: '1',
})
