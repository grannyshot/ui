export const duration = {
  fast: '100ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const

export const easing = {
  ease: 'ease',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const

export const transition = {
  fast: `all ${duration.fast} ${easing.easeInOut}`,
  normal: `all ${duration.normal} ${easing.easeInOut}`,
  slow: `all ${duration.slow} ${easing.easeInOut}`,
  colors: `color ${duration.normal} ${easing.easeInOut}, background-color ${duration.normal} ${easing.easeInOut}, border-color ${duration.normal} ${easing.easeInOut}`,
  transform: `transform ${duration.normal} ${easing.easeOut}`,
  opacity: `opacity ${duration.normal} ${easing.easeInOut}`,
} as const
