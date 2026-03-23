import React, { forwardRef } from 'react'
import { button, type ButtonVariants } from './button.recipe'
import { cx } from '@/styled-system/css'

type ButtonProps = ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
  }

/**
 * A clickable button with multiple visual styles and sizes.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" disabled>Disabled</Button>
 * ```
 *
 * @param variant - Visual style: `'primary'` | `'secondary'` | `'outline'` | `'ghost'` | `'danger'`
 * @param size - Button size: `'sm'` | `'md'` | `'lg'`
 * @param fullWidth - Whether the button spans full width
 */
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