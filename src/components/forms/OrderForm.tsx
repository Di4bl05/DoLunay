import React, { useState } from 'react';

const OrderForm = () => {
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!productId || quantity <= 0) {
            setError('Please enter a valid product ID and quantity.');
            return;
        }
        setError('');
        // Logic to handle order submission goes here
        console.log(`Ordering ${quantity} of product ID: ${productId}`);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold">Order Form</h2>
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="text"
                placeholder="Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="border p-2"
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border p-2"
                min="1"
                required
            />
            <button type="submit" className="bg-pink-500 text-white p-2 rounded">
                Place Order
            </button>
        </form>
    );
};

export default OrderForm;