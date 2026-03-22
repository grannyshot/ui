import type { ReactNode } from 'react'
import { Footer, Layout, LocaleSwitch, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'grannyshot-ui',
    template: '%s — grannyshot-ui',
  },
  description: 'A minimal, theme-aware design system built with Panda CSS + Ark UI',
}

type LayoutProps = Readonly<{
  children: ReactNode
  params: Promise<{ lang: string }>
}>

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<strong>grannyshot-ui</strong>}
              projectLink="https://github.com/grannyshot/ui"
            >
              <LocaleSwitch lite />
            </Navbar>
          }
          i18n={[
            { locale: 'ko', name: '한국어' },
            { locale: 'en', name: 'English' },
          ]}
          pageMap={await getPageMap(`/${lang}`)}
          footer={<Footer>MIT {new Date().getFullYear()} © grannyshot</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}