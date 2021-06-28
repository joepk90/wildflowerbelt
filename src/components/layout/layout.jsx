/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { lazy } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import LazyLoadObserver from '~components/common/lazyLoadObserver/lazyLoadObserver';
import Header from "~components/header/header";

const Footer = lazy(() => import("~components/footer/footer"));

// import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
            menuLinks {
              name
              link
            }
        }
      }
    }
  `)

  return (

    <React.Fragment>

      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <LazyLoadObserver>
        <Footer menuLinks={data.site.siteMetadata.menuLinks}></Footer>
      </LazyLoadObserver>

    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
