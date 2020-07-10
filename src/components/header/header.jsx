import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "~components/logo/logo";
import DropDownNavigation from "~components/common/dropdown-navigation/dropdown-navigation";
import Section from "~components/section/section";

import '~components/header/header.scss';

const Header = ({ siteTitle, menuLinks }) => (
  <header className="site-header">
    <Section options={{ paddingSmall: true }}>

      <div className="site-header__container" >

        <div className="site-header__branding">
          <Link to="/" title="{siteTitle}">
            <Logo />
          </Link>
        </div>

        <div className="site-header__navigation">
          <DropDownNavigation menuLinks={menuLinks} />
        </div>

      </div>

    </Section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
