'use client'

import { Popover, Button } from '@grannyshot/ui'

export function PopoverPreview() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.Title>Popover Title</Popover.Title>
        <Popover.Description>
          This is a popover with additional information.
        </Popover.Description>
      </Popover.Content>
    </Popover.Root>
  )
}
