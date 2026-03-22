import React, { forwardRef } from 'react'
import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip'
import { tooltipTrigger, tooltipContent, tooltipArrow } from './tooltip.recipe'
import { cx } from '@/styled-system/css'

type TooltipProps = Omit<ArkTooltip.RootProps, 'className'> & {
  content: string
  children: React.ReactElement
  openDelay?: number
  closeDelay?: number
  className?: string
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, openDelay = 300, closeDelay = 0, className, ...rootProps }, ref) => {
    return (
      <ArkTooltip.Root openDelay={openDelay} closeDelay={closeDelay} lazyMount unmountOnExit {...rootProps}>
        <ArkTooltip.Trigger asChild className={tooltipTrigger}>
          {children}
        </ArkTooltip.Trigger>
        <ArkTooltip.Positioner>
          <ArkTooltip.Content ref={ref} className={cx(tooltipContent, className)}>
            <ArkTooltip.Arrow className={tooltipArrow}>
              <ArkTooltip.ArrowTip />
            </ArkTooltip.Arrow>
            {content}
          </ArkTooltip.Content>
        </ArkTooltip.Positioner>
      </ArkTooltip.Root>
    )
  }
)

Tooltip.displayName = 'Tooltip'