import React, { forwardRef } from 'react'
import { Switch as ArkSwitch } from '@ark-ui/react/switch'
import { switchRoot, switchControl, switchThumb, switchLabel, type SwitchControlVariants } from './switch.recipe'
import { cn } from '@/lib/cn'

type SwitchProps = SwitchControlVariants &
  Omit<ArkSwitch.RootProps, 'className'> & {
    label?: string
    className?: string
  }

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  ({ size, label, className, ...rootProps }, ref) => {
    return (
      <ArkSwitch.Root ref={ref} className={cn(switchRoot, className)} {...rootProps}>
        <ArkSwitch.Control className={switchControl({ size })}>
          <ArkSwitch.Thumb className={switchThumb({ size })} />
        </ArkSwitch.Control>
        {label && <ArkSwitch.Label className={switchLabel}>{label}</ArkSwitch.Label>}
        <ArkSwitch.HiddenInput />
      </ArkSwitch.Root>
    )
  }
)

Switch.displayName = 'Switch'
