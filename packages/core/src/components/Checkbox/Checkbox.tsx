import React, { forwardRef } from 'react'
import { Checkbox as ArkCheckbox } from '@ark-ui/react/checkbox'
import { checkboxRoot, checkboxControl, checkboxLabel, type CheckboxControlVariants } from './checkbox.recipe'
import { cx } from '@/styled-system/css'

type CheckboxProps = CheckboxControlVariants &
  Omit<ArkCheckbox.RootProps, 'className'> & {
    label?: string
    className?: string
  }

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ size, label, className, ...rootProps }, ref) => {
    return (
      <ArkCheckbox.Root ref={ref} className={cx(checkboxRoot, className)} {...rootProps}>
        <ArkCheckbox.Control className={checkboxControl({ size })}>
          <ArkCheckbox.Indicator>
            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ArkCheckbox.Indicator>
          <ArkCheckbox.Indicator indeterminate>
            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.91675 7H11.0834"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ArkCheckbox.Indicator>
        </ArkCheckbox.Control>
        {label && <ArkCheckbox.Label className={checkboxLabel}>{label}</ArkCheckbox.Label>}
        <ArkCheckbox.HiddenInput />
      </ArkCheckbox.Root>
    )
  }
)

Checkbox.displayName = 'Checkbox'
