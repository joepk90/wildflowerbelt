import React from 'react';

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

    getPrice = () => {

        const { price } = this.props;

        if (isNaN(price) === true) return null;

        return price

    }

    calculateTotalCost(quantity) {

        const { price } = this.props;

        return quantity * price;

    }

    handleQuantityChange = (event) => {

        const { value: quantity } = event.currentTarget;

        if (isNaN(quantity) === true || quantity <= 0) return;

        const price = this.getPrice();

        if (price === null) return;

        const { selectedOption, totalCost } = this.state;

        let newTotalCost = totalCost;
        if (selectedOption !== null) {
            newTotalCost = this.calculateTotalCost(quantity);
        }

        this.setState({ quantity, totalCost: newTotalCost });

    }

    handleOptionsChange = selectedOption => {

        if (!selectedOption.value || !selectedOption.label) {
            return;
        }

        const { quantity, totalCost } = this.state;

        let newTotalCost = totalCost;
        if (quantity > 0) {
            newTotalCost = this.calculateTotalCost(quantity);
        }

        this.setState({ selectedOption, totalCost: newTotalCost });

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
                        <PaypalExpressBtn total={this.state.totalCost} />
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

