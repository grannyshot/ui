'use client'

import { Alert } from '@grannyshot/ui'

export function AlertPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert variant="info" title="Info">
        This is an informational message.
      </Alert>
      <Alert variant="success" title="Success">
        Operation completed successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Please review before proceeding.
      </Alert>
      <Alert variant="error" title="Error">
        Something went wrong.
      </Alert>
    </div>
  )
}
