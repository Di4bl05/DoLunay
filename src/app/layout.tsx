import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './globals.css';

export const metadata = {
    title: 'Dolunay Store',
    description: 'Tu tienda de productos de Amazon, Shein y Temu',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="es">
            <body>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;