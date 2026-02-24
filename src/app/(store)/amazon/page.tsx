import React from 'react';
import ProductGrid from '../../../components/products/ProductGrid';

const AmazonPage = () => {
    // TODO: Fetch products from API filtered by Amazon platform
    const products: Array<{
        id: string;
        title: string;
        price: number;
        image: string;
    }> = [];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-pink-600">Amazon Products</h1>
            <p className="text-gray-700">Explore our selection of products available for ordering from Amazon.</p>
            <ProductGrid products={products} />
        </div>
    );
};

export default AmazonPage;