import React, { forwardRef } from 'react'
import { emptyStateRoot, emptyStateIcon, emptyStateTitle, emptyStateDescription, emptyStateActions } from './empty-state.recipe'
import { cx } from '@/styled-system/css'

type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, description, actions, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cx(emptyStateRoot, className)} {...props}>
        {icon && <div className={emptyStateIcon}>{icon}</div>}
        {title && <div className={emptyStateTitle}>{title}</div>}
        {description && <div className={emptyStateDescription}>{description}</div>}
        {actions && <div className={emptyStateActions}>{actions}</div>}
        {children}
      </div>
    )
  }
)

EmptyState.displayName = 'EmptyState'
