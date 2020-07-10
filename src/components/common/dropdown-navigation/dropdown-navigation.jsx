import React, { Component } from 'react';
import { Link } from "gatsby"

import Hamburger from '~components/common/hamburger/hamburger';

import '~components/common/dropdown-navigation/dropdown-navigation.scss';

class DropDownNavigation extends Component {

    state = {
        isOpen: false
    }

    toggleOpenState = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    renderClassList() {

        let classList = "dropdown-navigation__menu-items";

        if (this.state.isOpen === true) {
            classList = classList + " is-open";
        }

        return classList;
    }

    render() {

        return (
            <nav className="dropdown-navigation">

                <div className="dropdown-navigation__mobile-toggle">
                    <Hamburger onClick={this.toggleOpenState} />
                </div>

                <ul className={this.renderClassList()}>
                    {this.props.menuLinks.map(link => (
                        <li key={link.name} className="dropdown-navigation__menu-item">
                            <Link to={link.link} className="dropdown-navigation__menu-item-link">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default DropDownNavigation;