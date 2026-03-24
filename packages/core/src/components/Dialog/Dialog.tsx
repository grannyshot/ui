import React, { forwardRef } from 'react'
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import { cn } from '@/lib/cn'
import {
  dialogOverlay,
  dialogContent,
  dialogPositioner,
  dialogTitle,
  dialogDescription,
  dialogCloseTrigger,
  type DialogContentVariants,
} from './dialog.recipe'

type DialogRootProps = ArkDialog.RootProps

/**
 * Modal dialog with backdrop overlay. Use compound pattern.
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 *   <Dialog.Trigger asChild><Button>Open</Button></Dialog.Trigger>
 *   <Dialog.Content size="md">
 *     <Dialog.CloseTrigger />
 *     <Dialog.Title>Title</Dialog.Title>
 *     <Dialog.Description>Description</Dialog.Description>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const DialogRoot = (props: DialogRootProps) => {
  return <ArkDialog.Root lazyMount unmountOnExit {...props} />
}
DialogRoot.displayName = 'Dialog.Root'

type DialogContentProps = DialogContentVariants & {
  children: React.ReactNode
  className?: string
}

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ size, className, children, ...props }, ref) => {
    return (
      <Portal disabled>
        <ArkDialog.Backdrop className={dialogOverlay} />
        <ArkDialog.Positioner className={dialogPositioner}>
          <ArkDialog.Content
            ref={ref}
            className={cn(dialogContent({ size }), className)}
            {...props}
          >
            {children}
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </Portal>
    )
  }
)
DialogContent.displayName = 'Dialog.Content'

type DialogTitleProps = {
  children: React.ReactNode
  className?: string
}

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkDialog.Title
        ref={ref}
        className={cn(dialogTitle, className)}
        {...props}
      />
    )
  }
)
DialogTitle.displayName = 'Dialog.Title'

type DialogDescriptionProps = {
  children: React.ReactNode
  className?: string
}

const DialogDescription = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkDialog.Description
        ref={ref}
        className={cn(dialogDescription, className)}
        {...props}
      />
    )
  }
)
DialogDescription.displayName = 'Dialog.Description'

type DialogCloseTriggerProps = {
  children?: React.ReactNode
  className?: string
}

const DialogCloseTrigger = forwardRef<HTMLButtonElement, DialogCloseTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ArkDialog.CloseTrigger
        ref={ref}
        className={cn(dialogCloseTrigger, className)}
        {...props}
      >
        {children ?? (
          <svg aria-hidden="true"
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
DialogCloseTrigger.displayName = 'Dialog.CloseTrigger'

const DialogTrigger = ArkDialog.Trigger
DialogTrigger.displayName = 'Dialog.Trigger'

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  CloseTrigger: DialogCloseTrigger,
}
