import React, { forwardRef } from 'react'
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import { cx } from '@/styled-system/css'
import {
  drawerOverlay,
  drawerContent,
  drawerPositioner,
  drawerTitle,
  drawerDescription,
  drawerCloseTrigger,
  drawerHeader,
  drawerBody,
  drawerFooter,
  type DrawerContentVariants,
} from './drawer.recipe'

type DrawerRootProps = ArkDialog.RootProps

const DrawerRoot = (props: DrawerRootProps) => {
  return <ArkDialog.Root lazyMount unmountOnExit {...props} />
}
DrawerRoot.displayName = 'Drawer.Root'

type DrawerContentProps = DrawerContentVariants & {
  children: React.ReactNode
  className?: string
}

const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ placement, className, children, ...props }, ref) => {
    return (
      <Portal disabled>
        <ArkDialog.Backdrop className={drawerOverlay} />
        <ArkDialog.Positioner className={drawerPositioner}>
          <ArkDialog.Content
            ref={ref}
            className={cx(drawerContent({ placement }), className)}
            {...props}
          >
            {children}
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </Portal>
    )
  }
)
DrawerContent.displayName = 'Drawer.Content'

type DrawerHeaderProps = {
  children: React.ReactNode
  className?: string
}

const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cx(drawerHeader, className)} {...props} />
  }
)
DrawerHeader.displayName = 'Drawer.Header'

type DrawerBodyProps = {
  children: React.ReactNode
  className?: string
}

const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cx(drawerBody, className)} {...props} />
  }
)
DrawerBody.displayName = 'Drawer.Body'

type DrawerFooterProps = {
  children: React.ReactNode
  className?: string
}

const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cx(drawerFooter, className)} {...props} />
  }
)
DrawerFooter.displayName = 'Drawer.Footer'

type DrawerTitleProps = {
  children: React.ReactNode
  className?: string
}

const DrawerTitle = forwardRef<HTMLHeadingElement, DrawerTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkDialog.Title
        ref={ref}
        className={cx(drawerTitle, className)}
        {...props}
      />
    )
  }
)
DrawerTitle.displayName = 'Drawer.Title'

type DrawerDescriptionProps = {
  children: React.ReactNode
  className?: string
}

const DrawerDescription = forwardRef<HTMLParagraphElement, DrawerDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkDialog.Description
        ref={ref}
        className={cx(drawerDescription, className)}
        {...props}
      />
    )
  }
)
DrawerDescription.displayName = 'Drawer.Description'

type DrawerCloseTriggerProps = {
  children?: React.ReactNode
  className?: string
}

const DrawerCloseTrigger = forwardRef<HTMLButtonElement, DrawerCloseTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ArkDialog.CloseTrigger
        ref={ref}
        className={cx(drawerCloseTrigger, className)}
        {...props}
      >
        {children ?? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        )}
      </ArkDialog.CloseTrigger>
    )
  }
)
DrawerCloseTrigger.displayName = 'Drawer.CloseTrigger'

const DrawerTrigger = ArkDialog.Trigger
DrawerTrigger.displayName = 'Drawer.Trigger'

export const Drawer = {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  Header: DrawerHeader,
  Body: DrawerBody,
  Footer: DrawerFooter,
  Title: DrawerTitle,
  Description: DrawerDescription,
  CloseTrigger: DrawerCloseTrigger,
}
