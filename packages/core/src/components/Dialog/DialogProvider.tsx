import { useSyncExternalStore } from 'react'
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import { cx, css } from '@/styled-system/css'
import {
  dialogOverlay,
  dialogContent,
  dialogPositioner,
  dialogTitle,
  dialogDescription,
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

type DialogState = {
  open: boolean
  title: string
  description: string
  confirmText: string
  cancelText?: string
  mode: 'confirm' | 'alert'
  resolve: (value: boolean) => void
}

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
        title: options.title,
        description: options.description,
        confirmText: options.confirmText,
        mode: 'alert',
        resolve: () => resolve(),
      })
    })
  },
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const footerStyle = css({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '2',
  mt: '2',
})

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function DialogProvider() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const handleClose = (confirmed: boolean) => {
    if (!current) return
    current.resolve(confirmed)
    setState(null)
  }

  return (
    <ArkDialog.Root
      open={current?.open ?? false}
      onOpenChange={({ open }) => {
        if (!open) handleClose(false)
      }}
      lazyMount
      unmountOnExit
    >
      <Portal disabled>
        <ArkDialog.Backdrop className={dialogOverlay} />
        <ArkDialog.Positioner className={dialogPositioner}>
          <ArkDialog.Content className={dialogContent({ size: 'sm' })}>
            {current && (
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
