'use client'

import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { previews } from '../_previews'

type ShadowPreviewClientProps = {
  name: string
  css: string
}

export function ShadowPreviewClient({ name, css }: ShadowPreviewClientProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  // Attach shadow DOM before paint so user never sees empty state
  useLayoutEffect(() => {
    const host = hostRef.current
    if (!host || host.shadowRoot) return

    const shadow = host.attachShadow({ mode: 'open' })

    const style = document.createElement('style')
    style.textContent = css
    shadow.appendChild(style)

    const wrapper = document.createElement('div')
    const isDark = document.documentElement.classList.contains('dark')
    wrapper.setAttribute('data-theme', isDark ? 'dark' : 'light')
    shadow.appendChild(wrapper)

    setContainer(wrapper)
  }, [css])

  // Sync theme with parent document (Nextra uses class="dark" on <html>)
  useEffect(() => {
    const html = document.documentElement
    const observer = new MutationObserver(() => {
      const isDark = html.classList.contains('dark')
      if (hostRef.current?.shadowRoot) {
        const wrapper = hostRef.current.shadowRoot.lastElementChild as HTMLElement
        wrapper?.setAttribute('data-theme', isDark ? 'dark' : 'light')
      }
    })
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const Preview = previews[name]
  if (!Preview) return null

  const content = (
    <div style={{ padding: 16 }}>
      <Preview />
    </div>
  )

  // Outer container uses CSS that adapts to theme without JS state,
  // so SSR matches both light and dark without hydration mismatch.
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
      <div ref={hostRef}>
        {container ? (
          createPortal(content, container)
        ) : (
          <div
            style={{
              padding: 16,
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
            }}
          >
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                style={{
                  height: 24,
                  width: 64,
                  borderRadius: 9999,
                  background: 'color-mix(in srgb, currentColor 8%, transparent)',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
            ))}
            <style>{`@keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.4 } }`}</style>
          </div>
        )}
      </div>
    </div>
  )
}
