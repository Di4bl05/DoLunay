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
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-16 h-16 mr-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.5 8.5l-3-3-6.5 6.5-6.5-6.5-3 3 6.5 6.5-6.5 6.5 3 3 6.5-6.5 6.5 6.5 3-3-6.5-6.5z"/>
                        </svg>
                        <h1 className="text-5xl font-bold">Shein</h1>
                    </div>
                    <p className="text-center text-xl opacity-90 max-w-2xl mx-auto">
                        Las últimas tendencias en moda al mejor precio
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12">
                {products.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
                            <svg className="w-24 h-24 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Próximamente</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Estamos curando la mejor selección de productos de Shein.
                                ¿Buscas algo en particular?
                            </p>
                            <a href="/solicitar" className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-all shadow-md hover:shadow-lg inline-block">
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

export default SheinPage;