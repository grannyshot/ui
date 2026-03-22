import type { ReactNode } from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '@grannyshot/ui/styles-no-preflight.css'

export const metadata = {
  title: {
    default: 'grannyshot-ui',
    template: '%s — grannyshot-ui',
  },
  description: 'A minimal, theme-aware design system built with Panda CSS + Ark UI',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<strong>grannyshot-ui</strong>}
              projectLink="https://github.com/grannyshot/ui"
            />
          }
          pageMap={await getPageMap()}
          footer={<Footer>MIT {new Date().getFullYear()} © grannyshot</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
