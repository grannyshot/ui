'use client'

import { Slider } from '@grannyshot/ui'

export function SliderPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 320 }}>
      <Slider size="sm" defaultValue={[30]} label="Small" />
      <Slider size="md" defaultValue={[50]} label="Medium" showValue />
      <Slider size="lg" defaultValue={[70]} label="Large" showValue />
    </div>
  )
}
