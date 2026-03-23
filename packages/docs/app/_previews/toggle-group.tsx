'use client'

import { ToggleGroup } from '@grannyshot/ui'

export function ToggleGroupPreview() {
  return (
    <ToggleGroup.Root defaultValue={['grid']}>
      <ToggleGroup.Item value="list">List</ToggleGroup.Item>
      <ToggleGroup.Item value="grid">Grid</ToggleGroup.Item>
      <ToggleGroup.Item value="table">Table</ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
