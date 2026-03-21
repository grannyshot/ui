import React, { forwardRef } from 'react'
import { badge, type BadgeVariants } from '../styles/badge.css'
import { cn } from '../utils/cn'

type BadgeProps = BadgeVariants & {
  children: React.ReactNode
  className?: string
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, size, children, className }, ref) => {
    return (
      <span ref={ref} className={cn(badge({ variant, size }), className)}>
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
