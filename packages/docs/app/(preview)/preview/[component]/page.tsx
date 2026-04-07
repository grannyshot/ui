'use client'

import { use, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { previews } from '../../../_previews'

function applyTheme(t: 'light' | 'dark') {
  const root = document.documentElement
  if (t === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  root.style.colorScheme = t
}

export default function PreviewPage({ params }: { params: Promise<{ component: string }> }) {
  const { component } = use(params)
  const searchParams = useSearchParams()
  const theme = (searchParams.get('theme') as 'light' | 'dark') || 'light'

  useEffect(() => {
    applyTheme(theme)

    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'theme-change') {
        applyTheme(e.data.theme as 'light' | 'dark')
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [theme])

  const Preview = previews[component]

  if (!Preview) {
    return <div style={{ padding: 16, color: '#999' }}>Preview not found: {component}</div>
  }

  return (
    <div style={{ padding: 16 }}>
      <Preview />
    </div>
  )
}
