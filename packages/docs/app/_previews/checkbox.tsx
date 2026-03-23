'use client'

import { Checkbox } from '@grannyshot/ui'

export function CheckboxPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" defaultChecked />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  )
}
