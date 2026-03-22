import React, { forwardRef } from 'react'
import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
import {
  accordionRoot,
  accordionItem,
  accordionItemTrigger,
  accordionItemContent,
  accordionItemIndicator,
} from './accordion.recipe'
import { cx } from '@/styled-system/css'

type AccordionRootProps = Omit<ArkAccordion.RootProps, 'className'> & {
  className?: string
}

const AccordionRoot = forwardRef<HTMLDivElement, AccordionRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkAccordion.Root
        ref={ref}
        className={cx(accordionRoot, className)}
        {...props}
      />
    )
  }
)

AccordionRoot.displayName = 'Accordion.Root'

type AccordionItemProps = Omit<ArkAccordion.ItemProps, 'className'> & {
  className?: string
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkAccordion.Item
        ref={ref}
        className={cx(accordionItem, className)}
        {...props}
      />
    )
  }
)

AccordionItem.displayName = 'Accordion.Item'

type AccordionItemTriggerProps = Omit<ArkAccordion.ItemTriggerProps, 'className'> & {
  className?: string
}

const AccordionItemTrigger = forwardRef<HTMLButtonElement, AccordionItemTriggerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ArkAccordion.ItemTrigger
        ref={ref}
        className={cx(accordionItemTrigger, className)}
        {...props}
      >
        {children}
        <ArkAccordion.ItemIndicator className={accordionItemIndicator}>
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
            <path d="M6 9l6 6 6-6" />
          </svg>
        </ArkAccordion.ItemIndicator>
      </ArkAccordion.ItemTrigger>
    )
  }
)

AccordionItemTrigger.displayName = 'Accordion.ItemTrigger'

type AccordionItemContentProps = Omit<ArkAccordion.ItemContentProps, 'className'> & {
  className?: string
}

const AccordionItemContent = forwardRef<HTMLDivElement, AccordionItemContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkAccordion.ItemContent
        ref={ref}
        className={cx(accordionItemContent, className)}
        {...props}
      />
    )
  }
)

AccordionItemContent.displayName = 'Accordion.ItemContent'

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemTrigger: AccordionItemTrigger,
  ItemContent: AccordionItemContent,
}