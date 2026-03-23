import React, { forwardRef } from 'react'
import { Steps as ArkSteps } from '@ark-ui/react/steps'
import {
  stepsRoot, stepsList, stepsItem, stepsTrigger,
  stepsIndicator, stepsSeparator, stepsContent,
  type StepsIndicatorVariants,
} from './steps.recipe'
import { cx } from '@/styled-system/css'

type StepsRootProps = StepsIndicatorVariants &
  Omit<ArkSteps.RootProps, 'className'> & {
    className?: string
  }

const StepsRoot = forwardRef<HTMLDivElement, StepsRootProps>(
  ({ size, className, ...props }, ref) => (
    <ArkSteps.Root ref={ref} className={cx(stepsRoot, className)} {...props} />
  )
)
StepsRoot.displayName = 'Steps.Root'

const StepsList = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, ...props }, ref) => (
    <ArkSteps.List ref={ref} className={cx(stepsList, className)} {...props} />
  )
)
StepsList.displayName = 'Steps.List'

type StepsItemProps = StepsIndicatorVariants & Omit<ArkSteps.ItemProps, 'className'> & {
  title?: string
  className?: string
}

const StepsItem = forwardRef<HTMLDivElement, StepsItemProps>(
  ({ size, title, className, index, ...props }, ref) => (
    <ArkSteps.Item ref={ref} index={index} className={cx(stepsItem, className)} {...props}>
      <ArkSteps.Trigger className={stepsTrigger}>
        <ArkSteps.Indicator className={stepsIndicator({ size })}>
          {index + 1}
        </ArkSteps.Indicator>
        {title}
      </ArkSteps.Trigger>
      <ArkSteps.Separator className={stepsSeparator} />
    </ArkSteps.Item>
  )
)
StepsItem.displayName = 'Steps.Item'

const StepsContent = forwardRef<HTMLDivElement, ArkSteps.ContentProps & { className?: string }>(
  ({ className, ...props }, ref) => (
    <ArkSteps.Content ref={ref} className={cx(stepsContent, className)} {...props} />
  )
)
StepsContent.displayName = 'Steps.Content'

const StepsCompletedContent = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, ...props }, ref) => (
    <ArkSteps.CompletedContent ref={ref} className={cx(stepsContent, className)} {...props} />
  )
)
StepsCompletedContent.displayName = 'Steps.CompletedContent'

export const Steps = {
  Root: StepsRoot,
  List: StepsList,
  Item: StepsItem,
  Content: StepsContent,
  CompletedContent: StepsCompletedContent,
}
