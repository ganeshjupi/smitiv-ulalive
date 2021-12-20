import {
    CardCvcElement,
    CardExpiryElement, CardNumberElement, useElements,
    useStripe
} from '@stripe/react-stripe-js';
import React from 'react';
import toastr from "toastr";
import ShoppingAPI from '../../store/shopping/shopping.api';
import '../checkout/common.css';
import '../checkout/payment.css';
import { logEvent } from '../checkout/util';

const ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: '18px',
            color: '#424770',
            letterSpacing: '0.025em',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
};

export default function CreateSubscriptionForm(props) {
    const elements = useElements();
    const stripe = useStripe();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if (props.type === "user-subscription") {
            await ShoppingAPI.CreateSubscription({
                creator : props.userId,
                billingPeriod: props.billingPeriod,
            }).then(async (res) => {
                const card = elements.getElement(CardNumberElement);

                if (card == null) {
                    return;
                }
                const { paymentIntent, error } = await stripe.confirmCardPayment(
                    res.data.clientSecret, {
                    payment_method: {
                        card: card
                    }
                });
                if (!error) {
                    toastr.success("Payment Successful");
                    props.OnSuccess();
                }
                else {
                    toastr.error(error.message);
                }

            }).catch((e) => {
                toastr.error("Something went wrong. Please try again");
            });
        }
        else {
            await ShoppingAPI.CreateUpgradeAccountSubscription({
                billingPeriod: props.billingPeriod,
            }).then(async (res) => {
                const card = elements.getElement(CardNumberElement);


                if (card == null) {
                    return;
                }
                const { paymentIntent, error } = await stripe.confirmCardPayment(
                    res.data.clientSecret, {
                    payment_method: {
                        card: card
                    }
                });
                if (!error) {
                    toastr.success("Payment Successful");
                    props.OnSuccess();
                }
                else {
                    toastr.error(error.message);
                }

            }).catch((e) => {
                toastr.error("Something went wrong. Please try again");
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="cardNumber">Card Number</label>
            <CardNumberElement
                id="cardNumber"
                onBlur={logEvent('blur')}
                onChange={logEvent('change')}
                onFocus={logEvent('focus')}
                onReady={logEvent('ready')}
                options={ELEMENT_OPTIONS}
            />
            <label htmlFor="expiry">Card Expiration</label>
            <CardExpiryElement
                id="expiry"
                onBlur={logEvent('blur')}
                onChange={logEvent('change')}
                onFocus={logEvent('focus')}
                onReady={logEvent('ready')}
                options={ELEMENT_OPTIONS}
            />
            <label htmlFor="cvc">CVC</label>
            <CardCvcElement
                id="cvc"
                onBlur={logEvent('blur')}
                onChange={logEvent('change')}
                onFocus={logEvent('focus')}
                onReady={logEvent('ready')}
                options={ELEMENT_OPTIONS}
            />
            <button type="submit" className="btn btn-success" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};