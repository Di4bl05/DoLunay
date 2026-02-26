import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 p-4 shadow-lg border-b border-purple-700">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 relative transform group-hover:scale-110 transition-transform duration-300">
                        <Image 
                            src="/images/dolunay-icon.svg" 
                            alt="Dolunay Logo" 
                            width={48} 
                            height={48}
                            className="drop-shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-xl font-bold tracking-wide">Dolunay</span>
                        <span className="text-yellow-300 text-xs font-semibold">LUNA LLENA</span>
                    </div>
                </Link>
                <div className="flex space-x-6">
                    <Link href="/temu" className="text-white hover:text-yellow-300 transition-colors font-medium">Temu</Link>
                    <Link href="/shein" className="text-white hover:text-yellow-300 transition-colors font-medium">Shein</Link>
                    <Link href="/amazon" className="text-white hover:text-yellow-300 transition-colors font-medium">Amazon</Link>
                    <Link href="/productos" className="text-white hover:text-yellow-300 transition-colors font-medium">Productos</Link>
                    <Link href="/solicitar" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg">Solicitar</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;