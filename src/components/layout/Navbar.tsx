import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-pink-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">Dolunay</Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="/temu" className="text-white hover:text-gold">Temu</Link>
                    <Link href="/shein" className="text-white hover:text-gold">Shein</Link>
                    <Link href="/amazon" className="text-white hover:text-gold">Amazon</Link>
                    <Link href="/productos" className="text-white hover:text-gold">Productos</Link>
                    <Link href="/solicitar" className="text-white hover:text-gold">Solicitar</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;