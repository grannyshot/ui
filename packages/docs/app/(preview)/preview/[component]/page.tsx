'use client'

import { use, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ThemeProvider, useTheme } from '@grannyshot/ui'
import { previews } from '../../../_previews'

function ThemeSync() {
  const { setTheme } = useTheme()

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'theme-change') {
        setTheme(e.data.theme)
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [setTheme])

  return null
}

type Props = {
  params: Promise<{ component: string }>
}

export default function PreviewPage({ params }: Props) {
  const { component } = use(params)
  const searchParams = useSearchParams()
  const theme = (searchParams.get('theme') as 'light' | 'dark') || 'light'

  const Preview = previews[component]

  if (!Preview) {
    return <div style={{ padding: 16, color: '#999' }}>Preview not found: {component}</div>
  }

  return (
    <ThemeProvider defaultTheme={theme}>
      <ThemeSync />
      <div style={{ padding: 16 }}>
        <Preview />
      </div>
    </ThemeProvider>
  )
}
