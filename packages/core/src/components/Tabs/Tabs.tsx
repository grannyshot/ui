import React, { createContext, forwardRef, useContext } from 'react'
import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import {
  tabsRoot,
  tabsList,
  tabsTrigger,
  tabsContent,
  tabsIndicator,
  type TabsListVariants,
} from './tabs.recipe'
import { cn } from '@/lib/cn'

type TabsVariant = NonNullable<TabsListVariants>['variant']

const TabsVariantContext = createContext<TabsVariant>('line')

type TabsRootProps = Omit<ArkTabs.RootProps, 'className'> & {
  variant?: TabsVariant
  className?: string
}

const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  ({ variant = 'line', className, children, ...props }, ref) => {
    return (
      <TabsVariantContext.Provider value={variant}>
        <ArkTabs.Root ref={ref} lazyMount unmountOnExit className={cn(tabsRoot, className)} {...props}>
          {children}
        </ArkTabs.Root>
      </TabsVariantContext.Provider>
    )
  }
)

TabsRoot.displayName = 'Tabs.Root'

type TabsListProps = Omit<ArkTabs.ListProps, 'className'> & {
  className?: string
}

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    const variant = useContext(TabsVariantContext)
    return (
      <ArkTabs.List
        ref={ref}
        className={cn(tabsList({ variant }), className)}
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
    const variant = useContext(TabsVariantContext)
    return (
      <ArkTabs.Trigger
        ref={ref}
        className={cn(tabsTrigger({ variant }), className)}
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
        className={cn(tabsContent, className)}
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
        className={cn(tabsIndicator, className)}
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
