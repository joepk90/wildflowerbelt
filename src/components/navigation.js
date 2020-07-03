import React, { Component } from 'react';
import { Link } from "gatsby"

class Navigation extends Component {
    state = {}
    render() {  
        return ( 
            <nav className="navigation">
                <ul className="navigation__menu-items">
                    {this.props.menuLinks.map(link => (
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
}
 
export default Navigation;