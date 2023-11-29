import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Payment/CheckoutForm';
import Container from '../Container/Container';
import useAuth from '../../hooks/useAuth';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const CheckoutPage = () => {
    const { user } = useAuth()
    const biodataId = '123';
    const selfBiodataId = '456';
    const selfEmail = user?.email
    const name = user?.displayName

    return (
        <div>

            <Container>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        biodataId={biodataId}
                        selfBiodataId={selfBiodataId}
                        selfEmail={selfEmail}
                        name={name}
                    />
                </Elements>
            </Container>
        </div>
    );
};

export default CheckoutPage;
