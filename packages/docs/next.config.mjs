import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
})