'use client'

import { Combobox, createListCollection } from '@grannyshot/ui'

const collection = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Angular', value: 'angular' },
    { label: 'Solid', value: 'solid' },
  ],
})

export function ComboboxPreview() {
  return (
    <div style={{ maxWidth: 280 }}>
      <Combobox collection={collection} placeholder="Search frameworks..." />
    </div>
  )
}
