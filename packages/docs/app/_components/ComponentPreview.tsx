'use client'

import { useEffect, useRef, useState } from 'react'

type ComponentPreviewProps = {
  name: string
  height?: number
}

export function ComponentPreview({ name, height = 80 }: ComponentPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState(height)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      try {
        const body = iframe.contentDocument?.body
        if (body) {
          setIframeHeight(Math.max(height, body.scrollHeight + 8))
        }
      } catch {
        // cross-origin, use default height
      }
    }

    iframe.addEventListener('load', handleLoad)
    return () => iframe.removeEventListener('load', handleLoad)
  }, [height])

  return (
    <div
      style={{
        border: '1px solid var(--nextra-border)',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 16,
        marginTop: 8,
      }}
    >
      <iframe
        ref={iframeRef}
        src={`/preview/${name}`}
        style={{
          width: '100%',
          height: iframeHeight,
          border: 'none',
          display: 'block',
        }}
        title={`${name} preview`}
      />
    </div>
  )
}
