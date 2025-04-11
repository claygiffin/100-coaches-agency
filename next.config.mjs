/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   staticGenerationMaxConcurrency: 1,
  //   staticGenerationRetryCount: 3,
  // },
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
  redirects: async () => [],
}

export default nextConfig
