'use client'

import { Avatar } from '@grannyshot/ui'

export function AvatarPreview() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Avatar size="sm" name="Alice" />
      <Avatar size="md" name="Bob" />
      <Avatar size="lg" name="Charlie" />
      <Avatar size="xl" name="Diana" />
    </div>
  )
}
