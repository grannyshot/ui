'use client'

import { Select, createListCollection } from '@grannyshot/ui'

const collection = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Angular', value: 'angular' },
  ],
})

export function SelectPreview() {
  return (
    <div style={{ maxWidth: 280 }}>
      <Select collection={collection} placeholder="Choose a framework" />
    </div>
  )
}
