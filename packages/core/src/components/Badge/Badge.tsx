import React, { forwardRef } from 'react'
import { badge, type BadgeVariants } from './badge.recipe'
import { cn } from '@/lib/cn'

type BadgeProps = BadgeVariants &
  React.HTMLAttributes<HTMLSpanElement> & {
    children: React.ReactNode
  }

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, size, children, className, ...rest }, ref) => {
    return (
      <span ref={ref} className={cn(badge({ variant, size }), className)} {...rest}>
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
