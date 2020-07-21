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

        return {
            amount: {
                total: total,
                currency: currency
            }
        };

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

        let ppbtn = '';
        if (this.state.showButton) {
            ppbtn = (<paypal.Button.react
                env={this.props.env}
                client={this.props.client}
                payment={() => this.handlePayment()}
                onAuthorize={(data, actions) => this.onAuthorize(data, actions)}
                onCancel={this.props.onCancel}
                style={style}
            />);
        }
        return <div>{ppbtn}</div>;
    }
}

PaypalButton.propTypes = {
    currency: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    client: PropTypes.object.isRequired,
};

PaypalButton.defaultProps = {
    env: 'sandbox',
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