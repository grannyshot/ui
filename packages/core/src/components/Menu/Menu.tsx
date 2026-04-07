import React, { forwardRef } from 'react'
import { Menu as ArkMenu } from '@ark-ui/react/menu'
import { Portal } from '@ark-ui/react/portal'
import {
  menuContent,
  menuItem,
  menuSeparator,
  menuItemGroup,
  menuItemGroupLabel,
  menuTriggerItem,
} from './menu.recipe'
import { cn } from '@/lib/cn'

type MenuRootProps = ArkMenu.RootProps

function MenuRoot(props: MenuRootProps) {
  return <ArkMenu.Root lazyMount unmountOnExit {...props} />
}
MenuRoot.displayName = 'Menu.Root'

const MenuTrigger = forwardRef<HTMLButtonElement, ArkMenu.TriggerProps>(
  ({ className, ...props }, ref) => {
    return <ArkMenu.Trigger ref={ref} className={className} {...props} />
  }
)
MenuTrigger.displayName = 'Menu.Trigger'

const MenuContent = forwardRef<HTMLDivElement, ArkMenu.ContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <Portal>
        <ArkMenu.Positioner>
          <ArkMenu.Content
            ref={ref}
            className={cn(menuContent, className)}
            {...props}
          />
        </ArkMenu.Positioner>
      </Portal>
    )
  }
)
MenuContent.displayName = 'Menu.Content'

const MenuItem = forwardRef<HTMLDivElement, ArkMenu.ItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkMenu.Item
        ref={ref}
        className={cn(menuItem, className)}
        {...props}
      />
    )
  }
)
MenuItem.displayName = 'Menu.Item'

const MenuSeparator = forwardRef<HTMLHRElement, ArkMenu.SeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkMenu.Separator
        ref={ref}
        className={cn(menuSeparator, className)}
        {...props}
      />
    )
  }
)
MenuSeparator.displayName = 'Menu.Separator'

const MenuItemGroup = forwardRef<HTMLDivElement, ArkMenu.ItemGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkMenu.ItemGroup
        ref={ref}
        className={cn(menuItemGroup, className)}
        {...props}
      />
    )
  }
)
MenuItemGroup.displayName = 'Menu.ItemGroup'

const MenuItemGroupLabel = forwardRef<HTMLDivElement, ArkMenu.ItemGroupLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkMenu.ItemGroupLabel
        ref={ref}
        className={cn(menuItemGroupLabel, className)}
        {...props}
      />
    )
  }
)
MenuItemGroupLabel.displayName = 'Menu.ItemGroupLabel'

const MenuTriggerItem = forwardRef<HTMLDivElement, ArkMenu.TriggerItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ArkMenu.TriggerItem
        ref={ref}
        className={cn(menuTriggerItem, className)}
        {...props}
      >
        {children}
        <svg aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </ArkMenu.TriggerItem>
    )
  }
)
MenuTriggerItem.displayName = 'Menu.TriggerItem'

export const Menu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Content: MenuContent,
  Item: MenuItem,
  Separator: MenuSeparator,
  ItemGroup: MenuItemGroup,
  ItemGroupLabel: MenuItemGroupLabel,
  TriggerItem: MenuTriggerItem,
}
