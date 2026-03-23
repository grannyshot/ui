'use client'

import { useState } from 'react'
import { Drawer, Button } from '@grannyshot/ui'

export function DrawerPreview() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Drawer.Content placement="right">
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
            <Drawer.CloseTrigger />
          </Drawer.Header>
          <Drawer.Body>Drawer body content goes here.</Drawer.Body>
          <Drawer.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </>
  )
}
