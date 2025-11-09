import React from 'react';
import { Page } from '../App';

interface FooterProps {
    navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
    
    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
        e.preventDefault();
        navigate(page);
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate('home');

        setTimeout(() => {
            const targetId = e.currentTarget.getAttribute('href')?.substring(1);
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;

            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // 20px buffer

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }, 50);
    };

    const designerWhatsappMessage = encodeURIComponent("hi i saw this website you designed i would like to know more about your services");
    const designerWhatsappLink = `https://wa.me/263713952798?text=${designerWhatsappMessage}`;

    return (
        <footer className="footer-bg text-text-light-secondary dark:text-text-dark-secondary">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Brand & Newsletter */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => navigate('home')}>
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1147 9L0.884705 17.6593L0.884705 0.340721L15.1147 9Z" fill="white"></path>
                                </svg>
                            </div>
                            <span className="font-bold text-2xl text-text-light dark:text-text-dark">TECHLAUNCH</span>
                        </div>
                        <p className="mb-6">Your partner in launching and growing your business in Zimbabwe.</p>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-3">Stay Updated</h4>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full rounded-l-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 focus:ring-accent"
                            />
                            <button type="submit" className="bg-accent text-white px-4 rounded-r-md hover:bg-blue-500 transition-colors">
                                <span className="material-icons-outlined">send</span>
                            </button>
                        </form>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-4">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#service-company-registration" onClick={handleScroll} className="hover:text-accent transition-colors">Company Registration</a></li>
                            <li><a href="#service-tax-&-compliance" onClick={handleScroll} className="hover:text-accent transition-colors">Tax & Compliance</a></li>
                            <li><a href="#service-business-support" onClick={handleScroll} className="hover:text-accent transition-colors">Business Support</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" onClick={(e) => handleNavigation(e, 'home')} className="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#services" onClick={handleScroll} className="hover:text-accent transition-colors">Services</a></li>
                            <li><a href="#" onClick={(e) => handleNavigation(e, 'faqs')} className="hover:text-accent transition-colors">FAQs</a></li>
                            <li><a href="#" onClick={(e) => handleNavigation(e, 'contact')} className="hover:text-accent transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-accent transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="hover:text-accent transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} TECHLAUNCH. All rights reserved. Made in Zimbabwe.</p>
                    <p className="mt-2">
                        Website designed by <a href={designerWhatsappLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">BLACKGIFT TECH LABS</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;