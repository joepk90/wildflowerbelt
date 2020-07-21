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
            env: 'sandbox', // Or 'sandbox'
            client: {
                sandbox: 'AWuPIyjaRlq05oHy8jhOarB8G9EA6qaKl9GcAgghdlfCv5tSTETI5egdezt1i2BEbS1_ysn9c1q8COWY',
                production: 'AbrY9hgE7avHLSxU1V_5L_0Epe50vH-p-_nkO4zx3FY_KT7R-sjfKpZ2ZB7VvQ8ZyALC9cCGsSTA02ZQ',
            },
            commit: true, // Show a 'Pay Now' button
        };
    }
    componentDidMount() {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;
        if (isScriptLoaded && isScriptLoadSucceed) {
            this.setState({ showButton: true });
        }
    }

    componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
        if (!this.state.show) {
            if (isScriptLoaded && !this.props.isScriptLoaded) {
                if (isScriptLoadSucceed) {
                    this.setState({ showButton: true });
                } else {
                    console.log('Cannot load Paypal script!');
                    this.props.onError();
                }
            }
        }
    }


    handlePayment = () => {

        return window.paypal.rest.payment.create(this.props.env, this.props.client, {
            transactions: [
                { amount: { total: this.props.total, currency: this.props.currency } },
            ],
        })

    }

    onAuthorize = (data, actions) => {

        // TODO await
        actions.payment.execute().then(() => {
            const payment = Object.assign({}, this.props.payment);
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
                env={this.state.env}
                client={this.state.client}
                payment={() => this.handlePayment()}
                commit
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