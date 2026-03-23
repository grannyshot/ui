'use client'

import { useState } from 'react'
import { Dialog, Button } from '@grannyshot/ui'

export function DialogPreview() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Dialog.Content size="md">
          <Dialog.CloseTrigger />
          <Dialog.Title>Confirm action</Dialog.Title>
          <Dialog.Description>
            Are you sure you want to proceed? This action cannot be undone.
          </Dialog.Description>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}
