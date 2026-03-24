import React, { forwardRef } from 'react'
import { separator, type SeparatorVariants } from './separator.recipe'
import { cn } from '@/lib/cn'

type SeparatorProps = SeparatorVariants &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
    className?: string
  }

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = 'horizontal', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(separator({ orientation }), className)}
        {...props}
      />
    )
  }
)

Separator.displayName = 'Separator'
