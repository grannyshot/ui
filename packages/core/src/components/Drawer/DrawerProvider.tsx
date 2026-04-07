import React, { useSyncExternalStore } from 'react'
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import { cn } from '@/lib/cn'
import {
  drawerOverlay,
  drawerContent,
  drawerPositioner,
  drawerTitle,
  drawerDescription,
  drawerCloseTrigger,
  drawerHeader,
  drawerBody,
} from './drawer.recipe'

type DrawerPlacement = 'left' | 'right'

type DrawerOpenOptions = {
  title?: string
  description?: string
  content: React.ReactNode
  placement?: DrawerPlacement
}

type DrawerState = {
  open: boolean
  title?: string
  description?: string
  content: React.ReactNode
  placement: DrawerPlacement
}

// --- External Store ---

let state: DrawerState = {
  open: false,
  content: null,
  placement: 'right',
}

const listeners = new Set<() => void>()

function getSnapshot(): DrawerState {
  return state
}

function getServerSnapshot(): DrawerState {
  return { open: false, content: null, placement: 'right' }
}

function setState(newState: DrawerState) {
  state = newState
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

// --- Public API ---

export const drawer = {
  open(options: DrawerOpenOptions) {
    setState({
      open: true,
      title: options.title,
      description: options.description,
      content: options.content,
      placement: options.placement ?? 'right',
    })
  },

  close() {
    setState({
      ...state,
      open: false,
    })
  },
}

// --- Provider Component ---

export function DrawerProvider() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const handleOpenChange = (details: { open: boolean }) => {
    if (!details.open) {
      drawer.close()
    }
  }

  return (
    <ArkDialog.Root
      open={current.open}
      onOpenChange={handleOpenChange}
      lazyMount
      unmountOnExit
    >
      <Portal>
        <ArkDialog.Backdrop className={drawerOverlay} />
        <ArkDialog.Positioner className={drawerPositioner}>
          <ArkDialog.Content
            className={drawerContent({ placement: current.placement })}
          >
            {(current.title || current.description) && (
              <div className={drawerHeader}>
                {current.title && (
                  <ArkDialog.Title className={drawerTitle}>
                    {current.title}
                  </ArkDialog.Title>
                )}
                {current.description && (
                  <ArkDialog.Description className={drawerDescription}>
                    {current.description}
                  </ArkDialog.Description>
                )}
              </div>
            )}

            <ArkDialog.CloseTrigger className={cn(drawerCloseTrigger)}>
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
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </ArkDialog.CloseTrigger>

            <div className={drawerBody}>{current.content}</div>
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </Portal>
    </ArkDialog.Root>
  )
}

DrawerProvider.displayName = 'DrawerProvider'
