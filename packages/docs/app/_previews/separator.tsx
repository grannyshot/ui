'use client'

import { Separator } from '@grannyshot/ui'

export function SeparatorPreview() {
  return (
    <div>
      <div style={{ padding: '8px 0' }}>Above the separator</div>
      <Separator />
      <div style={{ padding: '8px 0' }}>Below the separator</div>
    </div>
  )
}
