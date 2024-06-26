// should page links just be set here and queried in lyaouts using graph QL?
const pageLinks = require("./src/utilities/page-links.js");

// TODO review/organise the environment variables + siteURL setup
const activeEnv = process.env.NODE_ENV || "development"
require("dotenv").config({ path: `.env.${activeEnv}`, })

const productionUrl = `https://www.wildflowerbelt.com` // TODO consider using env var
const siteUrl = process.env.GATSBY_SITE_URL || productionUrl;

module.exports = {
  siteMetadata: {
    title: `The Wildflower Belt`,
    menuLinks: [
      {
        name: 'Home',
        link: pageLinks.home,
      },
      {
        name: 'The Wildflower Belt',
        link: pageLinks.wildflowerbelt,
      },
      {
        name: 'Contact',
        link: pageLinks.contact,
      },
      {
        name: 'About',
        link: pageLinks.about,
      },
    ],
    description: `Crafted from rich tan leather, this accessory boasts a hand-brushed, leafy embossed pattern that adds flair to anything you wear.`,
    author: `Wildflower Belt Ltd`,
    image: `wildflower-belt.jpg`,
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Lato',
            weights: ['400', '400i', '700', '700i']
          },
          {
            family: `Open Sans`,
            weights: ['400', '400i', '700', '700i']
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/using-typescript`,
          `/order-confirmation`
        ],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/wildflowerbelt-icon-440x406.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PNK4FFT",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    {
      resolve: 'gatsby-gtm-web-vitals',
      options: {
        use: [
          {
            resolve: 'gatsby-plugin-google-tagmanager' // potentially forces as a dependancy
          },
        ],
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    //
    // gatsby-plugin-robots-txt:
    // set GATSBY_ENV to development in order to block crawlers (disallow: /)
    // note: the robots.txt file only gets regenerated on build (npm run build)
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: productionUrl + '/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
  ],
}
