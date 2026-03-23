'use client'

import { RadioGroup } from '@grannyshot/ui'

export function RadioGroupPreview() {
  return (
    <RadioGroup.Root defaultValue="react" label="Framework">
      <RadioGroup.Item value="react" label="React" />
      <RadioGroup.Item value="vue" label="Vue" />
      <RadioGroup.Item value="svelte" label="Svelte" />
    </RadioGroup.Root>
  )
}
