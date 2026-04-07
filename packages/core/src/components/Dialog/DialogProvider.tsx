import { type ReactNode, useSyncExternalStore } from 'react'
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import { cn } from '@/lib/cn'
import {
  dialogOverlay,
  dialogContent,
  dialogPositioner,
  dialogTitle,
  dialogDescription,
  type DialogContentVariants,
} from './dialog.recipe'
import { button } from '../Button/button.recipe'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type DialogOptions = {
  title: string
  description: string
  confirmText: string
  cancelText?: string
}

type DialogOpenOptions = {
  content: (close: () => void) => ReactNode
  size?: NonNullable<DialogContentVariants>['size']
}

type DialogStateBase = {
  open: boolean
  size: NonNullable<DialogContentVariants>['size']
}

type DialogStateConfirm = DialogStateBase & {
  mode: 'confirm'
  title: string
  description: string
  confirmText: string
  cancelText: string
  resolve: (value: boolean) => void
}

type DialogStateAlert = DialogStateBase & {
  mode: 'alert'
  title: string
  description: string
  confirmText: string
  resolve: (value: boolean) => void
}

type DialogStateCustom = DialogStateBase & {
  mode: 'custom'
  content: (close: () => void) => ReactNode
}

type DialogState = DialogStateConfirm | DialogStateAlert | DialogStateCustom

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

let state: DialogState | null = null
const listeners = new Set<() => void>()

function getSnapshot(): DialogState | null {
  return state
}

function getServerSnapshot(): DialogState | null {
  return null
}

function setState(newState: DialogState | null) {
  state = newState
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

// ---------------------------------------------------------------------------
// Imperative API
// ---------------------------------------------------------------------------

export const dialog = {
  confirm(options: DialogOptions): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      setState({
        open: true,
        size: 'sm',
        title: options.title,
        description: options.description,
        confirmText: options.confirmText,
        cancelText: options.cancelText ?? '취소',
        mode: 'confirm',
        resolve,
      })
    })
  },

  alert(options: Omit<DialogOptions, 'cancelText'>): Promise<void> {
    return new Promise<void>((resolve) => {
      setState({
        open: true,
        size: 'sm',
        title: options.title,
        description: options.description,
        confirmText: options.confirmText,
        mode: 'alert',
        resolve: () => resolve(),
      })
    })
  },

  open(options: DialogOpenOptions) {
    setState({
      open: true,
      size: options.size ?? 'md',
      mode: 'custom',
      content: options.content,
    })
  },

  close() {
    setState(null)
  },
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const footerStyle = 'flex justify-end gap-2 mt-2'

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function DialogProvider() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const handleClose = (confirmed: boolean) => {
    if (!current) return
    if (current.mode !== 'custom') {
      current.resolve(confirmed)
    }
    setState(null)
  }

  const close = () => handleClose(false)

  return (
    <ArkDialog.Root
      open={current?.open ?? false}
      onOpenChange={({ open }) => {
        if (!open) handleClose(false)
      }}
      lazyMount
      unmountOnExit
    >
      <Portal>
        <ArkDialog.Backdrop className={dialogOverlay} />
        <ArkDialog.Positioner className={dialogPositioner}>
          <ArkDialog.Content className={dialogContent({ size: current?.size })}>
            {current?.mode === 'custom' && current.content(close)}
            {current && current.mode !== 'custom' && (
              <>
                <ArkDialog.Title className={dialogTitle}>
                  {current.title}
                </ArkDialog.Title>
                <ArkDialog.Description className={dialogDescription}>
                  {current.description}
                </ArkDialog.Description>
                <div className={footerStyle}>
                  {current.mode === 'confirm' && (
                    <button
                      type="button"
                      className={button({ variant: 'secondary', size: 'sm' })}
                      onClick={() => handleClose(false)}
                    >
                      {current.cancelText}
                    </button>
                  )}
                  <button
                    type="button"
                    className={button({ variant: 'primary', size: 'sm' })}
                    onClick={() => handleClose(true)}
                  >
                    {current.confirmText}
                  </button>
                </div>
              </>
            )}
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </Portal>
    </ArkDialog.Root>
  )
}

DialogProvider.displayName = 'DialogProvider'
