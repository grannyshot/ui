import React, { forwardRef } from 'react'
import { card, type CardVariants } from '../styles/card.css'
import { cn } from '../utils/cn'

type CardProps = CardVariants &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
  }

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ padding, hoverable, children, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn(card({ padding, hoverable }), className)} {...rest}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
