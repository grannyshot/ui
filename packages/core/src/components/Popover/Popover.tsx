import React, { forwardRef } from 'react'
import { Popover as ArkPopover } from '@ark-ui/react/popover'
import { Portal } from '@ark-ui/react/portal'
import {
  popoverContent,
  popoverArrow,
  popoverArrowTip,
  popoverTitle,
  popoverDescription,
  popoverCloseTrigger,
} from './popover.recipe'
import { cn } from '@/lib/cn'

type PopoverRootProps = ArkPopover.RootProps

function PopoverRoot(props: PopoverRootProps) {
  return <ArkPopover.Root lazyMount unmountOnExit {...props} />
}
PopoverRoot.displayName = 'Popover.Root'

const PopoverTrigger = forwardRef<HTMLButtonElement, ArkPopover.TriggerProps>(
  ({ className, ...props }, ref) => {
    return <ArkPopover.Trigger ref={ref} className={className} {...props} />
  }
)
PopoverTrigger.displayName = 'Popover.Trigger'

const PopoverContent = forwardRef<HTMLDivElement, ArkPopover.ContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <Portal disabled>
        <ArkPopover.Positioner>
          <ArkPopover.Content
            ref={ref}
            className={cn(popoverContent, className)}
            {...props}
          />
        </ArkPopover.Positioner>
      </Portal>
    )
  }
)
PopoverContent.displayName = 'Popover.Content'

const PopoverArrow = forwardRef<HTMLDivElement, ArkPopover.ArrowProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkPopover.Arrow ref={ref} className={cn(popoverArrow, className)} {...props}>
        <ArkPopover.ArrowTip className={popoverArrowTip} />
      </ArkPopover.Arrow>
    )
  }
)
PopoverArrow.displayName = 'Popover.Arrow'

const PopoverTitle = forwardRef<HTMLDivElement, ArkPopover.TitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkPopover.Title
        ref={ref}
        className={cn(popoverTitle, className)}
        {...props}
      />
    )
  }
)
PopoverTitle.displayName = 'Popover.Title'

const PopoverDescription = forwardRef<HTMLDivElement, ArkPopover.DescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkPopover.Description
        ref={ref}
        className={cn(popoverDescription, className)}
        {...props}
      />
    )
  }
)
PopoverDescription.displayName = 'Popover.Description'

const PopoverCloseTrigger = forwardRef<HTMLButtonElement, ArkPopover.CloseTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ArkPopover.CloseTrigger
        ref={ref}
        className={cn(popoverCloseTrigger, className)}
        {...props}
      >
        {children ?? (
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
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        )}
      </ArkPopover.CloseTrigger>
    )
  }
)
PopoverCloseTrigger.displayName = 'Popover.CloseTrigger'

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Arrow: PopoverArrow,
  Title: PopoverTitle,
  Description: PopoverDescription,
  CloseTrigger: PopoverCloseTrigger,
}
