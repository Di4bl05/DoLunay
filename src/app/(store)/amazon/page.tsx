import React from 'react';
import ProductGrid from '../../../components/products/ProductGrid';
import { Product } from '@/types';

const AmazonPage = () => {
    // TODO: Fetch products from API filtered by Amazon platform
    const products: Product[] = [];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-16 h-16 mr-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.257.19-.61.41-1.006.654-1.244.773-2.772 1.462-4.593 2.069-1.822.605-3.612.91-5.368.91-3.27 0-6.27-.757-9.003-2.27a27.113 27.113 0 01-1.57-1.06c-.163-.127-.212-.24-.138-.405zm14.148-5.087c0 .853.35 1.276 1.052 1.276.48 0 .977-.142 1.493-.425v1.842c-.503.2-1.037.3-1.604.3-1.433 0-2.15-.773-2.15-2.32v-5.38h-1.226v-1.842h1.226v-1.964l2.21-.654v2.618h1.87v1.842h-1.87v5.707z"/>
                        </svg>
                        <h1 className="text-5xl font-bold">Amazon</h1>
                    </div>
                    <p className="text-center text-xl opacity-90 max-w-2xl mx-auto">
                        Compra millones de productos de Amazon con envío a tu puerta
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12">
                {products.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
                            <svg className="w-24 h-24 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Próximamente</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Estamos preparando un catálogo increíble de productos de Amazon.
                                ¿Tienes algo específico en mente?
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

export default AmazonPage;