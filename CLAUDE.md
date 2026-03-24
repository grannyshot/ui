# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**grannyshot-ui** — Tailwind CSS + Ark UI 기반 개인 디자인 시스템. `@grannyshot/ui` npm 패키지로 퍼블리시. public repo.

## 개발 워크플로우

- **main 직접 푸시 금지** — feature branch → PR → CI 통과 → 머지
- 브랜치 네이밍: `feat/xxx`, `fix/xxx`, `refactor/xxx`, `docs/xxx`
- **PR 머지 전 반드시 로컬 빌드 확인**: `pnpm build && pnpm build:docs`
- CI (GitHub Actions)가 PR마다 빌드 + 타입 체크 자동 실행
- 커밋 메시지: `FEAT:`, `FIX:`, `REFACTOR:`, `DOCS:` prefix 사용

## 커맨드

```bash
pnpm install                                  # 의존성 설치
pnpm build                                    # tsup + tailwindcss CLI
pnpm dev                                      # tsup --watch + tailwindcss --watch
pnpm --filter @grannyshot/ui exec tsc --noEmit # 타입 체크
```

## 모노레포 구조

pnpm workspace. 패키지는 `packages/` 하위:
- `packages/core` — 메인 라이브러리 (`grannyshot-ui`)
- `packages/docs` — Nextra 기반 문서 사이트

## 아키텍처 — 레이어 구조

```
src/styles.css   → 디자인 토큰 정의 (@theme inline, :root, [data-theme=dark])
  ↓ tailwindcss CLI
dist/styles.css  → 빌드된 CSS (Tailwind utilities + 시맨틱 토큰)
  ↓
src/styles/      → 컴포넌트 recipes (tailwind-variants tv())
  ↓ import
src/react/       → React 컴포넌트 (styles 위에 얇은 래퍼)
src/context/     → ThemeProvider + ThemeScript + useTheme
src/tokens/      → token() 함수 (CSS 변수 참조 반환)
src/utils/       → cn (clsx + tailwind-merge)
src/lib/cn.ts    → cn 유틸리티 구현
```

각 레이어는 독립 엔트리포인트로 임포트 가능 (`grannyshot-ui/tokens`, `grannyshot-ui/styles`, `grannyshot-ui/react`, `grannyshot-ui/context`, `grannyshot-ui/utils`).

## 핵심 패턴

### 스타일링 (Tailwind CSS + tailwind-variants)

- 시맨틱 토큰은 `src/styles.css`에 CSS 커스텀 프로퍼티로 정의 — `:root` (라이트) + `[data-theme=dark]` (다크)
- `@theme inline`으로 Tailwind 유틸리티 등록 (`bg-gs-accent`, `text-gs-fg` 등)
- CSS 변수 접두사: `--gs-` (소비자 Tailwind와 충돌 없음)
- 컴포넌트 variant: `tv()` (tailwind-variants) 사용, variant 타입은 `Parameters<typeof recipe>[0]`으로 추출
- 클래스 병합: `cn()` (clsx + tailwind-merge)
- 스타일 파일: `components/{Name}/{name}.recipe.ts`
- 토큰 참조: Tailwind 유틸리티 사용 (e.g., `bg-gs-accent`, `text-gs-fg-muted`, `border-gs-border`)

### 테마

- `:root`에 라이트 테마 기본 적용 (`--gs-*` CSS 변수)
- `[data-theme=dark]` 선택자로 다크모드 토큰 오버라이드
- `ThemeProvider`는 선택사항 — `<html data-theme>` 직접 설정으로도 동작
- `ThemeScript` 컴포넌트: blocking `<script>`로 flash 방지
- `useTheme()`: ThemeProvider 없이도 DOM 기반으로 동작
- 테마 설정은 `localStorage` (`grannyshot-theme` 키)에 저장
- light / dark / system 모드 지원

### 새 컴포넌트 추가 시 체크리스트

**코드:**
1. `src/components/{Name}/{Name}.tsx` — `forwardRef` + `cn(recipe({variants}), className)` 패턴
2. `src/components/{Name}/{name}.recipe.ts` — `tv()` 정의 + `Parameters<typeof recipe>[0]` 타입 export
3. `src/react/index.ts` — re-export 추가
4. `src/styles/index.ts` — re-export 추가
5. `src/index.ts` — 스타일/컴포넌트 모두 re-export

