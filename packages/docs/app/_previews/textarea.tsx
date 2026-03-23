'use client'

import { Textarea } from '@grannyshot/ui'

export function TextareaPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <Textarea placeholder="Default textarea" />
      <Textarea state="error" placeholder="Error state" />
      <Textarea state="success" placeholder="Success state" />
    </div>
  )
}
