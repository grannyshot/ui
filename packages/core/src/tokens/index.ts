const tokenMap: Record<string, string> = {
  'colors.bg': 'var(--gs-bg)',
  'colors.bg.subtle': 'var(--gs-bg-subtle)',
  'colors.bg.muted': 'var(--gs-bg-muted)',
  'colors.bg.inverse': 'var(--gs-bg-inverse)',
  'colors.fg': 'var(--gs-fg)',
  'colors.fg.muted': 'var(--gs-fg-muted)',
  'colors.fg.subtle': 'var(--gs-fg-subtle)',
  'colors.fg.inverse': 'var(--gs-fg-inverse)',
  'colors.border': 'var(--gs-border)',
  'colors.border.muted': 'var(--gs-border-muted)',
  'colors.border.strong': 'var(--gs-border-strong)',
  'colors.border.focus': 'var(--gs-border-focus)',
  'colors.ring': 'var(--gs-ring)',
  'colors.overlay': 'var(--gs-overlay)',
  'colors.accent': 'var(--gs-accent)',
  'colors.accent.hover': 'var(--gs-accent-hover)',
  'colors.accent.muted': 'var(--gs-accent-muted)',
  'colors.accent.subtle': 'var(--gs-accent-subtle)',
  'colors.accent.fg': 'var(--gs-accent-fg)',
  'colors.success': 'var(--gs-success)',
  'colors.success.subtle': 'var(--gs-success-subtle)',
  'colors.success.fg': 'var(--gs-success-fg)',
  'colors.warning': 'var(--gs-warning)',
  'colors.warning.subtle': 'var(--gs-warning-subtle)',
  'colors.warning.fg': 'var(--gs-warning-fg)',
  'colors.error': 'var(--gs-error)',
  'colors.error.subtle': 'var(--gs-error-subtle)',
  'colors.error.fg': 'var(--gs-error-fg)',
  'colors.info': 'var(--gs-info)',
  'colors.info.subtle': 'var(--gs-info-subtle)',
  'colors.info.fg': 'var(--gs-info-fg)',
}

export function token(path: string): string {
  return tokenMap[path] ?? path
}

export type Token = keyof typeof tokenMap
