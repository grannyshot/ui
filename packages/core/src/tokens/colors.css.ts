import { createGlobalTheme, createGlobalThemeContract, createTheme, globalStyle } from '@vanilla-extract/css'

const palette = {
  white: '#ffffff',
  black: '#000000',

  gray50: '#fafafa',
  gray100: '#f4f4f5',
  gray200: '#e4e4e7',
  gray300: '#d4d4d8',
  gray400: '#a1a1aa',
  gray500: '#71717a',
  gray600: '#52525b',
  gray700: '#3f3f46',
  gray800: '#27272a',
  gray900: '#18181b',
  gray950: '#09090b',

  emerald50: '#ecfdf5',
  emerald100: '#d1fae5',
  emerald200: '#a7f3d0',
  emerald300: '#6ee7b7',
  emerald400: '#34d399',
  emerald500: '#10b981',
  emerald600: '#059669',
  emerald700: '#047857',
  emerald800: '#065f46',
  emerald900: '#064e3b',

  red400: '#f87171',
  red500: '#ef4444',
  red600: '#dc2626',

  amber400: '#fbbf24',
  amber500: '#f59e0b',
  amber600: '#d97706',

  blue400: '#60a5fa',
  blue500: '#3b82f6',
  blue600: '#2563eb',
} as const

// 변수명을 직접 제어 → 미디어쿼리에서도 사용 가능
export const vars = createGlobalThemeContract({
  color: {
    bg: 'gs-color-bg',
    bgSubtle: 'gs-color-bg-subtle',
    bgMuted: 'gs-color-bg-muted',
    bgInverse: 'gs-color-bg-inverse',

    fg: 'gs-color-fg',
    fgMuted: 'gs-color-fg-muted',
    fgSubtle: 'gs-color-fg-subtle',
    fgInverse: 'gs-color-fg-inverse',

    border: 'gs-color-border',
    borderMuted: 'gs-color-border-muted',
    borderFocus: 'gs-color-border-focus',

    accent: 'gs-color-accent',
    accentHover: 'gs-color-accent-hover',
    accentMuted: 'gs-color-accent-muted',
    accentSubtle: 'gs-color-accent-subtle',
    accentFg: 'gs-color-accent-fg',

    success: 'gs-color-success',
    successSubtle: 'gs-color-success-subtle',
    warning: 'gs-color-warning',
    warningSubtle: 'gs-color-warning-subtle',
    error: 'gs-color-error',
    errorSubtle: 'gs-color-error-subtle',
    info: 'gs-color-info',
    infoSubtle: 'gs-color-info-subtle',
  },
})

const lightValues = {
  color: {
    bg: palette.white,
    bgSubtle: palette.gray50,
    bgMuted: palette.gray100,
    bgInverse: palette.gray950,

    fg: palette.gray950,
    fgMuted: palette.gray500,
    fgSubtle: palette.gray400,
    fgInverse: palette.white,

    border: palette.gray200,
    borderMuted: palette.gray100,
    borderFocus: palette.emerald500,

    accent: palette.emerald500,
    accentHover: palette.emerald600,
    accentMuted: palette.emerald200,
    accentSubtle: palette.emerald50,
    accentFg: palette.white,

    success: palette.emerald600,
    successSubtle: palette.emerald50,
    warning: palette.amber500,
    warningSubtle: '#fffbeb',
    error: palette.red500,
    errorSubtle: '#fef2f2',
    info: palette.blue500,
    infoSubtle: '#eff6ff',
  },
} as const

const darkValues = {
  color: {
    bg: palette.gray950,
    bgSubtle: palette.gray900,
    bgMuted: palette.gray800,
    bgInverse: palette.white,

    fg: palette.gray50,
    fgMuted: palette.gray300,
    fgSubtle: palette.gray500,
    fgInverse: palette.gray950,

    border: palette.gray800,
    borderMuted: palette.gray900,
    borderFocus: palette.emerald400,

    accent: palette.emerald400,
    accentHover: palette.emerald300,
    accentMuted: palette.emerald900,
    accentSubtle: '#064e3b33',
    accentFg: palette.white,

    success: palette.emerald400,
    successSubtle: '#064e3b33',
    warning: palette.amber400,
    warningSubtle: '#78350f33',
    error: palette.red400,
    errorSubtle: '#7f1d1d33',
    info: palette.blue400,
    infoSubtle: '#1e3a5f33',
  },
} as const

// :root — 기본 라이트
createGlobalTheme(':root', vars, lightValues)

// @media (prefers-color-scheme: dark) — OS 설정 자동 대응
globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: Object.fromEntries(
        Object.entries(darkValues.color).map(([key, value]) => [
          vars.color[key as keyof typeof vars.color],
          value,
        ])
      ),
    },
  },
})

// 클래스 기반 테마 (ThemeProvider에서 수동 전환용)
export const lightTheme = createTheme(vars, lightValues)
export const darkTheme = createTheme(vars, darkValues)
