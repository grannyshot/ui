'use client'

import { EmptyState, Button } from '@grannyshot/ui'

export function EmptyStatePreview() {
  return (
    <EmptyState
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13 2 13 9 20 9" />
        </svg>
      }
      title="No documents"
      description="Get started by creating your first document."
      actions={<Button variant="primary" size="sm">Create document</Button>}
    />
  )
}
