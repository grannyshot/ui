'use client'

import { PinInput } from '@grannyshot/ui'

export function PinInputPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <PinInput label="Verification Code" length={4} />
      <PinInput label="Password" length={6} mask />
    </div>
  )
}
