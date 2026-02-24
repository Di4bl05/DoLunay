import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-pink-500 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Dolunay. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/terms" className="text-gold hover:underline">Terms of Service</a>
                    <span className="mx-2">|</span>
                    <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;