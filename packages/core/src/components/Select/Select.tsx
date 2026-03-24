import React, { forwardRef } from 'react'
import { Select as ArkSelect } from '@ark-ui/react/select'
import type { CollectionItem } from '@ark-ui/react/select'
import { Portal } from '@ark-ui/react/portal'
import {
  selectTrigger,
  selectContent,
  selectItem,
  selectIndicator,
  selectItemIndicator,
  selectLabel,
  type SelectTriggerVariants,
} from './select.recipe'

export { createListCollection } from '@ark-ui/react/select'

type SelectProps = SelectTriggerVariants &
  Omit<ArkSelect.RootProps<CollectionItem>, 'className'> & {
    label?: string
    placeholder?: string
    className?: string
  }

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ size, label, placeholder = 'Select...', className, collection, ...rootProps }, ref) => {
    return (
      <ArkSelect.Root ref={ref} collection={collection} closeOnSelect lazyMount unmountOnExit {...rootProps} className={className}>
        {label && <ArkSelect.Label className={selectLabel}>{label}</ArkSelect.Label>}
        <ArkSelect.Control>
          <ArkSelect.Trigger className={selectTrigger({ size })}>
            <ArkSelect.ValueText placeholder={placeholder} />
            <ArkSelect.Indicator className={selectIndicator}>
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
            </ArkSelect.Indicator>
          </ArkSelect.Trigger>
        </ArkSelect.Control>
        <Portal disabled>
          <ArkSelect.Positioner>
            <ArkSelect.Content className={selectContent}>
              {collection.items.map((item: CollectionItem) => (
                <ArkSelect.Item key={item.value} item={item} className={selectItem}>
                  <ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
                  <ArkSelect.ItemIndicator className={selectItemIndicator}>
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
                  </ArkSelect.ItemIndicator>
                </ArkSelect.Item>
              ))}
            </ArkSelect.Content>
          </ArkSelect.Positioner>
        </Portal>
        <ArkSelect.HiddenSelect />
      </ArkSelect.Root>
    )
  }
)

Select.displayName = 'Select'
