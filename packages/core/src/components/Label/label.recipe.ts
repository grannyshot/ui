import { tv } from 'tailwind-variants'

export const label = tv({
  base: 'block text-xs font-medium text-gs-fg cursor-default',
  variants: {
    required: {
      true: 'after:content-["_*"] after:text-gs-error',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
})

export type LabelVariants = Parameters<typeof label>[0]
