import React, { forwardRef } from 'react'
import { input, type InputVariants } from './input.recipe'
import { cn } from '@/lib/cn'

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  InputVariants

/**
 * A text input with size variants and validation states.
 *
 * @example
 * ```tsx
 * <Input placeholder="Email" size="md" />
 * <Input state="error" placeholder="Invalid" />
 * ```
 *
 * @param size - Input size: `'sm'` | `'md'` | `'lg'`
 * @param state - Validation state: `'default'` | `'error'` | `'success'`
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, state, className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(input({ size, state }), className)}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input'
