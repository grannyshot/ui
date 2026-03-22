import React, { forwardRef, type ReactNode } from 'react'
import { Toast as ArkToast, Toaster as ArkToaster, createToaster, type CreateToasterReturn } from '@ark-ui/react/toast'
import type { ToasterProps as ArkToasterProps, ToastOptions } from '@ark-ui/react/toast'
import {
  toastRoot,
  toastTitle,
  toastDescription,
  toastCloseTrigger,
  toastGroup,
} from './toast.recipe'
import { cx } from '@/styled-system/css'

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

export const toaster: CreateToasterReturn = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
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
    return toaster.create({ ...options, type })
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
    return toaster.promise(promise, {
      loading: normalizeMessage(msgs.loading),
      success: normalizePromiseOption<T>(msgs.success),
      error: normalizePromiseOption<unknown>(msgs.error),
    })
  },

  custom(renderFn: CustomRenderFn): string {
    return toaster.create({
      type: 'info',
      meta: { render: renderFn },
    })
  },

  dismiss(id?: string) {
    toaster.dismiss(id)
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
  className?: string
}

export const ToastProvider = forwardRef<HTMLDivElement, ToastProviderProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkToaster ref={ref} toaster={toaster} className={cx(toastGroup, className)} {...props}>
        {(toastData) => {
          if (hasCustomRender(toastData.meta)) {
            const dismissFn = () => toaster.dismiss(toastData.id)
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
                <svg
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