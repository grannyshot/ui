import React, { forwardRef, useState } from 'react'
import { avatar, avatarImage, type AvatarVariants } from './avatar.recipe'
import { cx } from '@/styled-system/css'

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/)
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase()
  }
  return words[0][0].toUpperCase()
}

type AvatarProps = AvatarVariants &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
    src?: string
    alt?: string
    name?: string
  }

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, name, size, className, ...rest }, ref) => {
    const [imageError, setImageError] = useState(false)

    const showImage = src && !imageError
    const initials = name ? getInitials(name) : null

    return (
      <div ref={ref} className={cx(avatar({ size }), className)} {...rest}>
        {showImage ? (
          <img
            src={src}
            alt={alt ?? name ?? ''}
            className={avatarImage}
            onError={() => setImageError(true)}
          />
        ) : (
          initials && <span>{initials}</span>
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'