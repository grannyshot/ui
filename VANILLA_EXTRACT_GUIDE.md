# Vanilla Extract 가이드

tsup 기반 디자인 시스템 구축을 위한 vanilla-extract 핵심 기능 정리.

---

## 목차

1. [기본 개념](#1-기본-개념)
2. [style — 기본 스타일 정의](#2-style--기본-스타일-정의)
3. [styleVariants — 변형 스타일](#3-stylevariants--변형-스타일)
4. [recipe — 컴포넌트 variant 패턴](#4-recipe--컴포넌트-variant-패턴)
5. [createTheme / createThemeContract — 테마](#5-createtheme--createthemecontract--테마)
6. [Sprinkles — 유틸리티 CSS](#6-sprinkles--유틸리티-css)
7. [globalStyle — 글로벌 스타일](#7-globalstyle--글로벌-스타일)
8. [fontFace / keyframes — 폰트 및 애니메이션](#8-fontface--keyframes--폰트-및-애니메이션)
9. [tsup 연동 설정](#9-tsup-연동-설정)
10. [패키지 구조 예시](#10-패키지-구조-예시)

---

## 1. 기본 개념

- 스타일 파일은 반드시 `.css.ts` 확장자를 사용
- 빌드 타임에 실행되어 **순수 CSS 파일**로 변환됨 (zero-runtime)
- export된 변수는 **CSS 클래스명 문자열**이 됨
- TypeScript로 작성하므로 모든 스타일이 **타입 안전**

```
# 파일 구조 규칙
button.css.ts   → 스타일 정의 (빌드 타임에 실행)
button.tsx      → 컴포넌트 (런타임에 실행)
```

---

## 2. style — 기본 스타일 정의

가장 기본적인 API. CSS 속성을 객체로 작성하면 고유한 클래스명이 생성된다.

```ts
// button.css.ts
import { style } from '@vanilla-extract/css'

export const container = style({
  padding: '16px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

// 의사 클래스, 미디어 쿼리도 지원
export const link = style({
  color: 'blue',
  ':hover': {
    color: 'darkblue',
  },
  ':focus-visible': {
    outline: '2px solid blue',
  },
  '@media': {
    '(min-width: 768px)': {
      fontSize: '18px',
    },
  },
})
```

**사용:**

```tsx
import { container } from './styles.css'

// container는 "styles_container__1a2b3c" 같은 문자열
<div className={container}>Hello</div>
```

**스타일 합성 (배열):**

```ts
import { style } from '@vanilla-extract/css'

const base = style({ padding: '16px' })

// base 스타일을 상속
const primary = style([
  base,
  { background: 'blue', color: 'white' },
])
```

---

## 3. styleVariants — 변형 스타일

하나의 base를 기반으로 여러 변형을 한번에 만들 때 사용.

```ts
// badge.css.ts
import { styleVariants } from '@vanilla-extract/css'

// 방법 1: 각 variant에 전체 스타일 지정
export const color = styleVariants({
  info: { background: '#e0f2fe', color: '#0369a1' },
  success: { background: '#dcfce7', color: '#15803d' },
  warning: { background: '#fef9c3', color: '#a16207' },
  error: { background: '#fee2e2', color: '#dc2626' },
})

// 방법 2: 매핑 함수 사용
const colors = {
  info: '#0369a1',
  success: '#15803d',
  warning: '#a16207',
  error: '#dc2626',
} as const

export const textColor = styleVariants(colors, (value) => ({
  color: value,
}))
```

**사용:**

```tsx
import { color } from './badge.css'

// color.info, color.success 등으로 접근
<span className={color['success']}>완료</span>
```

**타입:**

```ts
// color의 타입은 Record<'info' | 'success' | 'warning' | 'error', string>
// 존재하지 않는 키를 쓰면 타입 에러 발생
```

---

## 4. recipe — 컴포넌트 variant 패턴

`@vanilla-extract/recipes` 패키지. 디자인 시스템의 **핵심 API**.
variant, compound variant, default variant를 선언적으로 관리한다.

```bash
npm install @vanilla-extract/recipes
```

```ts
// button.css.ts
import { recipe } from '@vanilla-extract/recipes'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export const button = recipe({
  // 기본 스타일 (항상 적용)
  base: {
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },

  // variant 정의
  variants: {
    variant: {
      primary: {
        background: '#2563eb',
        color: 'white',
        ':hover': { background: '#1d4ed8' },
      },
      secondary: {
        background: '#f1f5f9',
        color: '#334155',
        ':hover': { background: '#e2e8f0' },
      },
      ghost: {
        background: 'transparent',
        color: '#334155',
        ':hover': { background: '#f1f5f9' },
      },
    },
    size: {
      sm: { padding: '6px 12px', fontSize: '13px' },
      md: { padding: '8px 16px', fontSize: '14px' },
      lg: { padding: '12px 24px', fontSize: '16px' },
    },
    fullWidth: {
      true: { width: '100%' },
    },
  },

  // 여러 variant 조합에 대한 추가 스타일
  compoundVariants: [
    {
      variants: { variant: 'primary', size: 'lg' },
      style: { fontSize: '18px', fontWeight: '700' },
    },
  ],

  // 기본값
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

// variant 타입 자동 추출
export type ButtonVariants = RecipeVariants<typeof button>
// { variant?: 'primary' | 'secondary' | 'ghost', size?: 'sm' | 'md' | 'lg', fullWidth?: boolean }
```

**사용:**

```tsx
import { button, type ButtonVariants } from './button.css'

type ButtonProps = ButtonVariants & {
  children: React.ReactNode
}

export function Button({ variant, size, fullWidth, children }: ButtonProps) {
  return (
    <button className={button({ variant, size, fullWidth })}>
      {children}
    </button>
  )
}

// 호출
<Button variant="secondary" size="lg">Click</Button>
<Button fullWidth>Submit</Button>  // default: primary, md
```

---

## 5. createTheme / createThemeContract — 테마

디자인 토큰을 테마로 관리. 다크모드, 멀티 브랜드 테마에 필수.

### 5-1. 단일 테마 (간단한 경우)

```ts
// theme.css.ts
import { createTheme } from '@vanilla-extract/css'

// [클래스명, 토큰 변수] 를 반환
export const [themeClass, vars] = createTheme({
  color: {
    primary: '#2563eb',
    secondary: '#64748b',
    background: '#ffffff',
    text: '#0f172a',
    border: '#e2e8f0',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
  font: {
    body: "'Pretendard', -apple-system, sans-serif",
    size: {
      sm: '13px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      xxl: '28px',
    },
  },
})
```

**사용:**

```tsx
// vars.color.primary는 "var(--color-primary__1a2b3c)" 같은 CSS 변수 참조 문자열
import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export const card = style({
  background: vars.color.background,
  color: vars.color.text,
  padding: vars.space.md,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
})
```

```tsx
// 루트에 테마 클래스 적용
import { themeClass } from './theme.css'

<html className={themeClass}>
  <body>...</body>
</html>
```

### 5-2. 다중 테마 (다크모드 등)

```ts
// theme.css.ts
import { createThemeContract, createTheme } from '@vanilla-extract/css'

// 1단계: 토큰 구조(계약)만 정의 (값 없음)
export const vars = createThemeContract({
  color: {
    primary: '',
    background: '',
    text: '',
    border: '',
  },
  // ... 나머지 토큰
})

// 2단계: 각 테마에서 계약에 맞는 값 채우기
export const lightTheme = createTheme(vars, {
  color: {
    primary: '#2563eb',
    background: '#ffffff',
    text: '#0f172a',
    border: '#e2e8f0',
  },
})

export const darkTheme = createTheme(vars, {
  color: {
    primary: '#60a5fa',
    background: '#0f172a',
    text: '#f8fafc',
    border: '#334155',
  },
})
// 토큰 구조가 다르면 타입 에러 발생 → 테마 간 일관성 보장
```

**사용:**

```tsx
import { lightTheme, darkTheme } from './theme.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? darkTheme : lightTheme}>
      <button onClick={() => setIsDark(!isDark)}>테마 전환</button>
    </div>
  )
}
```

---

## 6. Sprinkles — 유틸리티 CSS

`@vanilla-extract/sprinkles` 패키지. Tailwind처럼 유틸리티 props를 제공하되, 타입 안전하게.

```bash
npm install @vanilla-extract/sprinkles
```

```ts
// sprinkles.css.ts
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { vars } from './theme.css'

// 반응형 조건 정의
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline-flex', 'grid'],
    flexDirection: ['row', 'column'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    gap: vars.space,
    padding: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    margin: vars.space,
    fontSize: vars.font.size,
    borderRadius: vars.radius,
    width: ['100%', 'auto'],
  },
  // 축약 속성 (paddingX → paddingLeft + paddingRight)
  shorthands: {
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    p: ['padding'],
  },
})

// 색상은 반응형 불필요 → 별도 정의
const colorProperties = defineProperties({
  conditions: {
    light: {},
    dark: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'light',
  properties: {
    color: vars.color,
    background: vars.color,
  },
})

// sprinkles 함수 생성
export const sprinkles = createSprinkles(responsiveProperties, colorProperties)

// 타입 추출
export type Sprinkles = Parameters<typeof sprinkles>[0]
```

**사용:**

```tsx
import { sprinkles } from './sprinkles.css'

// 함수 호출 → 클래스명 반환
<div className={sprinkles({
  display: 'flex',
  gap: 'md',
  padding: { mobile: 'sm', desktop: 'lg' },  // 반응형!
  background: 'background',
})}>
  Hello
</div>
```

**Box 컴포넌트 패턴 (React):**

```tsx
// Box.tsx
import { sprinkles, type Sprinkles } from './sprinkles.css'

type BoxProps = Sprinkles & {
  as?: React.ElementType
  children?: React.ReactNode
  className?: string
}

export function Box({ as: Component = 'div', className, children, ...sprinkleProps }: BoxProps) {
  const sprinklesClass = sprinkles(sprinkleProps)
  const combinedClass = className ? `${sprinklesClass} ${className}` : sprinklesClass

  return <Component className={combinedClass}>{children}</Component>
}

// 사용
<Box display="flex" gap="md" padding="lg" background="background">
  <Box as="h1" fontSize="xxl" color="text">제목</Box>
  <Box as="p" fontSize="md" color="secondary">내용</Box>
</Box>
```

---

## 7. globalStyle — 글로벌 스타일

CSS reset이나 body 스타일 등 전역 스타일 정의.

```ts
// reset.css.ts
import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
})

globalStyle('body', {
  fontFamily: vars.font.body,
  color: vars.color.text,
  background: vars.color.background,
  lineHeight: 1.6,
})

// 특정 클래스 하위 요소 타겟팅
import { container } from './styles.css'

globalStyle(`${container} > a`, {
  color: vars.color.primary,
  textDecoration: 'none',
})
```

---

## 8. fontFace / keyframes — 폰트 및 애니메이션

```ts
// fonts.css.ts
import { fontFace } from '@vanilla-extract/css'

export const pretendard = fontFace({
  src: "url('/fonts/Pretendard-Regular.woff2') format('woff2')",
  fontWeight: '400',
  fontStyle: 'normal',
  fontDisplay: 'swap',
})

// 여러 weight
export const pretendardBold = fontFace({
  src: "url('/fonts/Pretendard-Bold.woff2') format('woff2')",
  fontWeight: '700',
  fontStyle: 'normal',
  fontDisplay: 'swap',
})
```

```ts
// animations.css.ts
import { keyframes, style } from '@vanilla-extract/css'

const fadeIn = keyframes({
  from: { opacity: 0, transform: 'translateY(8px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const fadeInAnimation = style({
  animation: `${fadeIn} 0.3s ease-out`,
})

export const spinner = style({
  animation: `${spin} 1s linear infinite`,
})
```

---

## 9. tsup 연동 설정

### 패키지 설치

```bash
npm install -D tsup @vanilla-extract/css @vanilla-extract/recipes @vanilla-extract/sprinkles @vanilla-extract/esbuild-plugin
```

### tsup.config.ts

```ts
import { defineConfig } from 'tsup'
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

export default defineConfig({
  entry: [
    'src/index.ts',        // 메인 엔트리
    'src/styles/index.ts', // 스타일 엔트리 (프레임워크 무관)
    'src/react/index.ts',  // React 컴포넌트 엔트리
  ],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  esbuildPlugins: [vanillaExtractPlugin()],
})
```

### package.json

```json
{
  "name": "your-design-system",
  "version": "0.1.0",
  "exports": {
    "./styles": {
      "import": "./dist/styles/index.mjs",
      "require": "./dist/styles/index.js",
      "types": "./dist/styles/index.d.ts"
    },
    "./styles.css": "./dist/styles/index.css",
    "./react": {
      "import": "./dist/react/index.mjs",
      "require": "./dist/react/index.js",
      "types": "./dist/react/index.d.ts"
    },
    "./theme": {
      "import": "./dist/theme/index.mjs",
      "require": "./dist/theme/index.js",
      "types": "./dist/theme/index.d.ts"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch"
  },
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18"
  },
  "peerDependenciesMeta": {
    "react": { "optional": true },
    "react-dom": { "optional": true }
  }
}
```

---

## 10. 패키지 구조 예시

```
src/
├── tokens/
│   ├── theme.css.ts          # createThemeContract + createTheme
│   └── index.ts              # vars, lightTheme, darkTheme export
│
├── styles/
│   ├── sprinkles.css.ts      # Sprinkles 정의
│   ├── reset.css.ts          # CSS reset
│   ├── button.css.ts         # Button recipe
│   ├── input.css.ts          # Input recipe
│   └── index.ts              # 스타일 전체 export (프레임워크 무관)
│
├── react/
│   ├── Box.tsx               # Sprinkles 기반 Box
│   ├── Button.tsx            # Button 컴포넌트
│   ├── Input.tsx             # Input 컴포넌트
│   └── index.ts              # React 컴포넌트 export
│
└── index.ts                  # 전체 re-export
```

---

## 요약 치트시트

| API | 용도 | 패키지 |
|-----|------|--------|
| `style()` | 기본 스타일 | `@vanilla-extract/css` |
| `styleVariants()` | 변형 맵 | `@vanilla-extract/css` |
| `globalStyle()` | 전역 스타일 | `@vanilla-extract/css` |
| `createTheme()` | 단일 테마 | `@vanilla-extract/css` |
| `createThemeContract()` | 다중 테마 계약 | `@vanilla-extract/css` |
| `keyframes()` | 애니메이션 | `@vanilla-extract/css` |
| `fontFace()` | 폰트 등록 | `@vanilla-extract/css` |
| `recipe()` | variant 패턴 | `@vanilla-extract/recipes` |
| `createSprinkles()` | 유틸리티 CSS | `@vanilla-extract/sprinkles` |
