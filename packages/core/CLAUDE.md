# @grannyshot/ui — AI Guide

Tailwind CSS + Ark UI 기반 React 디자인 시스템. 37개 컴포넌트.

## 설치 & 설정

```bash
npm install @grannyshot/ui
```

```tsx
// 1. CSS import (반드시 필요)
import '@grannyshot/ui/styles.css'

// 2. 컴포넌트 import
import { Button, Input, Dialog } from '@grannyshot/ui'

// 3. 다크모드 (선택)
// <html class="dark"> 설정으로 동작. next-themes 등과 호환.
<html class="dark">...</html>
```

## 컴포넌트 목록

### 일반
- `Button` — variant: primary, secondary, outline, ghost, danger / size: sm, md, lg
- `Badge` — variant: success, warning, error, info, neutral / size: sm, md
- `Avatar` — size: sm, md, lg, xl / name (initials fallback), src
- `Separator` — orientation: horizontal, vertical
- `Skeleton` — variant: text, circular, rectangular
- `EmptyState` — icon, title, description, actions slots
- `Alert` — variant: info, success, warning, error / title, icon props

### 폼
- `Input` — size: sm, md, lg / state: default, error, success
- `Textarea` — size: sm, md, lg / state: default, error, success / resize: none, vertical, both
- `Label` — required, disabled
- `Field` — label, hint, error, required, disabled (폼 필드 래퍼)
- `Checkbox` — size: sm, md, lg / label
- `Switch` — size: sm, md, lg / label
- `RadioGroup` — compound: Root + Item / size: sm, md, lg / orientation
- `Select` — size: sm, md, lg / collection (createListCollection)
- `Combobox` — size: sm, md, lg / collection, placeholder
- `NumberInput` — size: sm, md, lg / min, max, step
- `PinInput` — size: sm, md, lg / length, mask
- `Slider` — size: sm, md, lg / label, showValue
- `DatePicker` — 날짜 선택 캘린더
- `FileUpload` — 드래그앤드롭, maxFiles
- `TagsInput` — size: sm, md, lg / 태그 추가/삭제

### 레이아웃
- `Card` — padding: sm, md, lg / hoverable
- `Table` — compound: Root, Header, HeaderCell, Body, Row, Cell, Caption
- `Tabs` — compound: Root, List, Trigger, Content, Indicator / variant: line, pill
- `Accordion` — compound: Root, Item, ItemTrigger, ItemContent
- `Steps` — compound: Root, List, Item, Content, CompletedContent

### 오버레이
- `Dialog` — compound: Root, Trigger, Content, Title, Description, CloseTrigger / size: sm, md, lg
- `Drawer` — compound: Root, Trigger, Content, Header, Body, Footer / placement: left, right
- `Popover` — compound: Root, Trigger, Content, Arrow, Title, Description
- `Tooltip` — content, openDelay, closeDelay, positioning({ placement: top|bottom|left|right })
- `Menu` — compound: Root, Trigger, Content, Item, Separator, ItemGroup

### 피드백
- `Toast` — toast.success(), toast.error(), toast.warning(), toast.info() + ToastProvider
- `Progress` — size: sm, md, lg / label, showValue

### 네비게이션
- `Pagination` — count, pageSize, size: sm, md
- `Breadcrumb` — compound: Root, Item, Link, Separator
- `ToggleGroup` — compound: Root, Item / size: sm, md, lg / multiple

## 사용 패턴

### 기본 컴포넌트

```tsx
<Button variant="primary" size="md">Click</Button>
<Input placeholder="Email" state="error" />
<Badge variant="success">Active</Badge>
```

### 폼 필드

```tsx
<Field label="Email" required error="Invalid email">
  <Input type="email" />
</Field>
```

### Compound 컴포넌트

```tsx
<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Content size="md">
    <Dialog.CloseTrigger />
    <Dialog.Title>Title</Dialog.Title>
    <Dialog.Description>Description</Dialog.Description>
  </Dialog.Content>
</Dialog.Root>
```

### Select with Collection

```tsx
import { Select, createListCollection } from '@grannyshot/ui'

const items = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ],
})

<Select collection={items} placeholder="Choose..." />
```

### 명령형 Toast

```tsx
import { toast, ToastProvider } from '@grannyshot/ui'

// 앱 루트에 <ToastProvider /> 추가 필수
toast.success('저장 완료!')
toast.error('오류 발생')
```

## 테마

- Light/Dark 지원
- 다크모드: `<html class="dark">` 설정으로 동작
- CSS 변수: `--gs-*` prefix (충돌 없음)
- next-themes 등 외부 테마 라이브러리와 호환

## Import 경로

```tsx
import { Button } from '@grannyshot/ui'           // 전체 (권장)
import { Button } from '@grannyshot/ui/react'      // React 컴포넌트만
import { button } from '@grannyshot/ui/styles'     // recipe 함수만
import { token } from '@grannyshot/ui/tokens'      // 토큰 함수
import { cn } from '@grannyshot/ui/utils'          // 유틸리티
```

## Tailwind 유틸리티 클래스 (styles.css에서 제공)

grannyshot-ui 시맨틱 토큰을 사용할 때 아래 클래스를 사용하세요.
`bg-[var(--gs-accent)]` 같은 임의값 문법을 쓰지 마세요 — 등록된 유틸리티를 사용하세요.

- 배경: `bg-gs-bg`, `bg-gs-bg-subtle`, `bg-gs-bg-muted`, `bg-gs-accent`, `bg-gs-accent-hover`, `bg-gs-error`, `bg-gs-success`, `bg-gs-warning`, `bg-gs-info` 등
- 텍스트: `text-gs-fg`, `text-gs-fg-muted`, `text-gs-fg-subtle`, `text-gs-accent`, `text-gs-accent-fg`, `text-gs-error`, `text-gs-success` 등
- 테두리: `border-gs-border`, `border-gs-border-muted`, `border-gs-border-strong`, `border-gs-border-focus`, `border-gs-accent`, `border-gs-error` 등

## 문서

https://ui.grannyshot.co.kr
