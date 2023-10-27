// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: {
    locales: ['en', 'fr', 'nl'],
    defaultLocale: 'en',
  },
  rewrites: async () => {
    return [
      {
        source: '/rewriteWithLocale',
        destination: 'https://jsonplaceholder.typicode.com/posts/1',
      },
      {
        source: '/rewriteWithoutLocale',
        destination: 'https://jsonplaceholder.typicode.com/posts/1',
        locale: false,
      },
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/redirectWithLocale',
        destination: 'https://cnn.com/business',
        permanent: false,
      },
      {
        source: '/redirectWithoutLocale',
        destination: 'https://cnn.com/business',
        permanent: false,
        locale: false,
      },
    ]
  },
}

module.exports = nextConfig
