'use client';

import React, { useState } from 'react';

const RequestForm = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        // Here you would typically send the request to your API
        try {
            const response = await fetch('/api/solicitudes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productName, description, email }),
            });

            if (response.ok) {
                setSuccessMessage('Your request has been submitted successfully!');
                setProductName('');
                setDescription('');
                setEmail('');
            } else {
                throw new Error('Failed to submit request');
            }
        } catch {
            setErrorMessage('There was an error submitting your request. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Request Unavailable Product</h2>
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="mb-4">
                <label className="block mb-2" htmlFor="productName">Product Name</label>
                <input
                    type="text"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                    className="border rounded w-full p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2" htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="border rounded w-full p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2" htmlFor="email">Your Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border rounded w-full p-2"
                />
            </div>
            <button type="submit" className="bg-pink-500 text-white rounded p-2">Submit Request</button>
        </form>
    );
};

export default RequestForm;