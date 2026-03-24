import React, { forwardRef } from 'react'
import { TagsInput as ArkTagsInput } from '@ark-ui/react/tags-input'
import {
  tagsInputRoot, tagsInputLabel, tagsInputControl, tagsInputItem,
  tagsInputItemText, tagsInputItemDeleteTrigger, tagsInputInput,
  type TagsInputControlVariants,
} from './tags-input.recipe'
import { cn } from '@/lib/cn'

type TagsInputProps = TagsInputControlVariants &
  Omit<ArkTagsInput.RootProps, 'className'> & {
    label?: string
    placeholder?: string
    className?: string
  }

export const TagsInput = forwardRef<HTMLDivElement, TagsInputProps>(
  ({ size, label, placeholder = 'Add tag...', className, ...rootProps }, ref) => {
    return (
      <ArkTagsInput.Root ref={ref} className={cn(tagsInputRoot, className)} {...rootProps}>
        {label && <ArkTagsInput.Label className={tagsInputLabel}>{label}</ArkTagsInput.Label>}
        <ArkTagsInput.Control className={tagsInputControl({ size })}>
          <ArkTagsInput.Context>
            {({ value }) =>
              value.map((v, i) => (
                <ArkTagsInput.Item key={i} index={i} value={v} className={tagsInputItem}>
                  <ArkTagsInput.ItemText className={tagsInputItemText}>{v}</ArkTagsInput.ItemText>
                  <ArkTagsInput.ItemDeleteTrigger className={tagsInputItemDeleteTrigger}>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </ArkTagsInput.ItemDeleteTrigger>
                  <ArkTagsInput.ItemInput />
                </ArkTagsInput.Item>
              ))
            }
          </ArkTagsInput.Context>
          <ArkTagsInput.Input placeholder={placeholder} className={tagsInputInput({ size })} />
        </ArkTagsInput.Control>
        <ArkTagsInput.HiddenInput />
      </ArkTagsInput.Root>
    )
  }
)

TagsInput.displayName = 'TagsInput'
