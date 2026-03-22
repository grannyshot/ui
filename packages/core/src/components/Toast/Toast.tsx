import React, { forwardRef } from 'react'
import { Toast as ArkToast, Toaster as ArkToaster, createToaster, type CreateToasterReturn } from '@ark-ui/react/toast'
import type { ToasterProps as ArkToasterProps } from '@ark-ui/react/toast'
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

type ToastProviderProps = Omit<ArkToasterProps, 'toaster' | 'children'> & {
  className?: string
}

export const ToastProvider = forwardRef<HTMLDivElement, ToastProviderProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkToaster ref={ref} toaster={toaster} className={cx(toastGroup, className)} {...props}>
        {(toast) => (
          <ArkToast.Root className={toastRoot({ variant: getVariant(toast.type) })}>
            <div>
              {toast.title && <ArkToast.Title className={toastTitle}>{toast.title}</ArkToast.Title>}
              {toast.description && (
                <ArkToast.Description className={toastDescription}>
                  {toast.description}
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
        )}
      </ArkToaster>
    )
  }
)

ToastProvider.displayName = 'ToastProvider'