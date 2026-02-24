import React from 'react';
import ProductGrid from '../../../components/products/ProductGrid';

const AmazonPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-pink-600">Amazon Products</h1>
            <p className="text-gray-700">Explore our selection of products available for ordering from Amazon.</p>
            <ProductGrid platform="amazon" />
        </div>
    );
};

export default AmazonPage;