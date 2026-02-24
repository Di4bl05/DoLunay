import React from 'react';
import ProductGrid from '../../../components/products/ProductGrid';
import { Product } from '@/types';

const TemuPage = () => {
    // TODO: Fetch products from API filtered by Temu platform
    const products: Product[] = [];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-16 h-16 mr-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                        <h1 className="text-5xl font-bold">Temu</h1>
                    </div>
                    <p className="text-center text-xl opacity-90 max-w-2xl mx-auto">
                        Productos increíbles a precios increíbles
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12">
                {products.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
                            <svg className="w-24 h-24 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Próximamente</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Estamos agregando los mejores productos de Temu.
                                ¿Ya sabes qué necesitas?
                            </p>
                            <a href="/solicitar" className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg inline-block">
                                Solicitar Producto
                            </a>
                        </div>
                    </div>
                ) : (
                    <ProductGrid products={products} />
                )}
            </div>
        </div>
    );
};

export default TemuPage;