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

    handlePayment = () => {

        // TODO create this.createTransaction method
        return window.paypal.rest.payment.create(this.props.env, this.props.client, {
            transactions: [
                { amount: { total: this.props.total, currency: this.props.currency } },
            ],
        })
    }

    onAuthorize = async (data, actions) => {

        actions.payment.execute()
            .then(() => {

                // TODO check data
                let payment = {};
                payment.paid = true;
                payment.cancelled = false;
                payment.payerID = data.payerID;
                payment.paymentID = data.paymentID;
                payment.paymentToken = data.paymentToken;
                payment.returnUrl = data.returnUrl;
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