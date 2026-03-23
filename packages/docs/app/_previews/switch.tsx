'use client'

import { Switch } from '@grannyshot/ui'

export function SwitchPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" />
    </div>
  )
}
