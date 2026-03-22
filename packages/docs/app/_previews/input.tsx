'use client'

import { Input } from '@grannyshot/ui'

export function InputPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 300 }}>
      <Input placeholder="Default input" />
      <Input state="error" placeholder="Error state" />
      <Input state="success" placeholder="Success state" />
    </div>
  )
}
