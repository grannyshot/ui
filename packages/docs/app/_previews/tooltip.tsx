'use client'

import { Tooltip, Button } from '@grannyshot/ui'

export function TooltipPreview() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Tooltip content="This is a tooltip">
        <Button variant="outline">Hover me</Button>
      </Tooltip>
    </div>
  )
}
