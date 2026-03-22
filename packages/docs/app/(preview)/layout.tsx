import type { ReactNode } from 'react'
import '@grannyshot/ui/styles.css'

export default function PreviewLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 16, background: 'transparent' }}>
        {children}
      </body>
    </html>
  )
}
