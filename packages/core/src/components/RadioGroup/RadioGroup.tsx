import React, { forwardRef } from 'react'
import { RadioGroup as ArkRadioGroup } from '@ark-ui/react/radio-group'
import {
  radioGroupRoot,
  radioGroupLabel,
  radioGroupItem,
  radioGroupItemControl,
  radioGroupIndicator,
  radioGroupItemText,
  type RadioGroupItemControlVariants,
} from './radio-group.recipe'
import { cx } from '@/styled-system/css'

type RadioGroupProps = RadioGroupItemControlVariants &
  Omit<ArkRadioGroup.RootProps, 'className'> & {
    label?: string
    className?: string
  }

const RadioGroupRoot = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ size, label, className, children, ...rootProps }, ref) => {
    return (
      <ArkRadioGroup.Root ref={ref} className={cx(radioGroupRoot, className)} {...rootProps}>
        {label && <ArkRadioGroup.Label className={radioGroupLabel}>{label}</ArkRadioGroup.Label>}
        {React.Children.map(children, (child) => {
          if (React.isValidElement<RadioGroupItemProps>(child) && child.type === RadioGroupItem) {
            return React.cloneElement(child, { size: child.props.size ?? size })
          }
          return child
        })}
      </ArkRadioGroup.Root>
    )
  }
)
RadioGroupRoot.displayName = 'RadioGroup.Root'

type RadioGroupItemProps = RadioGroupItemControlVariants & {
  value: string
  label?: string
  className?: string
  disabled?: boolean
}

const RadioGroupItem = forwardRef<HTMLLabelElement, RadioGroupItemProps>(
  ({ size, value, label, className, disabled, ...props }, ref) => {
    return (
      <ArkRadioGroup.Item
        ref={ref}
        value={value}
        disabled={disabled}
        className={cx(radioGroupItem, className)}
        {...props}
      >
        <ArkRadioGroup.ItemControl className={radioGroupItemControl({ size })}>
          <ArkRadioGroup.Indicator className={radioGroupIndicator({ size })} />
        </ArkRadioGroup.ItemControl>
        {label && <ArkRadioGroup.ItemText className={radioGroupItemText}>{label}</ArkRadioGroup.ItemText>}
        <ArkRadioGroup.ItemHiddenInput />
      </ArkRadioGroup.Item>
    )
  }
)
RadioGroupItem.displayName = 'RadioGroup.Item'

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
}
