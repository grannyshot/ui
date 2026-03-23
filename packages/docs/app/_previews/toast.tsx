'use client'

import { Button, ToastProvider, toast } from '@grannyshot/ui'

export function ToastPreview() {
  return (
    <>
      <ToastProvider />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Button variant="primary" onClick={() => toast.success('Success!')}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.error('Something went wrong.')}>
          Error
        </Button>
        <Button variant="outline" onClick={() => toast.warning('Be careful!')}>
          Warning
        </Button>
        <Button variant="outline" onClick={() => toast.info('For your information.')}>
          Info
        </Button>
      </div>
    </>
  )
}
