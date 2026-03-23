import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { InlinePreview } from './app/_components/InlinePreview'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: any) {
  return {
    ...docsComponents,
    ComponentPreview: InlinePreview,
    ComponentShadowPreview: InlinePreview,
    ...components,
  }
}
