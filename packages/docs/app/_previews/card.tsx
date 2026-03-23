'use client'

import { Card } from '@grannyshot/ui'

export function CardPreview() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      <Card padding="sm" style={{ flex: 1, minWidth: 140 }}>
        <strong>Small</strong>
        <p style={{ margin: '4px 0 0' }}>Small padding card.</p>
      </Card>
      <Card padding="md" hoverable style={{ flex: 1, minWidth: 140 }}>
        <strong>Medium</strong>
        <p style={{ margin: '4px 0 0' }}>Hoverable card.</p>
      </Card>
      <Card padding="lg" style={{ flex: 1, minWidth: 140 }}>
        <strong>Large</strong>
        <p style={{ margin: '4px 0 0' }}>Large padding card.</p>
      </Card>
    </div>
  )
}
