import React, { Component } from 'react';

import "~components/common/responsiveTabs/responsiveTabs.scss";

class ResponsiveTabs extends Component {

    state = {
        activeTab: null,
    }

    componentDidMount() {

        if (this.props.tabsData.length === 0) return;

        this.setState({ activeTab: this.props.tabsData[0].id });

    }

    renderTabClassList = (id) => {

        let classList = "responsive-tabs__tab";

        if (this.state.activeTab === id) {
            return classList + ' is-active';
        }

        return classList;

    }

    handleTabClick = (index) => {

        this.setState({ activeTab: this.props.tabsData[index].id })

    }

    renderTabs = () => {

        return (
            <ul className="responsive-tabs__tabs">
                {this.props.tabsData.map((tab, index) => {

                    if (!tab.title || !tab.content || !tab.id) return '';

                    return (
                        <li className={this.renderTabClassList(tab.id)}
                            key={tab.id}>
                            <a href={'#' + tab.id}
                                onClick={() => this.handleTabClick(index)}
                                className="responsive-tabs__tab-link"
                            >{tab.title}</a>
                        </li>
                    );
                })}
            </ul>

        );
    }

    renderPanelClassList = (id) => {

        let classList = "responsive-tabs__panel";

        if (this.state.activeTab === id) {
            return classList + ' is-active';
        }

        return classList;

    }

    renderTabPanels = () => {

        return (

            <div className="responsive-tabs__panels">

                {this.props.tabsData.map((tab) => {

                    if (!tab.title || !tab.content || !tab.id) return '';

                    return (
                        <div key={tab.id} className={this.renderPanelClassList(tab.id)}>
                            {tab.content}
                        </div>
                    )
                })}

            </div>
        );

    }

    render() {

        if (this.props.tabsData.length === 0) return;

        return (
            <div className="responsive-tabs">

                {this.renderTabs()}

                {this.renderTabPanels()}

            </div>
        );
    }
}

export default ResponsiveTabs;