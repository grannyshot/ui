import React, { forwardRef } from 'react'
import { input, type InputVariants } from './input.recipe'
import { cx } from '../../styled-system/css'

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  InputVariants

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, state, className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={cx(input({ size, state }), className)}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input'