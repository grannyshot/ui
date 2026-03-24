import React, { forwardRef, useRef, type ReactNode } from 'react'
import { Toast as ArkToast, Toaster as ArkToaster, createToaster, type CreateToasterReturn } from '@ark-ui/react/toast'
import type { ToasterProps as ArkToasterProps, ToastOptions } from '@ark-ui/react/toast'
import {
  toastRoot,
  toastTitle,
  toastDescription,
  toastCloseTrigger,
  toastGroup,
} from './toast.recipe'
import { cn } from '@/lib/cn'

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info'

const variantMap: Record<string, ToastVariant> = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
}

function getVariant(type: string | undefined): ToastVariant {
  if (!type) return 'default'
  return variantMap[type] ?? 'default'
}

// ---------------------------------------------------------------------------
// Toaster instance — lazy init with placement
// ---------------------------------------------------------------------------

type ToastPlacement =
  | 'top-start' | 'top' | 'top-end'
  | 'bottom-start' | 'bottom' | 'bottom-end'

let _toaster: CreateToasterReturn | null = null
let _placement: ToastPlacement = 'bottom-end'

function getToaster(): CreateToasterReturn {
  if (!_toaster) {
    _toaster = createToaster({
      placement: _placement,
      overlap: true,
      gap: 14,
    })
  }
  return _toaster
}

function initToaster(placement: ToastPlacement): CreateToasterReturn {
  if (_toaster && _placement === placement) return _toaster
  _placement = placement
  _toaster = createToaster({
    placement,
    overlap: true,
    gap: 14,
  })
  return _toaster
}

/** @deprecated Use `toast` instead. Direct toaster access for advanced use cases. */
export const toaster: CreateToasterReturn = new Proxy({} as CreateToasterReturn, {
  get(_, prop) {
    return (getToaster() as any)[prop]
  },
})

// --- Toast convenience API ---

type ToastMessage = string | Omit<ToastOptions, 'type'>

type ToastPromiseMessages<T> = {
  loading: string | Omit<ToastOptions, 'type'>
  success: string | Omit<ToastOptions, 'type'> | ((data: T) => string | Omit<ToastOptions, 'type'>)
  error: string | Omit<ToastOptions, 'type'> | ((err: unknown) => string | Omit<ToastOptions, 'type'>)
}

type CustomRenderFn = (dismiss: () => void) => ReactNode

function normalizeMessage(msg: ToastMessage): Omit<ToastOptions, 'type'> {
  if (typeof msg === 'string') {
    return { title: msg }
  }
  return msg
}

function normalizePromiseOption<V>(
  option: string | Omit<ToastOptions, 'type'> | ((arg: V) => string | Omit<ToastOptions, 'type'>),
): Omit<ToastOptions, 'type'> | ((arg: V) => Omit<ToastOptions, 'type'>) {
  if (typeof option === 'string') {
    return { title: option }
  }
  if (typeof option === 'function') {
    return (arg: V) => {
      const result = option(arg)
      if (typeof result === 'string') {
        return { title: result }
      }
      return result
    }
  }
  return option
}

function createTypedToast(type: 'success' | 'error' | 'warning' | 'info') {
  return (msg: ToastMessage): string => {
    const options = normalizeMessage(msg)
    return getToaster().create({ ...options, type })
  }
}

export const toast = {
  success: createTypedToast('success'),
  error: createTypedToast('error'),
  warning: createTypedToast('warning'),
  info: createTypedToast('info'),

  promise<T>(
    promise: Promise<T> | (() => Promise<T>),
    msgs: ToastPromiseMessages<T>,
  ) {
    return getToaster().promise(promise, {
      loading: normalizeMessage(msgs.loading),
      success: normalizePromiseOption<T>(msgs.success),
      error: normalizePromiseOption<unknown>(msgs.error),
    })
  },

  custom(renderFn: CustomRenderFn): string {
    return getToaster().create({
      type: 'info',
      meta: { render: renderFn },
    })
  },

  dismiss(id?: string) {
    getToaster().dismiss(id)
  },
}

// --- ToastProvider ---

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hasCustomRender(
  meta: Record<string, any> | undefined,
): meta is Record<string, any> & { render: CustomRenderFn } {
  return meta != null && typeof meta.render === 'function'
}

type ToastProviderProps = Omit<ArkToasterProps, 'toaster' | 'children'> & {
  placement?: ToastPlacement
  className?: string
}

export const ToastProvider = forwardRef<HTMLDivElement, ToastProviderProps>(
  ({ placement = 'bottom-end', className, ...props }, ref) => {
    const toasterRef = useRef(initToaster(placement))

    return (
      <ArkToaster ref={ref} toaster={toasterRef.current} className={cn(toastGroup, className)} {...props}>
        {(toastData) => {
          if (hasCustomRender(toastData.meta)) {
            const dismissFn = () => toasterRef.current.dismiss(toastData.id)
            return (
              <ArkToast.Root className={toastRoot({ variant: 'default' })}>
                {toastData.meta.render(dismissFn)}
              </ArkToast.Root>
            )
          }

          return (
            <ArkToast.Root className={toastRoot({ variant: getVariant(toastData.type) })}>
              <div>
                {toastData.title && (
                  <ArkToast.Title className={toastTitle}>{toastData.title}</ArkToast.Title>
                )}
                {toastData.description && (
                  <ArkToast.Description className={toastDescription}>
                    {toastData.description}
                  </ArkToast.Description>
                )}
              </div>
              <ArkToast.CloseTrigger className={toastCloseTrigger}>
                <svg aria-hidden="true"
                  width="14"
                  height="14"
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
              </ArkToast.CloseTrigger>
            </ArkToast.Root>
          )
        }}
      </ArkToaster>
    )
  }
)

ToastProvider.displayName = 'ToastProvider'
