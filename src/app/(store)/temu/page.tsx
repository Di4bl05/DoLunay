import React from 'react';
import ProductGrid from '../../../components/products/ProductGrid';

const TemuPage = () => {
    // TODO: Fetch products from API filtered by Temu platform
    const products: Array<{
        id: string;
        title: string;
        price: number;
        image: string;
    }> = [];

    return (
        <div className="temu-section">
            <h1 className="text-pink-600">Temu Products</h1>
            <ProductGrid products={products} />
        </div>
    );
};

export default TemuPage;