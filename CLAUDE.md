# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**grannyshot-ui** — A minimal, theme-aware design system built with vanilla-extract. Published as the `grannyshot-ui` npm package.

## Commands

```bash
# Install dependencies
pnpm install

# Build the core library
pnpm build          # runs: pnpm --filter grannyshot-ui build (tsup)

# Watch mode for development
pnpm dev            # runs: pnpm --filter grannyshot-ui dev (tsup --watch)

# Type check
pnpm --filter grannyshot-ui exec tsc --noEmit
```

## Architecture

This is a **pnpm monorepo** with packages under `packages/`:
- `packages/core` — The main `grannyshot-ui` library (the only published package)

### Core Package Structure (`packages/core/src/`)

The library is organized into 5 entry points, each independently importable:

| Entry point | Path | Purpose |
|-------------|------|---------|
| `grannyshot-ui` | `src/index.ts` | Re-exports everything |
| `grannyshot-ui/tokens` | `src/tokens/` | Design tokens: colors, typography, spacing, animation |
| `grannyshot-ui/styles` | `src/styles/` | Sprinkles utilities + component recipes (button, input, badge, card) |
| `grannyshot-ui/react` | `src/react/` | React components (Box, Button, Input, Badge, Card) |
| `grannyshot-ui/context` | `src/context/` | ThemeProvider + useTheme hook |
| `grannyshot-ui/utils` | `src/utils/` | `cn` class name helper |

### Styling System (vanilla-extract)

- **All styles** live in `.css.ts` files — these run at build time and produce zero-runtime CSS
- **Theme tokens** use `createGlobalThemeContract` with `gs-` prefixed CSS custom properties (e.g., `--gs-color-bg`)
- **Theming**: Light theme applied to `:root` by default; dark theme auto-applied via `prefers-color-scheme` media query; class-based themes (`lightTheme`/`darkTheme`) available for manual switching via `ThemeProvider`
- **Component variants** use `recipe()` from `@vanilla-extract/recipes` — variant types are exported alongside recipes (e.g., `ButtonVariants`)
- **Sprinkles** provide type-safe utility props for the `Box` component (layout, spacing, colors with responsive conditions)
- **Build**: tsup with `@vanilla-extract/esbuild-plugin`, outputs ESM + CJS + `.d.ts`

### Key Conventions

- Accent color is **emerald** (not blue) — the primary palette
- CSS variable contract names follow `gs-color-{semantic}` pattern (bg, fg, border, accent, success, warning, error, info — each with subtle/muted variants)
- React components are thin wrappers around recipe/sprinkles classes
- React and React DOM are **peer dependencies** (optional) — tokens and styles can be used without React