import { cva, css } from '@/styled-system/css'
import type { RecipeVariantProps } from '@/styled-system/css'

export const drawerOverlay = css({
  position: 'fixed',
  inset: 0,
  bg: 'overlay',
  zIndex: 'overlay',
  '&[data-state=open]': {
    animation: 'fadeIn 0.2s ease',
  },
  '&[data-state=closed]': {
    animation: 'fadeOut 0.15s ease',
  },
})

export const drawerPositioner = css({
  position: 'fixed',
  inset: 0,
  zIndex: 'modal',
  display: 'flex',
})

export const drawerContent = cva({
  base: {
    bg: 'bg.subtle',
    boxShadow: 'xl',
    height: '100%',
    overflow: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
  },

  variants: {
    placement: {
      right: {
        marginLeft: 'auto',
        width: '100%',
        maxWidth: 'sm',
        borderLeft: '1px solid token(colors.border)',
        '&[data-state=open]': {
          transform: 'translateX(0)',
        },
        '&[data-state=closed]': {
          transform: 'translateX(100%)',
        },
      },
      left: {
        marginRight: 'auto',
        width: '100%',
        maxWidth: 'sm',
        borderRight: '1px solid token(colors.border)',
        '&[data-state=open]': {
          transform: 'translateX(0)',
        },
        '&[data-state=closed]': {
          transform: 'translateX(-100%)',
        },
      },
    },
  },

  defaultVariants: {
    placement: 'right',
  },
})

export const drawerTitle = css({
  fontSize: 'lg',
  fontWeight: 'semibold',
  color: 'fg',
})

export const drawerDescription = css({
  fontSize: 'sm',
  color: 'fg.muted',
})

export const drawerCloseTrigger = css({
  position: 'absolute',
  top: '3',
  right: '3',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: 'sm',
  color: 'fg.muted',
  cursor: 'pointer',
  transition: 'background 0.15s ease, color 0.15s ease',
  '&:hover': {
    bg: 'bg.muted',
    color: 'fg',
  },
})

export const drawerHeader = css({
  p: '6',
  borderBottom: '1px solid token(colors.border)',
})

export const drawerBody = css({
  p: '6',
  flex: 1,
  overflowY: 'auto',
})

export const drawerFooter = css({
  p: '6',
  borderTop: '1px solid token(colors.border)',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '2',
})

export type DrawerContentVariants = RecipeVariantProps<typeof drawerContent>
