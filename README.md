# @grannyshot/ui

A minimal, theme-aware design system built with [Tailwind CSS](https://tailwindcss.com/) and [Ark UI](https://ark-ui.com/).

[![npm](https://img.shields.io/npm/v/@grannyshot/ui)](https://www.npmjs.com/package/@grannyshot/ui)
[![license](https://img.shields.io/npm/l/@grannyshot/ui)](LICENSE)

**[Documentation](https://ui.grannyshot.co.kr)** · **[GitHub](https://github.com/grannyshot/ui)** · **[npm](https://www.npmjs.com/package/@grannyshot/ui)**

## Features

- **37 components** — buttons, inputs, modals, toasts, date pickers, and more
- **Dark mode** — seamless light/dark theme switching with semantic tokens
- **Accessible** — built on Ark UI (Zag.js state machines) for keyboard navigation and screen reader support
- **Imperative APIs** — `toast.success()`, `dialog.confirm()`, `drawer.open()`
- **Tailwind CSS native** — no CSS conflicts in Tailwind projects, easy className overrides
- **Next.js ready** — `'use client'` directives, SSR-safe theming with `ThemeScript`
- **TypeScript** — full type safety with exported variant types

## Install

```bash
npm install @grannyshot/ui
```

## Quick Start

```tsx
import '@grannyshot/ui/styles.css'
import { Button } from '@grannyshot/ui'

function App() {
  return <Button variant="primary">Click me</Button>
}
```

### Dark Mode (Optional)

Option A: ThemeProvider (client-side)
```tsx
import { ThemeProvider } from '@grannyshot/ui'

<ThemeProvider defaultTheme="system">
  <App />
</ThemeProvider>
```

Option B: Blocking script (SSR, no flash)
```tsx
// layout.tsx (Next.js)
import { ThemeScript } from '@grannyshot/ui'

<html>
  <head><ThemeScript /></head>
  <body>{children}</body>
</html>
```

## Components

### General
Button · Badge · Avatar · Separator · Skeleton · Alert · EmptyState

### Form
Input · Textarea · Label · Checkbox · Switch · RadioGroup · Select · Combobox · NumberInput · PinInput · Slider · DatePicker · FileUpload · TagsInput · Field

### Layout
Card · Table · Tabs · Accordion · Steps

### Overlay
Dialog · Drawer · Popover · Tooltip · Menu

### Navigation
Pagination · Breadcrumb · ToggleGroup

### Feedback
Toast · Progress

## Imperative APIs

```tsx
import { toast, dialog, drawer } from '@grannyshot/ui'

toast.success('Saved!')
const confirmed = await dialog.confirm({ title: 'Delete?', description: 'This cannot be undone.', confirmText: 'Delete' })
drawer.open({ title: 'Settings', content: <SettingsPanel /> })
```

## Theming

```tsx
import { useTheme } from '@grannyshot/ui'

// Works with or without ThemeProvider
const { theme, resolvedTheme, setTheme } = useTheme()
```

## Import Paths

| Path | Contents |
|------|----------|
| `@grannyshot/ui` | Everything |
| `@grannyshot/ui/react` | React components only |
| `@grannyshot/ui/styles` | Style recipes (tv) |
| `@grannyshot/ui/tokens` | Design tokens |
| `@grannyshot/ui/context` | ThemeProvider + ThemeScript + useTheme |
| `@grannyshot/ui/utils` | cn utility |
| `@grannyshot/ui/styles.css` | CSS file (Tailwind projects or standalone) |
| `@grannyshot/ui/styles-no-preflight.css` | CSS file (other frameworks, no reset) |

## License

MIT
