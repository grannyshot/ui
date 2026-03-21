import React, { forwardRef } from 'react'
import { button, type ButtonVariants } from '../styles/button.css'
import { cn } from '../utils/cn'

type ButtonProps = ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, fullWidth, children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(button({ variant, size, fullWidth }), className)}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
