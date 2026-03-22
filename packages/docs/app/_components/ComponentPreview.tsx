'use client'

import { ThemeProvider } from '@grannyshot/ui'
import { previews } from '../_previews'

type ComponentPreviewProps = {
  name: string
}

export function ComponentPreview({ name }: ComponentPreviewProps) {
  const Preview = previews[name]

  if (!Preview) {
    return null
  }

  return (
    <div
      style={{
        border: '1px solid var(--nextra-border, #e5e7eb)',
        borderRadius: 8,
        padding: 16,
        marginTop: 8,
        marginBottom: 16,
        background: 'var(--nextra-bg, #fafafa)',
      }}
    >
      <ThemeProvider defaultTheme="light">
        <Preview />
      </ThemeProvider>
    </div>
  )
}
