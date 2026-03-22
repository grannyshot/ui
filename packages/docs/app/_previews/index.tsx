'use client'

import type { FC } from 'react'

// Import all preview components
import { ButtonPreview } from './button'
import { BadgePreview } from './badge'
import { InputPreview } from './input'

export const previews: Record<string, FC> = {
  button: ButtonPreview,
  'button-variants': () => <ButtonPreview section="variants" />,
  'button-sizes': () => <ButtonPreview section="sizes" />,
  'button-disabled': () => <ButtonPreview section="disabled" />,
  badge: BadgePreview,
  input: InputPreview,
}
