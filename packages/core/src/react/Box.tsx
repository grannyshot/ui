import React, { forwardRef } from 'react'
import { sprinkles, type Sprinkles } from '../styles/sprinkles.css'
import { cn } from '../utils/cn'

type BoxProps = Sprinkles & {
  as?: React.ElementType
  children?: React.ReactNode
  className?: string
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = 'div', className, children, ...rest }, ref) => {
    const sprinklesClass = sprinkles(rest as Sprinkles)

    return (
      <Component ref={ref} className={cn(sprinklesClass, className)}>
        {children}
      </Component>
    )
  }
)

Box.displayName = 'Box'
