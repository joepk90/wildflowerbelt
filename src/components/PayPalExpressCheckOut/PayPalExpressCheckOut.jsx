import React from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';
import PropTypes from 'prop-types';

import "~components/PayPalExpressCheckOut/PayPalExpressCheckOut.scss";

/**
 * PaypalButton
 * 
 * Used the following class a reference
 * https://cubettech.com/resources/blog/integrating-paypal-rest-api-with-react-js/
 * 
 * Paypal documentation:
 * https://developer.paypal.com/docs/api/payments/v1/
 */

class PaypalButton extends React.Component {
    constructor(props) {
        super(props);

        window.React = React;
        window.ReactDOM = ReactDOM;

        this.state = {
            showButton: false,
        };
    }

    componentDidUpdate(prevProps) {

        if (prevProps === this.props) return;

        const { isScriptLoaded, isScriptLoadSucceed } = this.props;

        if (isScriptLoaded === false || isScriptLoadSucceed === false) {
            console.log('Cannot load Paypal script!');
            this.props.onError();
            return;
        }

        this.setState({ showButton: true });

    }

    createTransactionObject = () => {

        const { total, currency } = this.props;

        if (!total || !currency) return {};

        // a message needs to be added here for the size

        return {
            amount: {
                total: total,
                currency: currency
            }
        };

        // "item_list": {
        //     "items": [
        //       {
        //         "name": "hat",
        //         "description": "Brown hat.",
        //         "quantity": "5",
        //         "price": "3",
        //         "tax": "0.01",
        //         "sku": "1",
        //         "currency": "USD"
        //       },
        //     ],
        // "description": "The payment transaction description.",

    }

    handlePayment = () => {

        const { env, client } = this.props;

        if (!env || !client) return {};

        return window.paypal.rest.payment.create(env, client, {
            transactions: [
                this.createTransactionObject()
            ],
        })
    }

    onAuthorize = async (data, actions) => {

        actions.payment.execute()
            .then(() => {

                const { payerID, paymentID, paymentToken, returnUrl } = data || {};

                const payment = {
                    paid: true,
                    cancelled: false,
                    payerID: payerID,
                    paymentID: paymentID,
                    paymentToken: paymentToken,
                    returnUrl: returnUrl
                };

                this.props.onSuccess(payment);

            });
    }

    render() {
        const paypal = window.paypal;

        const style = {
            shape: 'rect',
            color: 'blue',
            label: 'buynow',
            tagline: false,
            size: 'large'
        }

        let paypalButton = '';
        if (this.state.showButton) {
            paypalButton = (<paypal.Button.react
                env={this.props.env}
                client={this.props.client}
                payment={() => this.handlePayment()}
                onAuthorize={(data, actions) => this.onAuthorize(data, actions)}
                onCancel={this.props.onCancel}
                style={style}
            />);
        }
        return <div>{paypalButton}</div>;
    }
}

PaypalButton.propTypes = {
    currency: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    client: PropTypes.object.isRequired,
};

PaypalButton.defaultProps = {
    total: 29.99,
    currency: 'GBP',
    client: {
        sandbox: process.env.PAYPAL_SANDBOX_CLIENT_ID,
        production: process.env.PAYPAL_PRODUCTION_CLIENT_ID,
    },
    env: process.env.PAYPAL_ENVIRONMENT,

    onSuccess: (payment) => {
        console.log('The payment was succeeded!', payment);

        // TODO add payment successful message + reset the product options

    },
    onCancel: (data) => {
        console.log('The payment was cancelled!', data);
    },
    onError: (err) => {
        console.log('Error loading Paypal script!', err);
    },
};

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);