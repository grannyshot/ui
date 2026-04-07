import React, { forwardRef } from 'react'
import { Combobox as ArkCombobox } from '@ark-ui/react/combobox'
import type { CollectionItem } from '@ark-ui/react/combobox'
import { Portal } from '@ark-ui/react/portal'
import {
  comboboxControl,
  comboboxInput,
  comboboxContent,
  comboboxItem,
  comboboxItemIndicator,
  comboboxTrigger,
  comboboxClearTrigger,
  type ComboboxInputVariants,
} from './combobox.recipe'

export { createListCollection } from '@ark-ui/react/combobox'

type ComboboxProps = ComboboxInputVariants &
  Omit<ArkCombobox.RootProps<CollectionItem>, 'className'> & {
    placeholder?: string
    className?: string
  }

export const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(
  ({ size, placeholder = 'Search...', className, collection, ...rootProps }, ref) => {
    return (
      <ArkCombobox.Root
        ref={ref}
        collection={collection}
        lazyMount
        unmountOnExit
        {...rootProps}
        className={className}
      >
        <ArkCombobox.Control className={comboboxControl}>
          <ArkCombobox.Input
            className={comboboxInput({ size })}
            placeholder={placeholder}
          />
          <ArkCombobox.ClearTrigger className={comboboxClearTrigger}>
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
          </ArkCombobox.ClearTrigger>
          <ArkCombobox.Trigger className={comboboxTrigger}>
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
          </ArkCombobox.Trigger>
        </ArkCombobox.Control>
        <Portal>
          <ArkCombobox.Positioner>
            <ArkCombobox.Content className={comboboxContent}>
              {collection.items.map((item: CollectionItem) => (
                <ArkCombobox.Item key={item.value} item={item} className={comboboxItem}>
                  <ArkCombobox.ItemText>{item.label}</ArkCombobox.ItemText>
                  <ArkCombobox.ItemIndicator className={comboboxItemIndicator}>
                    <svg aria-hidden="true"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </ArkCombobox.ItemIndicator>
                </ArkCombobox.Item>
              ))}
            </ArkCombobox.Content>
          </ArkCombobox.Positioner>
        </Portal>
      </ArkCombobox.Root>
    )
  }
)

Combobox.displayName = 'Combobox'
