# Contributing

## 개발 워크플로우

```
feature branch → PR → CI 통과 → 코드 리뷰 → main 머지
```

### 1. 브랜치 생성

```bash
git checkout -b feat/component-name   # 새 기능
git checkout -b fix/issue-description # 버그 수정
```

### 2. 로컬 개발

```bash
pnpm install          # 의존성 설치
pnpm dev              # core watch mode
pnpm dev:docs         # docs dev server (localhost:3000)
```

### 3. 커밋 전 확인

```bash
pnpm build            # core 빌드 (codegen + tsup + cssgen)
pnpm build:docs       # docs 빌드 (Next.js static)
```

**빌드 실패 시 PR 머지 불가.** CI가 `pnpm build` + `pnpm build:docs`를 자동 검증합니다.

### 4. PR 생성

- main 브랜치로 PR 생성
- CI 통과 필수
- 커밋 메시지 형식: `FEAT:`, `FIX:`, `REFACTOR:`, `DOCS:`

## 새 컴포넌트 추가

### Core (packages/core)

1. `src/components/{Name}/{Name}.tsx` — React 컴포넌트
2. `src/components/{Name}/{name}.recipe.ts` — cva 스타일
3. `src/react/index.ts` — re-export
4. `src/index.ts` — re-export

### Docs (packages/docs)

5. `app/_previews/{name}.tsx` — 라이브 프리뷰 컴포넌트
6. `app/_previews/index.tsx` — registry에 추가
7. `content/components/{name}.mdx` — 문서 페이지

## 프리뷰 시스템

문서 사이트의 컴포넌트 프리뷰는 **inline rendering** 방식:

- `styles-no-preflight.css`로 Nextra CSS와 공존 (preflight 제거)
- `data-theme` 속성으로 다크모드 동기화
- Portal 기반 컴포넌트(Dialog, Drawer 등)도 정상 작동

MDX에서 사용:

```mdx
<ComponentPreview name="button" />
<ComponentShadowPreview name="badge" />
```

둘 다 `InlinePreview`로 매핑됩니다.

## 기술 스택

- **Panda CSS** — 스타일링 + 토큰
- **Ark UI** — 접근성 기반 헤드리스 컴포넌트
- **tsup** — ESM + CJS 번들링
- **Nextra** — 문서 사이트
- **pnpm workspace** — 모노레포 관리