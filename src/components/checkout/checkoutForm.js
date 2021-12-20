import React, { useState } from 'react';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js';

import { logEvent, Result, ErrorResult } from './util';
import './common.css';
import './payment.css';
import ShoppingAPI from '../../store/shopping/shopping.api';
import toastr from "toastr";

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

export default function CheckoutForm(props) {
    const elements = useElements();
    const stripe = useStripe();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        await ShoppingAPI.CreateOrderGroup({
            products: props.cart.cartItems.map((cartItem) => cartItem.product._id),
            deliveryAddress: props.billingAddress,
            paymentMethod: "card"
        }).then(async (res) => {
            const card = elements.getElement(CardNumberElement);

            if (card == null) {
                return;
            }
            const { paymentIntent, error } = await stripe.confirmCardPayment(
                res.data.clientSecret, {                    
                shipping: {
                    address: {
                        city: "Test",
                        country: "SG",
                        line1: "Test",
                        line2: "Tets",
                        postal_code: "12345",
                        state: "sdkhj"
                    },
                    name: "Suresh",
                    phone: "+919876543210"
                },                
                payment_method: {
                    card: card,                                    
                    billing_details: {
                        address: {
                            city: "Test",
                            country: "SG",
                            line1: "Test",
                            line2: "Tets",
                            postal_code: "12345",
                            state: "sdkhj"
                        },
                        email: "test@test.com",
                        name: "Suresh",
                        phone: "+919876543210"
                    }
                }
            });
            if (!error) {
                toastr.success("Payment Successful");
                props.OnSuccess();
            }
            else {
                toastr.error("Something went wrong. Please try again");
            }

        }).catch((e) => {
            toastr.error("Something went wrong. Please try again");
        })
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