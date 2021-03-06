import React, { Component } from 'react';

import "~components/common/hamburger/hamburger.scss";

class Hamburger extends Component {

    state = {
        isActive: false
    }

    toggleActiveState() {
        this.setState({ isActive: !this.state.isActive })
    }

    handleClick = () => {

        this.toggleActiveState();

        this.props.onClick();

    }

    renderClassList() {

        let classList = "hamburger hamburger--boring js-hamburger";

        if (this.state.isActive === true) {
            classList = classList + " is-active";
        }

        return classList;
    }

    render() {
        return (
            <button
                className={this.renderClassList()}
                type="button"
                onClick={() => this.handleClick()}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        );
    }
}

export default Hamburger;