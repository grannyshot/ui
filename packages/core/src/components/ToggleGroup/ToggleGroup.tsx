import React, { forwardRef } from 'react'
import { ToggleGroup as ArkToggleGroup } from '@ark-ui/react/toggle-group'
import { toggleGroupRoot, toggleGroupItem, type ToggleGroupRootVariants } from './toggle-group.recipe'
import { cn } from '@/lib/cn'

type ToggleGroupRootProps = ToggleGroupRootVariants &
  Omit<ArkToggleGroup.RootProps, 'className'> & {
    className?: string
  }

const ToggleGroupRoot = forwardRef<HTMLDivElement, ToggleGroupRootProps>(
  ({ size, className, children, ...rootProps }, ref) => {
    return (
      <ArkToggleGroup.Root ref={ref} className={cn(toggleGroupRoot({ size }), className)} {...rootProps}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<ToggleGroupItemProps>(child) && child.type === ToggleGroupItem) {
            return React.cloneElement(child, { size: child.props.size ?? size })
          }
          return child
        })}
      </ArkToggleGroup.Root>
    )
  }
)
ToggleGroupRoot.displayName = 'ToggleGroup.Root'

type ToggleGroupItemProps = ToggleGroupRootVariants & {
  value: string
  className?: string
  disabled?: boolean
  children?: React.ReactNode
}

const ToggleGroupItem = forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ size, value, className, ...props }, ref) => {
    return (
      <ArkToggleGroup.Item
        ref={ref}
        value={value}
        className={cn(toggleGroupItem({ size }), className)}
        {...props}
      />
    )
  }
)
ToggleGroupItem.displayName = 'ToggleGroup.Item'

export const ToggleGroup = {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
}
