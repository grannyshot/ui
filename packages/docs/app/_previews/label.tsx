'use client'

import { Label } from '@grannyshot/ui'

export function LabelPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Label>Default label</Label>
      <Label required>Required label</Label>
      <Label disabled>Disabled label</Label>
    </div>
  )
}
