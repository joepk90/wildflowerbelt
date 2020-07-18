import React, { Component } from 'react';

import Select from 'react-select';
import Button from '~components/common/button/button'
import Input from '~components/common/input/input'

import "~components/common/productDetails/ProductDetails.scss";


class ProductDetails extends Component {

    handleQuantityChange() {
        console.log('no handleQuantityChange override provided...');
    }

    handleOptionsChange() {
        console.log('no handleOptionsChange override provided...');
    }

    handleBuyNowClick() {
        console.log('no handleBuyNowClickEvent override provided...');
    }

    theTitle() {

        const title = this.props.product.title;

        if (title === null) return;

        // TODO use title component?

        return (
            <h1 className="product-details__title">{title}</h1>
        );

    }

    theSummary() {

        const summary = this.props.product.summary;

        if (summary === null) return;

        return (
            <p className="product-details__summary">{summary}</p>
        );

    }

    thePrice() {

        const price = this.props.product.price;

        if (price === null) return;

        if (price.hasOwnProperty('amount') === false || price.hasOwnProperty('currency') === false) return;

        return (
            <p className="product-details__price">{price.currency}{price.amount}</p>
        );

    }

    theProductOptions(label = '') {

        const { options } = this.props.product;
        const { selectedOption } = this.state;

        if (options === null) return;

        return (

            <div className="product-details__options">

                <span className="product-details__select-label">{label}</span>

                <Select
                    value={selectedOption}
                    onChange={this.handleOptionsChange}
                    options={options}
                    className="product-details__select react-select"
                    classNamePrefix="react-select"
                />
            </div>

        );

    }

    theQuantity() {

        // TODO create/use input component?

        return (
            <div className="product-details__quantity-input">
                <Input
                    className="input"
                    type="number"
                    placeholder="1"
                    min="1"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={event => this.handleQuantityChange(event)}
                />
            </div>
        );

    }

    theBuyButton() {

        let buyButtonLabel = 'Buy Now';
        if (this.props.buyButtonLabel) {
            buyButtonLabel = this.props.BuyButtonLabel;
        }

        // TODO use button component?

        return (
            <Button
                modifiers={{ promo: true }}
                onClick={() => this.handleBuyNowClick()}
            >{buyButtonLabel}</Button>
        );

    }

    theProductCode(label = '') {

        const code = this.props.product.code;

        if (code === null) return;

        // TODO to make this a reusable component, the product label (SKU) should be an option
        return (
            <p className="product-details__code">{label}{code}</p>
        );

    }

    render() {

        return (
            <div className="product-details">
                {this.props.children}
            </div>
        );
    }
}

export default ProductDetails;