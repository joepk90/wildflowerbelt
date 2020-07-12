import React, { Component } from 'react';

import "~components/common/productDetails/ProductDetails.scss";

// TODO make this a stateless functional component - how will I access the this.props.product?

class ProductDetails extends Component {

    theTitle = () => {

        const title = this.props.product.getTitle();

        if (title === null) return;

        return (
            <h1 className="product__title">{title}</h1>
        );

    }

    theDescription = () => {

        const description = this.props.product.getDescription();

        if (description === null) return;

        return (
            <p className="product__summary">{description}</p>
        );

    }

    thePrice = () => {

        const price = this.props.product.getPrice();

        if (price === null) return;

        // TODO to make this a reusable component, the currency symbol should be customiseable
        return (
            <p className="product__price">£{price}</p>
        );

    }

    theProductOptions = () => {

        const options = this.props.product.getProductOptions();

        if (options === null) return;

        // TODO to make this a reusable component, the currency symbol should be customiseable
        return (

            <div className="product__options">

                <label for="">Size</label>

                <select className="product__select-dropdown">

                    <option>Choose an option</option>
                    {options.map((option, index) => {
                        return (
                            <option value={option.value}>{option.name}</option>
                        );
                    })}

                </select>

            </div>

        );

    }

    theQuantity = () => {

        return (
            <input
                type="number"
                placeholder="1"
                name="quantity"
                className="product__quantity-input"
            />
        );

    }

    theBuyButton = () => {

        return (
            <button
                className="product__buy-button"
            >Buy Now</button>
        );

    }

    theProductCode = () => {

        const code = this.props.product.getProductCode();

        if (code === null) return;

        // TODO to make this a reusable component, the product label (SKU) should be an option
        return (
            <p className="product__code">SKU: {code}</p>
        );

    }

    render() {
        return (
            <div className="product-details">

                {this.theTitle()}
                {this.thePrice()}
                {this.theDescription()}
                {this.theProductOptions()}
                {this.theQuantity()}
                {this.theBuyButton()}
                <hr />
                {this.theProductCode()}

            </div>
        );
    }
}

export default ProductDetails;