'use client'

import { Breadcrumb } from '@grannyshot/ui'

export function BreadcrumbPreview() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Separator />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
        <Breadcrumb.Separator />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#" current>Breadcrumb</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  )
}
