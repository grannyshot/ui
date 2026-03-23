# Roadmap

grannyshot-ui 개발 로드맵. 개인 프로젝트 + 오픈소스로 점진적 성숙화.

## Phase 1: Foundation ✅

- [x] 26개 기본 컴포넌트
- [x] npm 배포 (`@grannyshot/ui`)
- [x] Nextra 문서 사이트 + 라이브 프리뷰
- [x] GitHub Actions CI
- [x] Issue/PR 템플릿
- [x] Changeset 설정

## Phase 2: 컴포넌트 확장

실무 필수 컴포넌트를 우선순위대로 추가.

### Tier 1 — 거의 모든 앱에 필요

| 순서 | 컴포넌트 | Ark UI | 상태 |
|------|----------|--------|------|
| 1 | RadioGroup | `radio-group` | 🔲 |
| 2 | Alert / Banner | 순수 CSS | 🔲 |
| 3 | Pagination | `pagination` | 🔲 |
| 4 | Breadcrumb | 순수 CSS | 🔲 |
| 5 | NumberInput | `number-input` | 🔲 |
| 6 | PinInput | `pin-input` | 🔲 |

### Tier 2 — 자주 쓰이는 보조

| 순서 | 컴포넌트 | Ark UI | 상태 |
|------|----------|--------|------|
| 7 | FileUpload | `file-upload` | 🔲 |
| 8 | TagsInput | `tags-input` | 🔲 |
| 9 | ToggleGroup | `toggle-group` | 🔲 |
| 10 | Steps | `steps` | 🔲 |
| 11 | EmptyState | 순수 CSS | 🔲 |

### Tier 3 — 필요시 추가

Clipboard, Collapsible, Editable, HoverCard, RatingGroup, SegmentGroup, TreeView, QRCode 등

## Phase 3: 품질 (Phase 2와 병행)

- [ ] Vitest + @testing-library/react 설정
- [ ] recipe 단위 테스트 (Button, Badge, Input부터)
- [ ] CI에 `pnpm test` step 추가
- [ ] ESLint 기본 설정
- [ ] 접근성 검증

## Phase 4: DX & 에코시스템 (장기)

- [ ] `pnpm create-component {name}` CLI 스크립트
- [ ] Bundle size tracking (`size-limit`)
- [ ] Changeset 기반 자동 릴리즈 workflow
- [ ] Figma token export
