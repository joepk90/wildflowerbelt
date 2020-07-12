import React, { Component } from 'react';

import ProductDetails from "~components/common/productDetails/productDetails";

class WildflowerBelt extends Component {
    state = {}

    handleQuantityChange = () => {

    }

    handleOptionChange = () => {

    }

    handleBuyNowClickEvent = () => {

    }

    render() {
        return (
            <ProductDetails
                product={this.props.product}
                handleQuantityChange={() => this.handleQuantityChange()}
                handleOptionChange={() => this.handleOptionChange()}
                handleBuyNowClickEvent={() => this.handleBuyNowClickEvent()}
            />
        );
    }
}

export default WildflowerBelt;

