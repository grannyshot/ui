import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'

type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'grannyshot-theme'

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  } catch {}
  return 'system'
}

function resolveTheme(theme: Theme, systemTheme: ResolvedTheme): ResolvedTheme {
  return theme === 'system' ? systemTheme : theme
}

function applyTheme(resolved: ResolvedTheme) {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', resolved)
  document.documentElement.style.colorScheme = resolved
}

// ── ThemeScript ──────────────────────────────────────────────
// Blocking <script> that sets data-theme before first paint.
// No flash, no hydration mismatch.

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}')||'system';if(t==='system')t=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t}catch(e){}})()`

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
}

// ── ThemeProvider ────────────────────────────────────────────
// Optional wrapper. No wrapper div — just sets data-theme on <html>.

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
}

export function ThemeProvider({ children, defaultTheme }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme ?? 'system')
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>('light')
  const [mounted, setMounted] = useState(false)

  const resolved = resolveTheme(theme, systemTheme)

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    const newResolved = resolveTheme(newTheme, getSystemTheme())
    applyTheme(newResolved)
    try { localStorage.setItem(STORAGE_KEY, newTheme) } catch {}
  }, [])

  useEffect(() => {
    setMounted(true)
    const stored = getStoredTheme()
    const sys = getSystemTheme()
    setThemeState(stored)
    setSystemTheme(sys)
    applyTheme(resolveTheme(stored, sys))

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      const newSys: ResolvedTheme = e.matches ? 'dark' : 'light'
      setSystemTheme(newSys)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // system preference가 바뀌면 DOM도 업데이트
  useEffect(() => {
    if (!mounted) return
    applyTheme(resolved)
  }, [resolved, mounted])

  const value = useMemo(() => ({
    theme,
    resolvedTheme: mounted ? resolved : 'light' as ResolvedTheme,
    setTheme,
  }), [theme, resolved, mounted, setTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// ── useTheme ─────────────────────────────────────────────────
// Works with or without ThemeProvider.
// Without provider: reads/writes data-theme on <html> directly.

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (context) return context

  // Standalone mode (no provider)
  return useThemeStandalone()
}

function useThemeStandalone(): ThemeContextValue {
  const [theme, setThemeState] = useState<Theme>('system')
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setThemeState(getStoredTheme())
    setSystemTheme(getSystemTheme())

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const resolved = resolveTheme(theme, systemTheme)

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    const newResolved = resolveTheme(newTheme, getSystemTheme())
    applyTheme(newResolved)
    try { localStorage.setItem(STORAGE_KEY, newTheme) } catch {}
  }, [])

  return {
    theme,
    resolvedTheme: mounted ? resolved : 'light',
    setTheme,
  }
}