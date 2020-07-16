import React from 'react';

import ProductDetails from "~components/common/productDetails/productDetails";

import "~components/WildflowerBeltProductDetails/WildflowerBeltProductDetails.scss";

class WildflowerBelt extends ProductDetails {

    state = {
        quantity: 1,
        option: ''
    }

    handleQuantityChange = (event) => {

        if (!event.currentTarget.value) return;

        this.setState({ quantity: event.currentTarget.value });

    }

    handleOptionsChange = (event) => {

        if (!event.currentTarget.value) return;

        this.setState({ option: event.currentTarget.value });

    }

    handleBuyNowClick = () => {
        console.log('the buy button has been clicked');
    }

    render() {

        return (

            <ProductDetails>
                {this.theTitle()}
                {this.thePrice()}
                {this.theSummary()}
                {this.theProductOptions('Size: ')}
                {this.theQuantity()}
                {this.theBuyButton()}
                {this.theProductCode('SKU: ')}
            </ProductDetails>

        );
    }
}

export default WildflowerBelt;

