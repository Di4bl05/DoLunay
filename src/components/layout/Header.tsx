'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-white rounded-full p-2 shadow-md group-hover:shadow-xl transition-shadow">
                            <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.25-.94-6-4.6-6-8.5V8.3l6-3.11v15.31z"/>
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">Dolunay Store</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-yellow-300 transition-colors font-medium">
                            Inicio
                        </Link>
                        <Link href="/#productos" className="text-white hover:text-yellow-300 transition-colors font-medium">
                            Productos
                        </Link>
                        <Link href="/solicitar" className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-pink-700 transition-all shadow-md hover:shadow-lg">
                            Solicitar Producto
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        <nav className="flex flex-col space-y-3">
                            <Link href="/" className="text-white hover:text-yellow-300 transition-colors font-medium py-2">
                                Inicio
                            </Link>
                            <Link href="/#productos" className="text-white hover:text-yellow-300 transition-colors font-medium py-2">
                                Productos
                            </Link>
                            <Link href="/solicitar" className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-pink-700 transition-all text-center">
                                Solicitar Producto
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;