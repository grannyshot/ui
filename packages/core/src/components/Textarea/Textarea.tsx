import React, { forwardRef } from 'react'
import { textarea, type TextareaVariants } from './textarea.recipe'
import { cx } from '@/styled-system/css'

type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> &
  TextareaVariants

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size, state, resize, className, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cx(textarea({ size, state, resize }), className)}
        {...rest}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
