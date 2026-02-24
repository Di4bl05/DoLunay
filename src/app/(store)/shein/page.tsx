import React from 'react';
import ProductGrid from '../../../components/products/ProductGrid';

const SheinPage = () => {
    return (
        <div className="shein-section">
            <h1 className="text-pink-500">Shein Products</h1>
            <p className="text-black">Explore our curated selection of products from Shein.</p>
            <ProductGrid category="shein" />
        </div>
    );
};

export default SheinPage;