import React from 'react';
import { Page } from '../App';

interface ContactBannerProps {
    navigate: (page: Page) => void;
}

const ContactBanner: React.FC<ContactBannerProps> = ({ navigate }) => {
    
    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate('contact');
    };

    return (
        <section className="bg-background-light dark:bg-background-dark pb-20">
            <div className="container mx-auto px-6">
                <div className="bg-primary text-white p-8 md:p-12 rounded-lg text-center scroll-animate from-bottom">
                    <h2 className="text-3xl font-bold mb-4">Can't find an answer?</h2>
                    <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
                        Our team is ready to help. Contact us directly for any specific questions or for a personalized consultation.
                    </p>
                    <a 
                        href="#" 
                        onClick={handleNavigation}
                        className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-transform hover:scale-105 inline-block">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;