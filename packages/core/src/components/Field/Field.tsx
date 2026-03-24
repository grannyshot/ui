import React, { forwardRef, useId } from 'react'
import { Label } from '@/components/Label/Label'
import { fieldRoot, fieldHint, fieldError } from './field.recipe'
import { cn } from '@/lib/cn'

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  hint?: string
  error?: string
  required?: boolean
  disabled?: boolean
  children: React.ReactNode
}

/**
 * Form field wrapper with label, hint, and error message.
 * Automatically associates label with child input via aria attributes.
 *
 * @example
 * ```tsx
 * <Field label="Email" required error="Invalid email">
 *   <Input type="email" />
 * </Field>
 * ```
 */
export const Field = forwardRef<HTMLDivElement, FieldProps>(
  ({ label, hint, error, required, disabled, children, className, id: idProp, ...rest }, ref) => {
    const autoId = useId()
    const id = idProp ?? autoId
    const errorId = `${id}-error`
    const hintId = `${id}-hint`

    const describedBy = [
      error ? errorId : undefined,
      !error && hint ? hintId : undefined,
    ].filter(Boolean).join(' ') || undefined

    return (
      <div ref={ref} className={cn(fieldRoot, className)} {...rest}>
        {label && (
          <Label htmlFor={id} required={required} disabled={disabled}>
            {label}
          </Label>
        )}
        {React.isValidElement(children) &&
          React.cloneElement(children as React.ReactElement<any>, {
            id,
            disabled,
            'aria-invalid': error ? true : undefined,
            'aria-describedby': describedBy,
          })
        }
        {error && (
          <p id={errorId} className={fieldError} role="alert">{error}</p>
        )}
        {!error && hint && (
          <p id={hintId} className={fieldHint}>{hint}</p>
        )}
      </div>
    )
  }
)
Field.displayName = 'Field'
