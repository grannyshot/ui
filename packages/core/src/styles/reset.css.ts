import { globalStyle } from '@vanilla-extract/css'
import { vars } from '../tokens/colors.css'
import { fontFamily } from '../tokens/typography.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
})

globalStyle('body', {
  fontFamily: fontFamily.sans,
  color: vars.color.fg,
  background: vars.color.bg,
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('button, input, select, textarea', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('img, svg', {
  display: 'block',
  maxWidth: '100%',
})
