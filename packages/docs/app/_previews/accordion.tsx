'use client'

import { Accordion } from '@grannyshot/ui'

export function AccordionPreview() {
  return (
    <Accordion.Root defaultValue={['item1']}>
      <Accordion.Item value="item1">
        <Accordion.ItemTrigger>What is grannyshot-ui?</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          A minimal, theme-aware design system built with Tailwind CSS and Ark UI.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.ItemTrigger>How do I install it?</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          Install via npm: npm install @grannyshot/ui
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item3">
        <Accordion.ItemTrigger>Does it support dark mode?</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          Yes, all components support light and dark themes out of the box.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  )
}
