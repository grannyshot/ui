'use client'

import { useEffect, useRef, useState } from 'react'
import { previews } from '../_previews'

type InlinePreviewProps = {
  name: string
}

export function InlinePreview({ name }: InlinePreviewProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const sync = () => setDark(html.classList.contains('dark'))
    sync()

    const observer = new MutationObserver(sync)
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const Preview = previews[name]
  if (!Preview) return null

  return (
    <div
      style={{
        marginTop: 12,
        marginBottom: 16,
        borderRadius: 6,
        overflow: 'hidden',
        border: '1px solid color-mix(in srgb, currentColor 20%, transparent)',
      }}
    >
      <div ref={wrapperRef} className={dark ? 'dark' : ''}>
        <div style={{ padding: 16 }}>
          <Preview />
        </div>
      </div>
    </div>
  )
}
