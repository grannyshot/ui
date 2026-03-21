# grannyshot-ui

A minimal, theme-aware design system built with [vanilla-extract](https://vanilla-extract.style/).

## Install

```bash
pnpm add grannyshot-ui
```

## Quick Start

```tsx
import { ThemeProvider, Button, Input, Card } from 'grannyshot-ui'
import 'grannyshot-ui/styles.css'

function App() {
  return (
    <ThemeProvider>
      <Card>
        <Input label="Email" placeholder="you@example.com" />
        <Button variant="primary">Submit</Button>
      </Card>
    </ThemeProvider>
  )
}
```

## Theme

Wrap your app with `ThemeProvider` to enable light/dark/system theme switching:

```tsx
import { ThemeProvider, useTheme } from 'grannyshot-ui'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle</button>
}

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <ThemeToggle />
    </ThemeProvider>
  )
}
```

## Components

- **Box** — Polymorphic layout primitive with sprinkles props
- **Button** — primary / secondary / ghost / danger / outline variants
- **Input** — Accessible form input with label, hint, error
- **Badge** — Status indicators (success, warning, error, info, neutral)
- **Card** — Container with padding and hover variants

## Exports

| Path | Contents |
|------|----------|
| `grannyshot-ui` | Everything |
| `grannyshot-ui/tokens` | Design tokens (colors, typography, spacing, animation) |
| `grannyshot-ui/styles` | Sprinkles + component recipes |
| `grannyshot-ui/react` | React components |
| `grannyshot-ui/context` | ThemeProvider + useTheme |
| `grannyshot-ui/utils` | cn helper |
| `grannyshot-ui/styles.css` | Generated CSS |

## License

MIT
