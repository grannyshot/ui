import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { vars } from '../tokens/colors.css'
import { space, radius } from '../tokens/spacing.css'
import { fontSize, fontWeight } from '../tokens/typography.css'

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline-flex', 'grid', 'inline-block'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
    flexWrap: ['nowrap', 'wrap'],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    gap: space,
    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    fontSize,
    fontWeight,
    borderRadius: radius,
    width: ['100%', 'auto', 'fit-content'],
    height: ['100%', 'auto', 'fit-content'],
    textAlign: ['left', 'center', 'right'],
    position: ['relative', 'absolute', 'fixed', 'sticky'],
    overflow: ['hidden', 'auto', 'visible', 'scroll'],
    opacity: [0, 0.5, 1],
    zIndex: [0, 10, 20, 30, 40, 50],
    cursor: ['pointer', 'default', 'not-allowed', 'grab', 'text'],
    pointerEvents: ['none', 'auto'],
    userSelect: ['none', 'auto', 'text'],
    whiteSpace: ['nowrap', 'normal', 'pre', 'pre-wrap'],
    textOverflow: ['ellipsis', 'clip'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      'repeat(4, 1fr)',
      'repeat(6, 1fr)',
      'repeat(12, 1fr)',
    ],
    transition: [
      'none',
      'all 100ms ease-in-out',
      'all 200ms ease-in-out',
      'all 300ms ease-in-out',
    ],
  },
  shorthands: {
    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    m: ['margin'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
  },
})

const colorProperties = defineProperties({
  properties: {
    color: vars.color,
    background: vars.color,
    borderColor: vars.color,
  },
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)
export type Sprinkles = Parameters<typeof sprinkles>[0]
