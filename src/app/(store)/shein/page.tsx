import React from 'react';
import ProductGrid from '../../../components/products/ProductGrid';

const SheinPage = () => {
    // TODO: Fetch products from API filtered by Shein platform
    const products: Array<{
        id: string;
        title: string;
        price: number;
        image: string;
    }> = [];

    return (
        <div className="shein-section">
            <h1 className="text-pink-500">Shein Products</h1>
            <p className="text-black">Explore our curated selection of products from Shein.</p>
            <ProductGrid products={products} />
        </div>
    );
};

export default SheinPage;