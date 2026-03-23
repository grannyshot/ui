# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**grannyshot-ui** — Panda CSS 기반 개인 디자인 시스템. `@grannyshot/ui` npm 패키지로 퍼블리시. public repo.

## 개발 워크플로우

- **main 직접 푸시 금지** — feature branch → PR → CI 통과 → 머지
- 브랜치 네이밍: `feat/xxx`, `fix/xxx`, `refactor/xxx`, `docs/xxx`
- **PR 머지 전 반드시 로컬 빌드 확인**: `pnpm build && pnpm build:docs`
- CI (GitHub Actions)가 PR마다 빌드 + 타입 체크 자동 실행
- 커밋 메시지: `FEAT:`, `FIX:`, `REFACTOR:`, `DOCS:` prefix 사용

## 커맨드

```bash
pnpm install                                  # 의존성 설치
pnpm build                                    # codegen + tsup + cssgen
pnpm dev                                      # codegen + tsup --watch
pnpm --filter grannyshot-ui exec tsc --noEmit # 타입 체크
npx panda codegen                             # styled-system 재생성
```

## 모노레포 구조

pnpm workspace. 패키지는 `packages/` 하위:
- `packages/core` — 메인 라이브러리 (`grannyshot-ui`)
- `packages/docs` — Nextra 기반 문서 사이트

## 아키텍처 — 레이어 구조

```
panda.config.ts  → 디자인 토큰 정의 (colors, typography, spacing, animation, semanticTokens)
  ↓ codegen
src/styled-system/  → Panda 생성 런타임 (css, cva, cx, tokens) — .gitignore 대상
  ↓ import
src/styles/      → 컴포넌트 recipes (cva)
  ↓ import
src/react/       → React 컴포넌트 (styles 위에 얇은 래퍼)
src/context/     → ThemeProvider + useTheme
src/tokens/      → Panda token 함수 re-export (소비자용)
src/utils/       → cx re-export
```

각 레이어는 독립 엔트리포인트로 임포트 가능 (`grannyshot-ui/tokens`, `grannyshot-ui/styles`, `grannyshot-ui/react`, `grannyshot-ui/context`, `grannyshot-ui/utils`).

## 핵심 패턴

### 스타일링 (Panda CSS)

- 토큰은 `panda.config.ts`에 정의 — `tokens` (원시값) + `semanticTokens` (light/dark 조건부)
- CSS 변수 접두사: `--gs-` (prefix: `gs`)
- 컴포넌트 variant: `cva()` 사용, variant 타입은 `RecipeVariantProps<typeof recipe>`로 추출
- 클래스 병합: `cx()` (Panda 내장)
- 스타일 파일: `styles/{name}.ts` (`.css.ts` 아님)
- 토큰 참조: Panda shorthand 사용 (e.g., `bg: 'accent'`, `color: 'fg.muted'`, `borderRadius: 'md'`)
- CSS 변수 직접 참조 시: `token(colors.accent)` 구문

### 테마

- `:root`에 라이트 테마 기본 적용
- `[data-theme=dark]` 선택자로 다크모드 토큰 오버라이드
- `ThemeProvider`가 `<div data-theme={resolvedTheme}>` 렌더링
- 테마 설정은 `localStorage` (`grannyshot-theme` 키)에 저장
- light / dark / system 모드 지원

### 새 컴포넌트 추가 시 패턴

1. `styles/{name}.ts` — `cva()` 정의 + `RecipeVariantProps` 타입 export
2. `styles/index.ts` — re-export 추가
3. `react/{Name}.tsx` — `forwardRef` + `cx(recipe({variants}), className)` 패턴
4. `react/index.ts` — re-export 추가
5. `src/index.ts` — 스타일/컴포넌트 모두 re-export

### 컴포넌트 작성 규칙

- `forwardRef`로 ref 전달
- `displayName` 설정
- native HTML attributes 확장 (`React.ButtonHTMLAttributes` 등)
- variant props + native props를 분리하여 recipe에 variant만 전달
- `cx()` 로 recipe 클래스와 외부 className 병합
- 컴포넌트는 순수 UI 래퍼 — 비즈니스 로직/접근성 조합은 상위 Field 패턴으로 분리

### 토큰 체계

색상은 시맨틱 네이밍 (accent = emerald). `panda.config.ts` `semanticTokens`에 정의:
- `bg`, `bg.subtle`, `bg.muted`, `bg.inverse`
- `fg`, `fg.muted`, `fg.subtle`, `fg.inverse`
- `border`, `border.muted`, `border.focus`
- `accent`, `accent.hover`, `accent.muted`, `accent.subtle`, `accent.fg`
- `success`, `warning`, `error`, `info` (각각 `.subtle` 변형 포함)

### 빌드

- 빌드 파이프라인: `panda codegen` → `tsup` (ESM + CJS + `.d.ts`) → `panda cssgen` (`dist/styles.css`)
- 소비자는 `import 'grannyshot-ui/styles.css'` + 컴포넌트 import로 사용
- React/React DOM은 optional peer dependency
- `src/styled-system/`은 codegen 생성물 — git에 커밋하지 않음

### 문서 사이트 프리뷰

- `packages/docs`에서 `pnpm dev:docs`로 로컬 확인 (localhost:3000)
- 컴포넌트 프리뷰는 inline rendering (`InlinePreview`) — iframe/Shadow DOM 아님
- `styles-no-preflight.css`로 Nextra CSS와 공존 (preflight 제거, `--gs-` prefix로 충돌 없음)
- `<html data-theme>` 동기화 스크립트로 다크모드 토큰 적용
- 새 프리뷰 추가: `_previews/{name}.tsx` 작성 → `_previews/index.tsx` registry에 등록 → MDX에서 `<ComponentPreview name="..." />` 사용

## FE 전용 DoD (Definition of Done)

글로벌 CLAUDE.md의 공통 DoD에 추가:
- [ ] 빌드 성공 (`pnpm build && pnpm build:docs` 통과)
- [ ] 새 컴포넌트는 위 패턴(cva → forwardRef wrapper → re-export) 준수
- [ ] 토큰 참조 시 하드코딩 금지, Panda 시맨틱 토큰 사용 (e.g., `bg: 'accent'`)
- [ ] 스타일은 `styles/*.ts` 파일에서 `cva()` / `css()`로 정의