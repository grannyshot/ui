import { tv } from 'tailwind-variants'

export const drawerOverlay =
  'fixed inset-0 bg-gs-overlay z-[1300] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out'

export const drawerPositioner =
  'fixed inset-0 z-[1400] flex'

export const drawerContent = tv({
  base: 'bg-gs-bg-subtle shadow-xl h-full overflow-auto relative flex flex-col transition-transform duration-300 ease-in-out',

  variants: {
    placement: {
      right:
        'ml-auto w-full max-w-xs border-l border-gs-border data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full',
      left:
        'mr-auto w-full max-w-xs border-r border-gs-border data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full',
    },
  },

  defaultVariants: {
    placement: 'right',
  },
})

export const drawerTitle =
  'text-lg font-semibold text-gs-fg'

export const drawerDescription =
  'text-sm text-gs-fg-muted'

export const drawerCloseTrigger =
  'absolute top-3 right-3 inline-flex items-center justify-center w-[28px] h-[28px] rounded-sm text-gs-fg-muted cursor-pointer transition-[background,color] duration-150 ease-in-out hover:bg-gs-bg-muted hover:text-gs-fg'

export const drawerHeader =
  'p-6 border-b border-gs-border'

export const drawerBody =
  'p-6 flex-1 overflow-y-auto'

export const drawerFooter =
  'p-6 border-t border-gs-border flex justify-end gap-2'

export type DrawerContentVariants = Parameters<typeof drawerContent>[0]
