import React from 'react';

import { pageLinks } from "~utilities/utilities.js"
import Button from "~components/common/button/button";
import ProductDetails from "~components/common/productDetails/productDetails";
import PaypalExpressBtn from '~components/PayPalExpressCheckOut/PayPalExpressCheckOut';
import Image from "~components/image/image";

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

        if (this.state.totalCost === 0) return 'disabled';

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

        window.location.href = pageLinks.orderConfirmation;

    }

    render() {

        const { quantity } = this.state || {};

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
                        <PaypalExpressBtn
                            total={this.state.totalCost}
                            option={this.state.selectedOption}
                            quantity={quantity}
                            price={this.props.price}
                            onSuccess={(payment) => this.handleSuccessfulPayment(payment)}
                        />
                    </Button>

                    <div className='paypal-logo'>
                        <Image filename="paypal-logo.png" />
                    </div>


                </div>
                {this.theProductCode('SKU: ')}
            </ProductDetails>

        );
    }
}

WildflowerBelt.defaultProps = {
    price: 29.99,
};

export default WildflowerBelt;

