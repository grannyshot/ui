'use client'

import { ThemeProvider } from '@grannyshot/ui'
import { previews } from '../../../_previews'

type Props = {
  params: Promise<{ component: string }>
}

export default function PreviewPage({ params }: Props) {
  // Use React.use() for client component params
  const { component } = require('react').use(params)
  const Preview = previews[component]

  if (!Preview) {
    return <div>Preview not found: {component}</div>
  }

  return (
    <ThemeProvider defaultTheme="light">
      <Preview />
    </ThemeProvider>
  )
}
