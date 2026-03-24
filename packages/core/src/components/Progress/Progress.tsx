import React, { forwardRef } from 'react'
import { Progress as ArkProgress } from '@ark-ui/react/progress'
import {
  progressRoot,
  progressHeader,
  progressLabel,
  progressTrack,
  progressRange,
  progressValueText,
  type ProgressTrackVariants,
} from './progress.recipe'
import { cn } from '@/lib/cn'

type ProgressProps = ProgressTrackVariants &
  Omit<ArkProgress.RootProps, 'className'> & {
    label?: string
    showValue?: boolean
    className?: string
  }

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ size, label, showValue, className, ...rootProps }, ref) => {
    return (
      <ArkProgress.Root ref={ref} className={cn(progressRoot, className)} {...rootProps}>
        {(label || showValue) && (
          <div className={progressHeader}>
            {label && <ArkProgress.Label className={progressLabel}>{label}</ArkProgress.Label>}
            {showValue && <ArkProgress.ValueText className={progressValueText} />}
          </div>
        )}
        <ArkProgress.Track className={progressTrack({ size })}>
          <ArkProgress.Range className={progressRange} />
        </ArkProgress.Track>
      </ArkProgress.Root>
    )
  }
)

Progress.displayName = 'Progress'
