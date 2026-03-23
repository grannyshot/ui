'use client'

import { Progress } from '@grannyshot/ui'

export function ProgressPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <Progress size="sm" value={30} />
      <Progress size="md" value={60} label="Uploading..." showValue />
      <Progress size="lg" value={90} showValue />
    </div>
  )
}
