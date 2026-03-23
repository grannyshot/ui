import { readFileSync } from 'fs'
import { resolve } from 'path'
import { ShadowPreviewClient } from './ShadowPreviewClient'

const cssPath = resolve(process.cwd(), '../core/dist/styles.css')
const css = readFileSync(cssPath, 'utf-8')

type ComponentShadowPreviewProps = {
  name: string
}

export function ComponentShadowPreview({ name }: ComponentShadowPreviewProps) {
  return <ShadowPreviewClient name={name} css={css} />
}
