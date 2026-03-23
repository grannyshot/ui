'use client'

import { Skeleton } from '@grannyshot/ui'

export function SkeletonPreview() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <Skeleton variant="circular" width={48} height={48} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="rectangular" width="100%" height={64} />
      </div>
    </div>
  )
}