**문서 (필수 — 컴포넌트와 같은 PR에 포함):**
6. `packages/docs/app/_previews/{name}.tsx` — 라이브 프리뷰 컴포넌트
7. `packages/docs/app/_previews/index.tsx` — registry에 import + 등록
8. `packages/docs/content/components/{name}.mdx` — 문서 페이지 (Import, Usage, Variants, API Reference)
9. `README.md` — Components 섹션에 추가
10. `packages/core/CLAUDE.md` — 컴포넌트 목록 + 사용 패턴 업데이트
11. `packages/docs/public/llms.txt` — Components 섹션에 추가

**배포 시 (npm publish 할 때):**
12. `packages/core/package.json` — version bump
13. `CHANGELOG.md` — 변경사항 기록
14. GitHub Release — release notes 작성

### 컴포넌트 작성 규칙

- `'use client'` 디렉티브: `src/index.ts`, `src/react/index.ts`, `src/context/index.ts`에 포함 (Next.js App Router 호환)
- `forwardRef`로 ref 전달
- `displayName` 설정
- native HTML attributes 확장 (`React.ButtonHTMLAttributes` 등)
- variant props + native props를 분리하여 recipe에 variant만 전달
- `cn()` 으로 recipe 클래스와 외부 className 병합
- 컴포넌트는 순수 UI 래퍼 — 비즈니스 로직/접근성 조합은 상위 Field 패턴으로 분리

### 토큰 체계

색상은 시맨틱 네이밍 (accent = emerald). `src/styles.css` `:root` / `[data-theme=dark]`에 정의:
- `--gs-bg`, `--gs-bg-subtle`, `--gs-bg-muted`, `--gs-bg-inverse`
- `--gs-fg`, `--gs-fg-muted`, `--gs-fg-subtle`, `--gs-fg-inverse`
- `--gs-border`, `--gs-border-muted`, `--gs-border-focus`
- `--gs-accent`, `--gs-accent-hover`, `--gs-accent-muted`, `--gs-accent-subtle`, `--gs-accent-fg`
- `--gs-success`, `--gs-warning`, `--gs-error`, `--gs-info` (각각 `-subtle`, `-fg` 변형 포함)

Tailwind 유틸리티: `bg-gs-accent`, `text-gs-fg-muted`, `border-gs-border` 등.

### 빌드

- 빌드 파이프라인: `tsup` (ESM + CJS + `.d.ts`) → `@tailwindcss/cli` (`dist/styles.css`) → `strip-preflight.cjs` (`dist/styles-no-preflight.css`)
- 소비자는 `import '@grannyshot/ui/styles.css'` + 컴포넌트 import로 사용
- Tailwind 프로젝트: `styles.css` 그대로 사용 (같은 CSS 엔진, 충돌 없음)
- 다른 CSS 프레임워크: `styles-no-preflight.css` (Tailwind preflight 제거)
- React/React DOM은 optional peer dependency

### 문서 사이트 프리뷰

- `packages/docs`에서 `pnpm dev:docs`로 로컬 확인 (localhost:3000)
- 컴포넌트 프리뷰는 inline rendering (`InlinePreview`) — iframe/Shadow DOM 아님
- `styles-no-preflight.css`로 Nextra CSS와 공존 (preflight 제거, `--gs-` prefix로 충돌 없음)
- `<html data-theme>` 동기화 스크립트로 다크모드 토큰 적용
- 새 프리뷰 추가: `_previews/{name}.tsx` 작성 → `_previews/index.tsx` registry에 등록 → MDX에서 `<ComponentPreview name="..." />` 사용

## FE 전용 DoD (Definition of Done)

- [ ] 빌드 성공 (`pnpm build && pnpm build:docs` 통과)
- [ ] 새 컴포넌트는 위 체크리스트(코드 1~5 + 문서 6~11) 전부 완료
- [ ] 토큰 참조 시 하드코딩 금지, `--gs-*` 시맨틱 토큰 사용 (e.g., `bg-gs-accent`)
- [ ] 스타일은 `components/{Name}/{name}.recipe.ts`에서 `tv()` 또는 plain class string으로 정의
- [ ] README, CLAUDE.md(소비자용), llms.txt에 컴포넌트 반영
