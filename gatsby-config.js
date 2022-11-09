require('dotenv').config()

const path = require('path')
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
)

module.exports = {
  siteMetadata: {
    title: `100 Coaches Agency`,
    author: `Clay Giffin // Doublespace`,
    siteUrl: `https://agency.100coaches.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: `${process.env.DATO_API_KEY}`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // // Custom API base URL
        // apiUrl: 'https://graphql.datocms.com/preview/',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `100-coaches-agency`,
        short_name: `100ca`,
        start_url: `/`,
        background_color: `#202020`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: [
          'node_modules',
          'bower_components',
          '.cache',
          'public',
        ],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [process.env.GOOGLE_ANALYTICS_KEY],
    //   },
    // },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: process.env.GOOGLE_ANALYTICS_KEY,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM,

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://agency.100coaches.com/`,
      },
    },
  ],
}
