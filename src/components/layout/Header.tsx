'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 shadow-lg sticky top-0 z-50 border-b-2 border-purple-700">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-300 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative text-4xl animate-[float_3s_ease-in-out_infinite]">
                                🌕
                            </div>
                        </div>
                        <div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent tracking-tight">Dolunay Store</span>
                            <p className="text-xs text-purple-200">Luna Llena ✨</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-purple-100 hover:text-yellow-300 transition-colors font-medium flex items-center gap-1">
                            🏠 Inicio
                        </Link>
                        <Link href="/productos" className="text-purple-100 hover:text-yellow-300 transition-colors font-medium flex items-center gap-1">
                            🌟 Productos
                        </Link>
                        <Link href="/solicitar" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-md hover:shadow-lg">
                            ✨ Solicitar
                        </Link>
                        <Link href="/admin" className="text-purple-200 hover:text-white transition-colors text-sm flex items-center gap-1">
                            🔒 Admin
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