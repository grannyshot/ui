import React, { forwardRef } from 'react'
import { Slider as ArkSlider } from '@ark-ui/react/slider'
import {
  sliderRoot,
  sliderLabelGroup,
  sliderLabel,
  sliderControl,
  sliderTrack,
  sliderRange,
  sliderThumb,
  sliderValueText,
  type SliderTrackVariants,
} from './slider.recipe'
import { cn } from '@/lib/cn'

type SliderProps = SliderTrackVariants &
  Omit<ArkSlider.RootProps, 'className'> & {
    label?: string
    showValue?: boolean
    className?: string
  }

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  ({ size, label, showValue, className, ...rootProps }, ref) => {
    return (
      <ArkSlider.Root ref={ref} className={cn(sliderRoot, className)} {...rootProps}>
        {(label || showValue) && (
          <div className={sliderLabelGroup}>
            {label && <ArkSlider.Label className={sliderLabel}>{label}</ArkSlider.Label>}
            {showValue && <ArkSlider.ValueText className={sliderValueText} />}
          </div>
        )}
        <ArkSlider.Control className={sliderControl}>
          <ArkSlider.Track className={sliderTrack({ size })}>
            <ArkSlider.Range className={sliderRange} />
          </ArkSlider.Track>
          <ArkSlider.Thumb index={0} className={sliderThumb({ size })}>
            <ArkSlider.HiddenInput />
          </ArkSlider.Thumb>
        </ArkSlider.Control>
      </ArkSlider.Root>
    )
  }
)

Slider.displayName = 'Slider'
