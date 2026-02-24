import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';

const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default AdminLayout;