import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"
import Navigation from "./navigation"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="site-header">
    <div className="site-header__container container" >

      <div className="site-header__branding">
        <Link to="/" title="{siteTitle}">
          <Logo />
        </Link>
      </div>

      <div className="site-header__navigation">
        <Navigation menuLinks={menuLinks}/>
      </div>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
