import React, { forwardRef } from 'react'
import { alert, alertIcon, alertTitle, alertDescription, type AlertVariants } from './alert.recipe'
import { cx } from '@/styled-system/css'

const icons: Record<string, React.ReactNode> = {
  info: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  success: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  ),
  warning: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  error: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
}

type AlertProps = AlertVariants &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
    title?: React.ReactNode
    icon?: React.ReactNode | false
    className?: string
  }

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, icon, className, children, ...props }, ref) => {
    const resolvedIcon = icon === false ? null : (icon ?? icons[variant ?? 'info'])

    return (
      <div ref={ref} role="alert" className={cx(alert({ variant }), className)} {...props}>
        {resolvedIcon && <span className={alertIcon({ variant })}>{resolvedIcon}</span>}
        <div>
          {title && <div className={alertTitle}>{title}</div>}
          {children && <div className={alertDescription}>{children}</div>}
        </div>
      </div>
    )
  }
)

Alert.displayName = 'Alert'
