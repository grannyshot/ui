import type { ReactNode } from 'react'
import '@grannyshot/ui/styles.css'
import './preview.css'

export default function PreviewLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}