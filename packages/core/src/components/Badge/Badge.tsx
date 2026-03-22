import React, { forwardRef } from 'react'
import { badge, type BadgeVariants } from './badge.recipe'
import { cx } from '@/styled-system/css'

type BadgeProps = BadgeVariants &
  React.HTMLAttributes<HTMLSpanElement> & {
    children: React.ReactNode
  }

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, size, children, className, ...rest }, ref) => {
    return (
      <span ref={ref} className={cx(badge({ variant, size }), className)} {...rest}>
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'