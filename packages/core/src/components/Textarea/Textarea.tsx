import React, { forwardRef } from 'react'
import { textarea, type TextareaVariants } from './textarea.recipe'
import { cn } from '@/lib/cn'

type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> &
  TextareaVariants

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size, state, resize, className, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textarea({ size, state, resize }), className)}
        {...rest}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
