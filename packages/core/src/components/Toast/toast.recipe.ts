import { tv } from 'tailwind-variants'

export const toastRoot = tv({
  base: 'flex gap-3 items-start bg-gs-bg text-gs-fg border border-gs-border rounded-md shadow-lg p-4 border-l-[3px] min-w-[280px] max-w-[420px] opacity-[var(--opacity)] translate-x-[var(--x)] translate-y-[var(--y)] scale-[var(--scale,1)] h-[var(--height,auto)] z-[var(--z-index)] transition-[transform,opacity,height] duration-350 ease-[cubic-bezier(0.21,1.02,0.73,1)] will-change-[transform,opacity,height]',

  variants: {
    variant: {
      default: 'border-l-gs-border',
      success: 'border-l-gs-success',
      error: 'border-l-gs-error',
      warning: 'border-l-gs-warning',
      info: 'border-l-gs-info',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export const toastTitle =
  'text-sm font-semibold text-gs-fg'

export const toastDescription =
  'text-sm text-gs-fg-muted mt-1'

export const toastCloseTrigger =
  'inline-flex items-center justify-center shrink-0 w-[20px] h-[20px] rounded-sm text-gs-fg-subtle cursor-pointer border-none bg-transparent transition-[color,background] duration-150 ease-in-out ml-auto hover:text-gs-fg hover:bg-gs-bg-muted'

export const toastGroup =
  'outline-none'

export type ToastRootVariants = Parameters<typeof toastRoot>[0]
