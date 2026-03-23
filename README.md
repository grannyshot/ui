# @grannyshot/ui

A minimal, theme-aware design system built with [Panda CSS](https://panda-css.com/) and [Ark UI](https://ark-ui.com/).

[![npm](https://img.shields.io/npm/v/@grannyshot/ui)](https://www.npmjs.com/package/@grannyshot/ui)
[![license](https://img.shields.io/npm/l/@grannyshot/ui)](LICENSE)

**[Documentation](https://ui.grannyshot.co.kr)** · **[GitHub](https://github.com/grannyshot/ui)** · **[npm](https://www.npmjs.com/package/@grannyshot/ui)**

## Features

- **37 components** — buttons, inputs, modals, toasts, date pickers, and more
- **Dark mode** — seamless light/dark theme switching with semantic tokens
- **Accessible** — built on Ark UI (Zag.js state machines) for keyboard navigation and screen reader support
- **Imperative APIs** — `toast.success()`, `dialog.confirm()`, `drawer.open()`
- **Tree-shakeable** — zero Panda CSS dependency for consumers
- **TypeScript** — full type safety with exported variant types

## Install

```bash
npm install @grannyshot/ui
```

## Quick Start

```tsx
import '@grannyshot/ui/styles.css'
import { ThemeProvider, Button } from '@grannyshot/ui'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  )
}
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

// Toast
toast.success('Saved!')
toast.error('Something went wrong')
await toast.promise(asyncFn(), {
  loading: 'Uploading...',
  success: 'Done!',
  error: 'Failed',
})
toast.custom((dismiss) => <CustomToast onClose={dismiss} />)

// Dialog
const confirmed = await dialog.confirm({
  title: 'Delete?',
  description: 'This cannot be undone.',
  confirmText: 'Delete',
})
dialog.open({ content: (close) => <CustomModal onClose={close} /> })

// Drawer
drawer.open({ title: 'Settings', content: <SettingsPanel /> })
```

## Theming

```tsx
import { ThemeProvider, useTheme } from '@grannyshot/ui'

// Wrap your app
<ThemeProvider defaultTheme="system">
  <App />
  <ToastProvider placement="bottom-end" />
  <DialogProvider />
  <DrawerProvider />
</ThemeProvider>

// Access theme
const { theme, resolvedTheme, setTheme } = useTheme()
```

## Import Paths

| Path | Contents |
|------|----------|
| `@grannyshot/ui` | Everything |
| `@grannyshot/ui/react` | React components only |
| `@grannyshot/ui/styles` | Style recipes (cva) |
| `@grannyshot/ui/tokens` | Design tokens |
| `@grannyshot/ui/context` | ThemeProvider + useTheme |
| `@grannyshot/ui/utils` | cx utility |
| `@grannyshot/ui/styles.css` | CSS file |

## License

MIT
