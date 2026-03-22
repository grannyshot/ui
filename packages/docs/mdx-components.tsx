import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { ComponentPreview } from './app/_components/ComponentPreview'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: any) {
  return {
    ...docsComponents,
    ComponentPreview,
    ...components,
  }
}
