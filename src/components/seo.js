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
          name: `twitter:card`,
          content: `summary_large_image`,
        }
      ] : [
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:image`,
            content: imagePath,
          },
          {
            name: `twitter:site`,
            content: canonical,
          },
        ])
        .concat(meta)}
    />
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
