'use client'

import { NumberInput } from '@grannyshot/ui'

export function NumberInputPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 240 }}>
      <NumberInput size="sm" defaultValue="0" label="Quantity" min={0} max={99} />
      <NumberInput size="md" defaultValue="10" label="Amount" />
      <NumberInput size="lg" defaultValue="50" min={0} max={100} step={10} />
    </div>
  )
}
