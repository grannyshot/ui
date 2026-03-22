import React, { forwardRef } from 'react'
import { skeleton, type SkeletonVariants } from './skeleton.recipe'
import { cx } from '@/styled-system/css'

type SkeletonProps = SkeletonVariants &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
    width?: React.CSSProperties['width']
    height?: React.CSSProperties['height']
  }

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant, width, height, className, style, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(skeleton({ variant }), className)}
        style={{ width, height, ...style }}
        {...rest}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'