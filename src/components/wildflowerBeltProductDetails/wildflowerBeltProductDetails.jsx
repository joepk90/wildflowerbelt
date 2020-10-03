import React from 'react';

import pageLinks from "~utilities/pageLinks" // todo include using utilities
import ProductDetails from "~components/common/productDetails/productDetails";
import StripeCheckout from '~components/stripeCheckout/stripeCheckout';

import "~components/wildflowerBeltProductDetails/wildflowerBeltProductDetails.scss";

class WildflowerBelt extends ProductDetails {

    state = {
        quantity: 1,
        selectedOption: null,
        totalCost: 0
    }

    componentDidUpdate(previousProps, previousState) {

        const { quantity: previousQuantity, selectedOption: previousSelectedOption } = previousState
        const { quantity, selectedOption } = this.state

        if (quantity !== previousQuantity || selectedOption !== previousSelectedOption) {
            this.calculateTotalCost();
        }
    }

    calculateTotalCost = () => {

        const { selectedOption, quantity } = this.state;

        const price = this.getPrice();

        if (price === null) return;

        if (quantity <= 0 || selectedOption === null) return;

        this.setState({ totalCost: quantity * price });
    }

    getPrice = () => {

        const { price } = this.props;

        if (isNaN(price) === true) return null;

        return price

    }

    handleQuantityChange = (event) => {

        const { value } = event.currentTarget;

        if (isNaN(value) === true || value <= 0) return;

        const quantity = parseInt(value);

        this.setState({ quantity });

    }

    handleOptionsChange = selectedOption => {

        const { value, label } = selectedOption;

        if (!value || !label) return

        this.setState({ selectedOption });

    }

    isBuyButtonDisabled = () => {

        if (this.state.totalCost === 0) {
            return true;
        }

        return false;

    }

    resetState = () => {

        const defaultState = {
            quantity: 1,
            selectedOption: null,
            totalCost: 0
        }

        this.setState(defaultState);

    }

    handleSuccessfulPayment = (payment) => {

        console.log('Successful Payment!', payment);

        this.resetState();

        if (process.env.NODE_ENV !== 'development') {
            window.location.href = pageLinks.orderConfirmationUrl();
        }

    }

    getStripePriceId() {

        const { selectedOption } = this.state

        if (selectedOption === null || !selectedOption.value) return null;

        return selectedOption.value;

    }

    render() {

        const { quantity } = this.state || {};

        return (

            <ProductDetails>
                { this.theTitle()}
                { this.thePrice()}
                { this.theSummary()}
                <div className="product-details__options">
                    {this.theProductOptions('Size: ')}
                    {this.theQuantity()}

                    <StripeCheckout
                        isDisabled={this.isBuyButtonDisabled()}
                        classList='button--buy-now'
                        quantity={quantity}
                        product={this.getStripePriceId()}
                        successUrl={pageLinks.orderConfirmationUrl()}
                        cancelUrl={pageLinks.widflowerBeltUrl()}
                    />

                </div>

                { this.theProductCode('SKU: ')}

            </ProductDetails >

        );
    }
}

WildflowerBelt.defaultProps = {
    price: 29.99,
};

export default WildflowerBelt;

