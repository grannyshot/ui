'use client'

import type { FC } from 'react'

import { AccordionPreview } from './accordion'
import { AlertPreview } from './alert'
import { AvatarPreview } from './avatar'
import { BreadcrumbPreview } from './breadcrumb'
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
import { NumberInputPreview } from './number-input'
import { PopoverPreview } from './popover'
import { PaginationPreview } from './pagination'
import { PinInputPreview } from './pin-input'
import { ProgressPreview } from './progress'
import { RadioGroupPreview } from './radio-group'
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
  alert: AlertPreview,
  avatar: AvatarPreview,
  breadcrumb: BreadcrumbPreview,
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
  'number-input': NumberInputPreview,
  popover: PopoverPreview,
  pagination: PaginationPreview,
  'pin-input': PinInputPreview,
  progress: ProgressPreview,
  'radio-group': RadioGroupPreview,
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
