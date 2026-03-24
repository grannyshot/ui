import React, { forwardRef } from 'react'
import { breadcrumbRoot, breadcrumbList, breadcrumbItem, breadcrumbLink, breadcrumbSeparator } from './breadcrumb.recipe'
import { cn } from '@/lib/cn'

type BreadcrumbRootProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
}

const BreadcrumbRoot = forwardRef<HTMLElement, BreadcrumbRootProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn(breadcrumbRoot, className)} {...props}>
        <ol className={breadcrumbList}>{children}</ol>
      </nav>
    )
  }
)
BreadcrumbRoot.displayName = 'Breadcrumb.Root'

type BreadcrumbItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  className?: string
}

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li ref={ref} className={cn(breadcrumbItem, className)} {...props}>
        {children}
      </li>
    )
  }
)
BreadcrumbItem.displayName = 'Breadcrumb.Item'

type BreadcrumbLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  current?: boolean
  className?: string
}

const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ current, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        aria-current={current ? 'page' : undefined}
        className={cn(breadcrumbLink, className)}
        {...props}
      />
    )
  }
)
BreadcrumbLink.displayName = 'Breadcrumb.Link'

type BreadcrumbSeparatorProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string
}

const BreadcrumbSeparator = forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span ref={ref} role="presentation" className={cn(breadcrumbSeparator, className)} {...props}>
        {children ?? '/'}
      </span>
    )
  }
)
BreadcrumbSeparator.displayName = 'Breadcrumb.Separator'

export const Breadcrumb = {
  Root: BreadcrumbRoot,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Separator: BreadcrumbSeparator,
}
