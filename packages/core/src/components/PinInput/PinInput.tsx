import React, { forwardRef } from 'react'
import { PinInput as ArkPinInput } from '@ark-ui/react/pin-input'
import { pinInputRoot, pinInputLabel, pinInputControl, pinInputInput, type PinInputVariants } from './pin-input.recipe'
import { cx } from '@/styled-system/css'

type PinInputProps = PinInputVariants &
  Omit<ArkPinInput.RootProps, 'className'> & {
    label?: string
    length?: number
    mask?: boolean
    className?: string
  }

export const PinInput = forwardRef<HTMLDivElement, PinInputProps>(
  ({ size, label, length = 4, mask, className, ...rootProps }, ref) => {
    return (
      <ArkPinInput.Root
        ref={ref}
        className={cx(pinInputRoot, className)}
        mask={mask}
        {...rootProps}
      >
        {label && <ArkPinInput.Label className={pinInputLabel}>{label}</ArkPinInput.Label>}
        <ArkPinInput.Control className={pinInputControl}>
          {Array.from({ length }, (_, i) => (
            <ArkPinInput.Input key={i} index={i} className={pinInputInput({ size })} />
          ))}
        </ArkPinInput.Control>
        <ArkPinInput.HiddenInput />
      </ArkPinInput.Root>
    )
  }
)

PinInput.displayName = 'PinInput'
