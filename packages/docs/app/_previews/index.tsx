'use client'

import type { FC } from 'react'

import { AccordionPreview } from './accordion'
import { AvatarPreview } from './avatar'
import { BadgePreview } from './badge'
import { ButtonPreview } from './button'
import { CardPreview } from './card'
import { CheckboxPreview } from './checkbox'
import { ComboboxPreview } from './combobox'
import { DatePickerPreview } from './date-picker'
import { DialogPreview } from './dialog'
import { DrawerPreview } from './drawer'
import { FieldPreview } from './field'
import { InputPreview } from './input'
import { LabelPreview } from './label'
import { MenuPreview } from './menu'
import { PopoverPreview } from './popover'
import { ProgressPreview } from './progress'
import { SelectPreview } from './select'
import { SeparatorPreview } from './separator'
import { SkeletonPreview } from './skeleton'
import { SliderPreview } from './slider'
import { SwitchPreview } from './switch'
import { TablePreview } from './table'
import { TabsPreview } from './tabs'
import { TextareaPreview } from './textarea'
import { ToastPreview } from './toast'
import { TooltipPreview } from './tooltip'

export const previews: Record<string, FC> = {
  accordion: AccordionPreview,
  avatar: AvatarPreview,
  badge: BadgePreview,
  button: ButtonPreview,
  'button-variants': () => <ButtonPreview section="variants" />,
  'button-sizes': () => <ButtonPreview section="sizes" />,
  'button-disabled': () => <ButtonPreview section="disabled" />,
  card: CardPreview,
  checkbox: CheckboxPreview,
  combobox: ComboboxPreview,
  'date-picker': DatePickerPreview,
  dialog: DialogPreview,
  drawer: DrawerPreview,
  field: FieldPreview,
  input: InputPreview,
  label: LabelPreview,
  menu: MenuPreview,
  popover: PopoverPreview,
  progress: ProgressPreview,
  select: SelectPreview,
  separator: SeparatorPreview,
  skeleton: SkeletonPreview,
  slider: SliderPreview,
  switch: SwitchPreview,
  table: TablePreview,
  tabs: TabsPreview,
  textarea: TextareaPreview,
  toast: ToastPreview,
  tooltip: TooltipPreview,
}
