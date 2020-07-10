import React from 'react';
import { Link } from "gatsby"

import '~components/common/navigation/navigation.scss';

const Navigation = ({ menuLinks }) => {
    return (
        <nav className="navigation">
            <ul className="navigation__menu-items">
                {menuLinks.map(link => (
                    <li key={link.name} className="navigation__menu-item">
                        <Link to={link.link} className="navigation__menu-item-link">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;