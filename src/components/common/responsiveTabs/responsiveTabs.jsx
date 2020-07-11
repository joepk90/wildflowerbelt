import React, { Component } from 'react';

import "~components/common/responsiveTabs/responsiveTabs.scss";

class ResponsiveTabs extends Component {

    state = {}

    handleTabClick = () => {

    }

    renderTabs = () => {

        return (
            <div className="responsive-tabs__tabs">
                {this.props.tabsData.map((tab, index) => {

                    if (!tab.title || !tab.content) return '';

                    return <div onClick={this.handleTabClick} key={index} className="responsive-tabs__tab-title">{tab.title}</div>
                })}
            </div>

        );
    }

    render() {

        if (this.props.tabsData.length === 0) return;

        return (
            <div className="responsive-tabs">


                {this.renderTabs()}


                <div className="responsive-tabs__content"></div>


            </div>
        );
    }
}

export default ResponsiveTabs;