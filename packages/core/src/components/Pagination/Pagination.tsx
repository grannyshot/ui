import React, { forwardRef } from 'react'
import { Pagination as ArkPagination } from '@ark-ui/react/pagination'
import { paginationRoot, paginationItem, paginationEllipsis, type PaginationItemVariants } from './pagination.recipe'
import { cn } from '@/lib/cn'

type PaginationProps = PaginationItemVariants &
  Omit<ArkPagination.RootProps, 'className'> & {
    className?: string
  }

function PaginationPages({ size }: { size?: NonNullable<PaginationItemVariants>['size'] }) {
  return (
    <ArkPagination.Context>
      {(api) => (
        <>
          {api.pages.map((page, i) =>
            page.type === 'page' ? (
              <ArkPagination.Item key={i} type="page" value={page.value} className={paginationItem({ size })}>
                {page.value}
              </ArkPagination.Item>
            ) : (
              <ArkPagination.Ellipsis key={i} index={i} className={paginationEllipsis({ size })}>
                &#8230;
              </ArkPagination.Ellipsis>
            )
          )}
        </>
      )}
    </ArkPagination.Context>
  )
}

const PaginationRoot = forwardRef<HTMLElement, PaginationProps>(
  ({ size, className, ...rootProps }, ref) => {
    return (
      <ArkPagination.Root ref={ref} className={cn(paginationRoot, className)} {...rootProps}>
        <ArkPagination.PrevTrigger className={paginationItem({ size })}>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </ArkPagination.PrevTrigger>

        <PaginationPages size={size} />

        <ArkPagination.NextTrigger className={paginationItem({ size })}>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </ArkPagination.NextTrigger>
      </ArkPagination.Root>
    )
  }
)
PaginationRoot.displayName = 'Pagination'

export const Pagination = PaginationRoot
