import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import Button from "~components/common/button/button";

import "~components/stripeCheckout/stripeCheckout.scss";

let stripePromise
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
    }
    return stripePromise
}

const isButtonDisabled = function (loading, isDisabled) {

    if (loading === false && isDisabled === true) {
        return 'disabled';
    }
}

const Checkout = ({ isDisabled, classList, cancelUrl, successUrl, quantity, product }) => {

    const [loading, setLoading] = useState(false);

    const redirectToCheckout = async event => {
        event.preventDefault()
        setLoading(true)
        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout({
            mode: "payment",
            lineItems: [{ price: product, quantity: quantity }],
            successUrl: successUrl,
            cancelUrl: cancelUrl,
        })
        if (error) {
            console.warn("Error:", error)
            setLoading(false)
        }
    }

    return (
        <Button
            disabled={isButtonDisabled(loading, isDisabled)}
            modifiers={{ promo: true }}
            className={classList}
            onClick={redirectToCheckout}
        >
            Buy Now
        </Button>
    )
}

export default Checkout