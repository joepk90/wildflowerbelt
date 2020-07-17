import React from 'react';

import ProductDetails from "~components/common/productDetails/productDetails";

import "~components/wildflowerBeltProductDetails/wildflowerBeltProductDetails.scss";

class WildflowerBelt extends ProductDetails {

    state = {
        quantity: 1,
        selectedOption: null
    }

    handleQuantityChange = (event) => {

        if (!event.currentTarget.value) return;

        this.setState({ quantity: event.currentTarget.value });

    }

    handleOptionsChange = newOption => {

        if (!newOption.value) return;

        this.setState({ option: newOption.value });

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

