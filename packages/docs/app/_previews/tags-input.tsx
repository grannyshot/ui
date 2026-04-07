'use client'

import { TagsInput } from '@grannyshot/ui'

export function TagsInputPreview() {
  return (
    <div style={{ maxWidth: 320 }}>
      <TagsInput label="Tags" defaultValue={['React', 'Tailwind CSS']} placeholder="Add tag..." />
    </div>
  )
}
