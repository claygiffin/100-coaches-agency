/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.mux.com',
      },
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: [
      'mixed-decls',
      'color-functions',
      'global-builtin',
      'import',
      'legacy-js-api',
    ],
  },
  redirects: async () => [
    {
      source: '/what-we-make',
      destination: '/capabilities',
      permanent: true,
    },
    {
      source: '/who-we-are',
      destination: '/about',
      permanent: true,
    },
    {
      source: '/our-process',
      destination: '/process',
      permanent: true,
    },
    {
      source: '/join-our-team',
      destination: '/careers',
      permanent: true,
    },
    {
      source: '/articles/:path',
      destination: '/news/:path',
      permanent: true,
    },
  ],
}

export default nextConfig
