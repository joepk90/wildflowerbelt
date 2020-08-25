/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 * See: https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import siteUtilities from '~utilities/siteUtilities.js';

// potentailly use gatsby-plugin-next-seo to handle SEO via smaller components

function SEO({ description, lang, image, meta, title, tabTitle, pathname }) {

  // TODO potentailly move the imaeg query out of the SEO component?
  const { site, images } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            image
          }
        }
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                resize(width: 1200) {
                  src
                  height
                  width
                }
              }
            }
          }
        }
      }
    `
  )

  // setup image data
  const imageName = image ? image : site.siteMetadata.image;
  const imageData = siteUtilities.getImageData(imageName, images);
  const metaImage = imageData.resize ? imageData.resize : null;
  const imagePath = metaImage.src ? `${site.siteMetadata.siteUrl}${metaImage.src}` : null;


  const titleTemplate = tabTitle ? tabTitle : `%s`; // if the tabTitle is provided use the tab title, else use the seo title
  const metaDescription = description || site.siteMetadata.description;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null


  // Default Website Schema
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: site.siteMetadata.siteUrl,
      name: site.siteMetadata.title,
      "sameAs": [
        "https://twitter.com/WildflowerBelt",
        "https://www.facebook.com/wildflowerbelt"
      ],
    },
  ]

  // TODO! feed in data properly!

  // Product Schema
  if (pathname === 'wildflowerbelt') {
    schemaOrgJSONLD.push({
      "@context": "http://schema.org",
      "@type": "Product",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "3"
      },
      "description": "Define your style with the best selling, highly popular, embossed Western Belt. Made from rich tan leather and an embossed floral design, personalise your look using the popular snap on feature to mix and match your belt buckles bring your style to life. Buy the Wildflower Belt today and never go out of fashion.",
      "name": "The Wildflower Belt",
      image: {
        "@type": "ImageObject",
        url: imagePath,
      },
      "review": [
        {
          "@type": "Review",
          "author": "James",
          "datePublished": "2020-7-18",
          "description": "I can’t recommend this belt enough!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": "Matthew",
          "datePublished": "2020-7-18",
          "description": "The Wildflower Belt quickly became my favourite accessory.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": "Sue",
          "datePublished": "2020-7-18",
          "description": "I love the Wildflower Belts western flavour, embossed pattern and deep brown colour.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "4",
            "worstRating": "1"
          }
        }
      ]
    })
  }

  // Local Business Schema
  if (pathname === 'about') {
    schemaOrgJSONLD.push({
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "UK",
      },
      "description": "Wildflower Belt is an online store built on a love of high quality western belts and accessories. We are a small independent business, aiming to provide high quality, original products. Originally established in Dorset, and now operating from London we aim to provide the best customer service and value.",
      'email': 'contact@wildflowerbelt.com',
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | ${titleTemplate}`}
      link={
        canonical
          ? [
            {
              rel: "canonical",
              href: canonical,
            },
          ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: "@WildflowerBelt",
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(metaImage ? [
        {
          property: `og:image`,
          content: imagePath
        },
        {
          property: `og:image:alt`,
          content: title,
        },
        {
          property: 'og:image:width',
          content: metaImage.width
        },
        {
          property: 'og:image:height',
          content: metaImage.height
        },
        {
          property: `twitter:image`,
          content: imagePath
        },
        {
          property: `twitter:image:alt`,
          content: title,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        }
      ] : [
          {
            name: `twitter:card`,
            content: `summary`,
          },
        ])
        .concat(meta)}
    >
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: '',
  tabTitle: '',
  pathname: ''
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tabTitle: PropTypes.string.isRequired,
  pathname: PropTypes.string,
}

export default SEO
