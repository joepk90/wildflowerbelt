import React from 'react';
import createReactClass from 'create-react-class';
import Select from 'react-select';

import "~components/common/productDetails/ProductDetails.scss";

const ProductDetails = createReactClass({

    handleQuantityChange() {
        console.log('no handleQuantityChange override provided...');
    },

    handleOptionsChange() {
        console.log('no handleOptionsChange override provided...');
    },

    handleBuyNowClick() {
        console.log('no handleBuyNowClickEvent override provided...');
    },

    theTitle() {

        const title = this.props.product.title;

        if (title === null) return;

        // TODO use title component?

        return (
            <h1 className="product-details__title">{title}</h1>
        );

    },

    theSummary() {

        const summary = this.props.product.summary;

        if (summary === null) return;

        return (
            <p className="product-details__summary">{summary}</p>
        );

    },

    thePrice() {

        const price = this.props.product.price;

        if (price === null) return;

        if (price.hasOwnProperty('amount') === false || price.hasOwnProperty('currency') === false) return;

        return (
            <p className="product-details__price">{price.currency}{price.amount}</p>
        );

    },

    theProductOptions(label = '') {

        const { options } = this.props.product;
        const { selectedOption } = this.state;

        if (options === null) return;

        return (

            <div className="product-details__options">

                <span>{label}</span>

                <Select
                    value={selectedOption}
                    onChange={this.handleOptionsChange}
                    options={options}
                    className="product-details__select"
                />
            </div>

        );

    },

    theQuantity() {

        // TODO create/use input component?

        return (
            <input
                className="product-details__quantity-input"
                type="number"
                placeholder="1"
                min="1"
                name="quantity"
                value={this.state.quantity}
                onChange={event => this.handleQuantityChange(event)}
            />
        );

    },

    theBuyButton() {

        let buyButtonLabel = 'Buy Now';
        if (this.props.buyButtonLabel) {
            buyButtonLabel = this.props.BuyButtonLabel;
        }

        // TODO use button component?

        return (
            <button
                className="product-details__buy-button"
                onClick={() => this.handleBuyNowClick()}
            >{buyButtonLabel}</button>
        );

    },

    theProductCode(label = '') {

        const code = this.props.product.code;

        if (code === null) return;

        // TODO to make this a reusable component, the product label (SKU) should be an option
        return (
            <p className="product-details__code">{label}{code}</p>
        );

    },

    render() {

        return (
            <div className="product-details">
                {this.props.children}
            </div>
        );
    }
});

export default ProductDetails;