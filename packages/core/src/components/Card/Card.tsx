import React, { forwardRef } from 'react'
import { card, type CardVariants } from './card.recipe'
import { cx } from '../../styled-system/css'

type CardProps = CardVariants &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
  }

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ padding, hoverable, children, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx(card({ padding, hoverable }), className)} {...rest}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'