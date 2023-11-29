import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const CheckoutForm = ({ biodataId, selfBiodataId, selfEmail,name }) => {
    const axiosPublic = useAxiosPublic();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading || !stripe || !elements) {
            return;
        }

        setLoading(true);
        const cardElement = elements.getElement(CardElement);
        const { token, error } = await stripe.createToken(cardElement);
        console.log('Token:', token);

        if (error) {
            console.log('Error:', error.message);
            setError(error.message);
        } else {
            try {
                const payment = {
                    amount: 50000,
                    source: token.id,
                    description: 'Contact Information Request',
                    biodataId,
                    selfBiodataId,
                    selfEmail,
                    name,
                }

                const response = await axiosPublic.post('/payment', payment);
                const result = response.data;
                console.log(result);

                if (result.success) {
                    console.log('Submitted successfully', result.message);
                    Swal.fire({
                        title: "Good job!",
                        text: "Thank you payment successfully",
                        icon: "success"
                    });
                } else {
                    console.error(result.error);
                    setError(`Payment failed: ${result.error}`);
                }
            } catch (axiosError) {
                console.error('Axios error:', axiosError);
                setError('An error occurred. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-gray-300 rounded-md shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Biodata ID:</label>
                    <input
                        type="text"
                        value={biodataId}
                        readOnly
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Self Biodata ID:</label>
                    <input
                        type="text"
                        value={selfBiodataId}
                        readOnly
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Self Email:</label>
                    <input
                        type="email"
                        value={selfEmail}
                        readOnly
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Card details:</label>
                    {/* Assuming CardElement is styled elsewhere */}
                    <CardElement />
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Pay 500 Tk
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
