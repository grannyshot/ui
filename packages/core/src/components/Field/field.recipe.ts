import { css } from '@/styled-system/css'

export const fieldRoot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
  width: '100%',
})

export const fieldHint = css({
  fontSize: 'xs',
  color: 'fg.muted',
  mt: '1',
})

export const fieldError = css({
  fontSize: 'xs',
  color: 'error',
  mt: '1',
})
