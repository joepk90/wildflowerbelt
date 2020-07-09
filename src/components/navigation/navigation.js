import React, { Component } from 'react';
import { Link } from "gatsby"

import Hamburger from '~components/common/hamburger/hamburger';

import '~components/navigation/navigation.scss';

class Navigation extends Component {

    state = {
        isOpen: false
    }

    toggleOpenState = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    renderClassList() {

        let classList = "navigation__menu-items";

        if (this.state.isOpen === true) {
            classList = classList + " is-open";
        }

        return classList;
    }

    render() {

        // TODO this needs to change as the footer navigation also has a hamburger - This logic should be split up. 
        // Create a generic navigation component
        // Create a dropdown navigatin component which uses the navigation component + the hamburger component
        // 
        return (
            <nav className="navigation">

                <div className="navigation__mobile-toggle">
                    <Hamburger onClick={this.toggleOpenState} />
                </div>

                <ul className={this.renderClassList()}>
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