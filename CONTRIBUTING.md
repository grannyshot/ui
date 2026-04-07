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
4. `src/styles/index.ts` — re-export
5. `src/index.ts` — re-export (styles + react 둘 다)

### Docs (packages/docs)

6. `app/_previews/{name}.tsx` — 라이브 프리뷰 컴포넌트
7. `app/_previews/index.tsx` — registry에 import + 등록
8. `content/components/{name}.mdx` — 문서 페이지

### 문서 최신화 (같은 PR에 필수 포함)

9. `README.md` — Components 섹션에 컴포넌트 이름 추가
10. `packages/core/CLAUDE.md` — 컴포넌트 목록 + props 요약 + 사용 예제 추가
11. `packages/docs/public/llms.txt` — Components 섹션에 컴포넌트 + props 추가

> 문서 누락 시 PR 머지하지 않습니다. 컴포넌트와 문서는 항상 함께 갑니다.

## 배포 프로세스

npm publish 시 다음을 수행:

1. `packages/core/package.json` — version bump (semver)
2. `CHANGELOG.md` — 변경사항 기록 (`## [x.y.z] - YYYY-MM-DD`)
3. `pnpm --filter @grannyshot/ui publish --access public`
4. `git tag vX.Y.Z && git push --tags`
5. `gh release create vX.Y.Z` — GitHub Release notes 작성

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

- **Tailwind CSS** — 스타일링 + 토큰
- **Ark UI** — 접근성 기반 헤드리스 컴포넌트
- **tsup** — ESM + CJS 번들링
- **Nextra** — 문서 사이트
- **pnpm workspace** — 모노레포 관리