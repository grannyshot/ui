'use client'

import { use, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { previews } from '../../../_previews'

export default function PreviewPage({ params }: { params: Promise<{ component: string }> }) {
  const { component } = use(params)
  const searchParams = useSearchParams()
  const theme = (searchParams.get('theme') as 'light' | 'dark') || 'light'

  // Set data-theme on <html> and listen for postMessage theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme

    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'theme-change') {
        const t = e.data.theme as 'light' | 'dark'
        document.documentElement.setAttribute('data-theme', t)
        document.documentElement.style.colorScheme = t
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
