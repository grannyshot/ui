import React, { forwardRef } from 'react'
import { button, type ButtonVariants } from './button.recipe'
import { cx } from '@/styled-system/css'

type ButtonProps = ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, fullWidth, children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cx(button({ variant, size, fullWidth }), className)}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'