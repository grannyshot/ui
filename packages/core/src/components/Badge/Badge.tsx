import React, { forwardRef } from 'react'
import { badge, type BadgeVariants } from './badge.recipe'
import { cx } from '@/styled-system/css'

type BadgeProps = BadgeVariants & {
  children: React.ReactNode
  className?: string
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, size, children, className }, ref) => {
    return (
      <span ref={ref} className={cx(badge({ variant, size }), className)}>
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'