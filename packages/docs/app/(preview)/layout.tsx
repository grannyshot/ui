import type { ReactNode } from 'react'
import '@grannyshot/ui/styles.css'
import './preview.css'

export default function PreviewLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('message', (e) => {
                if (e.data?.type === 'theme-change') {
                  document.querySelector('[data-theme]')?.setAttribute('data-theme', e.data.theme)
                }
              })
            `,
          }}
        />
      </body>
    </html>
  )
}
