// 폰트 파일은 consumer가 로드하거나, 별도 패키지로 제공
export const fontFamily = {
  sans: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  mono: "'GeistMono', 'SF Mono', 'Fira Code', monospace",
} as const

export const fontSize = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
} as const

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const

export const lineHeight = {
  tight: '1.25',
  normal: '1.5',
  relaxed: '1.625',
} as const

export const letterSpacing = {
  tighter: '-0.02em',
  tight: '-0.01em',
  normal: '0em',
  wide: '0.01em',
} as const
