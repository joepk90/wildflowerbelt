import React from 'react';

import Button from "~components/common/button/button";
import ProductDetails from "~components/common/productDetails/productDetails";
import PaypalExpressBtn from '~components/PayPalExpressCheckOut/PayPalExpressCheckOut';

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

    handleOptionsChange = selectedOption => {

        if (!selectedOption.value || !selectedOption.label) {
            return;
        }

        this.setState({ selectedOption });

    }

    handleBuyNowClick = () => {

        const { state } = this;

        console.log('the buy button has been clicked: ', state);
    }

    isBuyButtonDisabled = () => {

        const isDisabled = 'disabled';

        if (this.state.quantity <= 0) return isDisabled;

        const { value, label } = this.state.selectedOption || {};

        if (typeof value === 'undefined' || typeof label === 'undefined') return isDisabled;

        return '';

    }

    render() {

        return (

            <ProductDetails>
                {this.theTitle()}
                {this.thePrice()}
                {this.theSummary()}
                <div className="product-details__options">
                    {this.theProductOptions('Size: ')}
                    {this.theQuantity()}

                    <Button
                        className={'button--buy-now ' + this.isBuyButtonDisabled()}
                        modifiers={{ promo: true }}
                        disabled={this.isBuyButtonDisabled()}
                    >
                        <span className="button__label--buy-now">Buy Now</span>
                        <PaypalExpressBtn total={29.99} />
                    </Button>

                </div>
                {this.theProductCode('SKU: ')}
            </ProductDetails>

        );
    }
}

export default WildflowerBelt;

