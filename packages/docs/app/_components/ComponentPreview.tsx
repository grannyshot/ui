'use client'

import { useEffect, useRef, useState } from 'react'

type ComponentPreviewProps = {
  name: string
}

export function ComponentPreview({ name }: ComponentPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(72)
  const [dark, setDark] = useState(false)
  const [initialTheme, setInitialTheme] = useState<string | null>(null)

  // Detect initial theme once, then track changes via postMessage
  useEffect(() => {
    const html = document.documentElement
    const isDark = html.classList.contains('dark')
    setDark(isDark)
    setInitialTheme(isDark ? 'dark' : 'light')

    const observer = new MutationObserver(() => {
      const nowDark = html.classList.contains('dark')
      setDark(nowDark)
      // Send to iframe instantly
      iframeRef.current?.contentWindow?.postMessage(
        { type: 'theme-change', theme: nowDark ? 'dark' : 'light' },
        '*'
      )
    })
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // Auto-resize iframe
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      try {
        const body = iframe.contentDocument?.body
        if (body) {
          const ro = new ResizeObserver(() => setHeight(body.scrollHeight))
          ro.observe(body)
        }
      } catch {}
    }

    iframe.addEventListener('load', handleLoad)
    return () => iframe.removeEventListener('load', handleLoad)
  }, [initialTheme])

  if (!initialTheme) return null

  return (
    <div
      style={{
        marginTop: 12,
        marginBottom: 16,
        borderRadius: 6,
        overflow: 'hidden',
        border: `1px solid ${dark ? '#404040' : '#d1d5db'}`,
        background: dark ? '#000' : '#fff',
      }}
    >
      <iframe
        ref={iframeRef}
        src={`/preview/${name}?theme=${initialTheme}`}
        style={{
          width: '100%',
          height,
          border: 'none',
          display: 'block',
        }}
        title={`${name} preview`}
      />
    </div>
  )
}
