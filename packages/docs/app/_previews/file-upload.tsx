'use client'

import { FileUpload } from '@grannyshot/ui'

export function FileUploadPreview() {
  return (
    <div style={{ maxWidth: 400 }}>
      <FileUpload label="Attachments" maxFiles={3} />
    </div>
  )
}
