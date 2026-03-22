import React, { forwardRef } from 'react'
import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import {
  tabsRoot,
  tabsList,
  tabsTrigger,
  tabsContent,
  tabsIndicator,
  type TabsListVariants,
} from './tabs.recipe'
import { cx } from '@/styled-system/css'

type TabsRootProps = Omit<ArkTabs.RootProps, 'className'> & {
  className?: string
}

const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkTabs.Root ref={ref} lazyMount unmountOnExit className={cx(tabsRoot, className)} {...props} />
    )
  }
)

TabsRoot.displayName = 'Tabs.Root'

type TabsListProps = TabsListVariants &
  Omit<ArkTabs.ListProps, 'className'> & {
    className?: string
  }

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <ArkTabs.List
        ref={ref}
        className={cx(tabsList({ variant }), className)}
        {...props}
      />
    )
  }
)

TabsList.displayName = 'Tabs.List'

type TabsTriggerProps = Omit<ArkTabs.TriggerProps, 'className'> & {
  className?: string
}

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkTabs.Trigger
        ref={ref}
        className={cx(tabsTrigger, className)}
        {...props}
      />
    )
  }
)

TabsTrigger.displayName = 'Tabs.Trigger'

type TabsContentProps = Omit<ArkTabs.ContentProps, 'className'> & {
  className?: string
}

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkTabs.Content
        ref={ref}
        className={cx(tabsContent, className)}
        {...props}
      />
    )
  }
)

TabsContent.displayName = 'Tabs.Content'

type TabsIndicatorProps = Omit<ArkTabs.IndicatorProps, 'className'> & {
  className?: string
}

const TabsIndicator = forwardRef<HTMLDivElement, TabsIndicatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkTabs.Indicator
        ref={ref}
        className={cx(tabsIndicator, className)}
        {...props}
      />
    )
  }
)

TabsIndicator.displayName = 'Tabs.Indicator'

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
  Indicator: TabsIndicator,
}