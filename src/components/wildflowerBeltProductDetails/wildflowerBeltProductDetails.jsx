import React, { Component } from 'react';
import Select from 'react-select';

import "~components/wildflowerBeltProductDetails/wildflowerBeltProductDetails.scss";

class WildflowerBelt extends Component {

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

    theProductOptions(label = '') {

        const { options } = this.props.product;
        const { selectedOption } = this.state;

        if (options === null) return;

        console.log(selectedOption);

        return (

            <div className="product-details__options">

                <span>{label}</span>

                <Select
                    value={selectedOption}
                    onChange={this.handleOptionsChange}
                    options={options}
                />
            </div>

        );

    }

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

    }

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

    }

    render() {

        return (

            <React.Fragment>
                {this.theProductOptions('Size: ')}
                {this.theQuantity()}
                {this.theBuyButton()}
            </React.Fragment>

        );
    }
}

export default WildflowerBelt;

