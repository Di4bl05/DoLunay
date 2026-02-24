import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="flex items-center">
                    <Image src={logo} alt="Dolunay Logo" width={150} height={50} />
                </Link>
                <nav className="flex space-x-4">
                    <Link href="/temu" className="text-black hover:text-pink-500">Temu</Link>
                    <Link href="/shein" className="text-black hover:text-pink-500">Shein</Link>
                    <Link href="/amazon" className="text-black hover:text-pink-500">Amazon</Link>
                    <Link href="/productos" className="text-black hover:text-pink-500">Productos</Link>
                    <Link href="/solicitar" className="text-black hover:text-pink-500">Solicitar</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;