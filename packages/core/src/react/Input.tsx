import React, { forwardRef, useId } from 'react'
import { input, inputLabel, inputHint, inputError, type InputVariants } from '../styles/input.css'
import { cn } from '../utils/cn'

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  hint?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, label, hint, error, className, id: idProp, ...rest }, ref) => {
    const autoId = useId()
    const id = idProp ?? autoId
    const hintId = `${id}-hint`
    const errorId = `${id}-error`
    const state = error ? 'error' : 'default'

    const describedBy = [
      error ? errorId : undefined,
      !error && hint ? hintId : undefined,
    ]
      .filter(Boolean)
      .join(' ') || undefined

    return (
      <div>
        {label && (
          <label htmlFor={id} className={inputLabel}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(input({ size, state }), className)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...rest}
        />
        {error && (
          <p id={errorId} className={inputError} role="alert">
            {error}
          </p>
        )}
        {!error && hint && (
          <p id={hintId} className={inputHint}>
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
