import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import siteUtilities from '~utilities/siteUtilities.js';
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ alt, filename }) => {

  // graphql queries seem very limited in terms of using dynamically.
  // variables cannot be used
  // it cannot be called in a method or utility function
  // to call images elsewhere this query will need to be duplicated :(
  const { images } = useStaticQuery(graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `);

  const src = siteUtilities.getImageData(filename, images);

  if (!src.fluid) return;

  return (<Img alt={alt} fluid={src.fluid} />);
}

export default Image;