import React, { forwardRef } from 'react'
import { label, type LabelVariants } from './label.recipe'
import { cn } from '@/lib/cn'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & LabelVariants

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required, disabled, className, ...rest }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(label({ required, disabled }), className)}
        {...rest}
      />
    )
  }
)

Label.displayName = 'Label'
