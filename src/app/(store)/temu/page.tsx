import React from 'react';
import ProductGrid from '../../../components/products/ProductGrid';

const TemuPage = () => {
    return (
        <div className="temu-section">
            <h1 className="text-pink-600">Temu Products</h1>
            <ProductGrid platform="temu" />
        </div>
    );
};

export default TemuPage;