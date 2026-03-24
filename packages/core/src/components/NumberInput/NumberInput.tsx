import React, { forwardRef } from 'react'
import { NumberInput as ArkNumberInput } from '@ark-ui/react/number-input'
import {
  numberInputRoot,
  numberInputLabel,
  numberInputControl,
  numberInputInput,
  numberInputTrigger,
  numberInputIncrementTrigger,
  numberInputDecrementTrigger,
  type NumberInputVariants,
} from './number-input.recipe'
import { cn } from '@/lib/cn'

type NumberInputProps = NumberInputVariants &
  Omit<ArkNumberInput.RootProps, 'className'> & {
    label?: string
    className?: string
  }

export const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>(
  ({ size, label, className, ...rootProps }, ref) => {
    return (
      <ArkNumberInput.Root ref={ref} className={cn(numberInputRoot, className)} {...rootProps}>
        {label && <ArkNumberInput.Label className={numberInputLabel}>{label}</ArkNumberInput.Label>}
        <ArkNumberInput.Control className={numberInputControl}>
          <ArkNumberInput.Input className={numberInputInput({ size })} />
          <ArkNumberInput.IncrementTrigger className={cn(numberInputTrigger, numberInputIncrementTrigger)}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </ArkNumberInput.IncrementTrigger>
          <ArkNumberInput.DecrementTrigger className={cn(numberInputTrigger, numberInputDecrementTrigger)}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </ArkNumberInput.DecrementTrigger>
        </ArkNumberInput.Control>
      </ArkNumberInput.Root>
    )
  }
)

NumberInput.displayName = 'NumberInput'
