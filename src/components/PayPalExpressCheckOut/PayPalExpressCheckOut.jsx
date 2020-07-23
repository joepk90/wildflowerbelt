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

        this.state = {
            showButton: false,
            isWindowAvailable: false
        };
    }

    componentDidMount() {
        window.React = React;
        window.ReactDOM = ReactDOM;
        this.setState({ isWindowAvailable: true });
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

    // paypal documentation - see: Set Up a Payment
    // https://developer.paypal.com/docs/archive/checkout/integrate/#2-set-up-a-payment
    createTransactionObject = () => {

        const { total, currency, option, quantity, price } = this.props || {};

        if (!total || !currency || !option || !quantity || !price) return;

        return {
            amount: {
                total: total,
                currency: currency,
                // details: {
                //     subtotal: '30.00',
                //     tax: '0.07',
                //     shipping: '0.03',
                //     handling_fee: '1.00',
                //     shipping_discount: '-1.00',
                //     insurance: '0.01'
                // }
            },
            description: 'Thanks for your order.',
            // custom: '90048630024435',
            //invoice_number: '12345', Insert a unique invoice number
            // payment_options: {
            //     allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
            // },
            // soft_descriptor: 'ECHI5786786',
            item_list: {
                items: [
                    {
                        name: 'Wildflower Belt - ' + option.label,
                        description: 'Embossed Western Belt',
                        quantity: quantity,
                        price: price,
                        // tax: '0.01',
                        sku: '1',
                        currency: currency
                    }
                ],
                // shipping_address: {
                //     recipient_name: 'Brian Robinson',
                //     line1: '4th Floor',
                //     line2: 'Unit #34',
                //     city: 'San Jose',
                //     country_code: 'US',
                //     postal_code: '95131',
                //     phone: '011862212345678',
                //     state: 'CA'
                // }
            }
        }
    }


    handlePayment = () => {

        const { env, client } = this.props;

        if (!env || !client) return {};

        return window.paypal.rest.payment.create(env, client, {
            transactions: [
                this.createTransactionObject(),
            ],
            note_to_payer: 'Contact us for any questions on your order.'
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
        const { isWindowAvailable } = this.state;

        if (isWindowAvailable === false) return '';

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
    total: 0,
    price: 29.99,
    currency: 'GBP',
    client: {
        sandbox: process.env.GATSBY_PAYPAL_SANDBOX_CLIENT_ID,
        production: process.env.GATSBY_PAYPAL_PRODUCTION_CLIENT_ID,
    },
    env: process.env.GATSBY_PAYPAL_ENVIRONMENT,

    onSuccess: (payment) => {
        console.log('The payment was succeeded!', payment);
    },
    onCancel: (data) => {
        console.log('The payment was cancelled!', data);
    },
    onError: (err) => {
        console.log('Error loading Paypal script!', err);
    },
};

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);