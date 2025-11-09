import React, { useState, useEffect } from 'react';
import { Page, Theme } from '../App';
import EnhancedSearchBar from './EnhancedSearchBar';
import ThemeToggle from './ThemeToggle';

const megaMenuData = {
    coreServices: [
        { icon: "assignment", title: "Company Registration", description: "Establish your legal business entity.", href: "#service-company-registration" },
        { icon: "verified", title: "Tax & Compliance", description: "Stay ahead of regulations and penalties.", href: "#service-tax--compliance" },
    ],
    supportServices: [
        { icon: "business_center", title: "Business Support", description: "Services to build and grow operations.", href: "#service-business-support" },
    ],
    quickLinks: [
        { icon: "help_outline", title: "FAQs", description: "Find answers to common questions.", page: "faqs" as Page },
        { icon: "contact_support", title: "Contact Us", description: "Get in touch with our expert team.", page: "contact" as Page },
    ]
};

const mobileServicesMenuData = [
    { title: "Company Registration", href: "#service-company-registration" },
    { title: "Tax & Compliance", href: "#service-tax--compliance" },
    { title: "Business Support", href: "#service-business-support" },
];

interface NavLinksProps {
    className?: string;
    isMobile?: boolean;
    onLinkClick?: () => void;
    navigate: (page: Page) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ className, isMobile = false, onLinkClick, navigate }) => {
    const [isServicesOpen, setServicesOpen] = useState(false);

    const handleNavigation = (e: React.MouseEvent<HTMLElement>, page: Page) => {
        e.preventDefault();
        navigate(page);
        if (onLinkClick) onLinkClick();
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // First, ensure we are on the home page
        navigate('home');
        
        // Use a timeout to allow the page to switch before scrolling
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
        }, 50); // Small delay

        if (onLinkClick) {
            onLinkClick();
        }
    };
    
    const serviceLinks = mobileServicesMenuData.map(item => (
        <a key={item.title} href={item.href} onClick={handleScroll} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">{item.title}</a>
    ));

    if (isMobile) {
        return (
             <div className={className}>
                <a className="hover:text-accent transition-colors" href="#" onClick={(e) => handleNavigation(e, 'home')}>Home</a>
                <div>
                    <button 
                        className="w-full text-left flex justify-between items-center hover:text-accent transition-colors" 
                        onClick={() => setServicesOpen(!isServicesOpen)}
                        aria-haspopup="true"
                        aria-expanded={isServicesOpen}
                    >
                        <span>Services</span>
                        <span className={`material-icons-outlined transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>expand_more</span>
                    </button>
                    {isServicesOpen && (
                        <div className="pl-4 mt-4 space-y-4 flex flex-col animate-dropdown-in">
                           {serviceLinks}
                        </div>
                    )}
                </div>
                <a className="hover:text-accent transition-colors" href="#" onClick={(e) => handleNavigation(e, 'faqs')}>FAQs</a>
                <a className="hover:text-accent transition-colors" href="#" onClick={(e) => handleNavigation(e, 'contact')}>Contact Us</a>
            </div>
        );
    }
    
    return (
        <div className={className}>
            <a className="hover:text-accent transition-colors" href="#" onClick={(e) => handleNavigation(e, 'home')}>Home</a>
            <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
            >
                <button 
                    className="flex items-center hover:text-accent transition-colors cursor-pointer" 
                    onClick={(e) => { e.preventDefault(); navigate('home'); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 50)}}
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                >
                    Services
                    <span className="material-icons-outlined text-base ml-1">expand_more</span>
                </button>
                {isServicesOpen && (
                     <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[56rem] mega-menu-bg rounded-xl shadow-2xl p-6 z-10 animate-dropdown-in">
                        <div className="grid grid-cols-5 gap-6">
                            {/* Left Side */}
                            <div className="col-span-3 grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-sm uppercase tracking-wider text-text-light-secondary dark:text-text-dark-secondary px-3">Core Services</h3>
                                    <div className="space-y-1">
                                        {megaMenuData.coreServices.map(item => (
                                            <a key={item.title} href={item.href} onClick={(e) => { handleScroll(e); setServicesOpen(false); }} className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                                                <div className="bg-accent/10 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                                                    <span className="material-icons-outlined text-accent text-xl">{item.icon}</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-text-light dark:text-text-dark">{item.title}</p>
                                                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">{item.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-sm uppercase tracking-wider text-text-light-secondary dark:text-text-dark-secondary px-3">Support & More</h3>
                                    <div className="space-y-1">
                                        {megaMenuData.supportServices.map(item => (
                                            <a key={item.title} href={item.href} onClick={(e) => { handleScroll(e); setServicesOpen(false); }} className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                                                <div className="bg-accent/10 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                                                    <span className="material-icons-outlined text-accent text-xl">{item.icon}</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-text-light dark:text-text-dark">{item.title}</p>
                                                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">{item.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                        <div className="!my-3 border-t border-gray-200 dark:border-gray-700"></div>
                                        {megaMenuData.quickLinks.map(item => (
                                             <a key={item.title} href="#" onClick={(e) => { handleNavigation(e, item.page); setServicesOpen(false); }} className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                                                <div className="bg-accent/10 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                                                    <span className="material-icons-outlined text-accent text-xl">{item.icon}</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-text-light dark:text-text-dark">{item.title}</p>
                                                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">{item.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side CTA */}
                            <div className="col-span-2 bg-primary/5 dark:bg-accent/5 rounded-lg p-6 flex flex-col justify-center items-center text-center">
                                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mb-4">
                                     <span className="material-icons-outlined text-3xl">sell</span>
                                </div>
                                <h4 className="font-bold text-lg text-primary dark:text-accent mb-2">Have a specific need?</h4>
                                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mb-4">Our pricing page details all services, from ITF263 to Vendor Numbers.</p>
                                <button 
                                    onClick={(e) => {
                                        handleNavigation(e, 'pricing');
                                        setServicesOpen(false);
                                    }} 
                                    className="bg-accent text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-500 transition-colors text-sm w-full"
                                >
                                    See All Services & Prices
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <a className="hover:text-accent transition-colors" href="#" onClick={(e) => handleNavigation(e, 'faqs')}>FAQs</a>
            <a className="hover:text-accent transition-colors" href="#" onClick={(e) => handleNavigation(e, 'contact')}>Contact Us</a>
        </div>
    );
};

type MenuState = 'closed' | 'opening' | 'open' | 'closing';

interface HeaderProps {
    navigate: (page: Page) => void;
    page: Page;
    theme: Theme;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ navigate, page, theme, toggleTheme }) => {
    const [menuState, setMenuState] = useState<MenuState>('closed');
    const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);

    const openMenu = () => setMenuState('opening');
    const closeMenu = () => setMenuState('closing');

    // Durations should match CSS animations
    const MENU_CONTAINER_ANIMATION_DURATION = 500;
    const MENU_ITEMS_EXIT_ANIMATION_DURATION = 400;
    const MENU_CLOSE_ANIMATION_TOTAL = MENU_CONTAINER_ANIMATION_DURATION + MENU_ITEMS_EXIT_ANIMATION_DURATION;

    useEffect(() => {
        if (menuState === 'opening' || isMobileSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else if (menuState === 'closed' && !isMobileSearchOpen) {
            document.body.style.overflow = '';
        }

        if (menuState === 'opening') {
            const timer = setTimeout(() => setMenuState('open'), MENU_CONTAINER_ANIMATION_DURATION);
            return () => clearTimeout(timer);
        }
        if (menuState === 'closing') {
            const timer = setTimeout(() => {
                setMenuState('closed');
            }, MENU_CLOSE_ANIMATION_TOTAL);
            return () => clearTimeout(timer);
        }
    }, [menuState, isMobileSearchOpen]);

    const handleNavigation = (e: React.MouseEvent<HTMLElement>, page: Page) => {
        e.preventDefault();
        navigate(page);
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md animate-header-drop">
                <div className="container mx-auto px-6">
                    {/* Top Tier: Logo, Search, Sign In */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <div className="header-logo flex items-center space-x-2 cursor-pointer" onClick={() => navigate('home')}>
                            <div className="logo-icon-wrapper w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1147 9L0.884705 17.6593L0.884705 0.340721L15.1147 9Z" fill="white"></path>
                                </svg>
                            </div>
                            <span className="font-bold text-2xl text-text-light dark:text-text-dark">TECHLAUNCH</span>
                        </div>

                        {/* Desktop: Search & Sign in */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <EnhancedSearchBar navigate={navigate} page={page} />
                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        </div>
                        
                        {/* Mobile: Search & Hamburger Icons */}
                        <div className="lg:hidden flex items-center space-x-2">
                            <button className="text-text-light dark:text-text-dark" onClick={() => setMobileSearchOpen(true)}>
                                <span className="material-icons-outlined text-3xl">search</span>
                            </button>
                            <button className="text-text-light dark:text-text-dark" onClick={openMenu}>
                                <span className="material-icons-outlined text-3xl">menu</span>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Tier: Nav Links, Action Buttons */}
                    <div className="hidden lg:flex items-center justify-between py-3">
                        <NavLinks className="flex items-center space-x-8 text-gray-600 dark:text-gray-300" navigate={navigate} />
                        <div className="flex items-center space-x-4">
                             <button onClick={(e) => handleNavigation(e, 'contact')} className="px-5 py-2 border border-primary dark:border-accent rounded-full text-primary dark:text-accent hover:bg-primary/10 dark:hover:bg-accent/10 transition-colors">Contact sales</button>
                            <button onClick={() => navigate('pricing')} className="bg-accent text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-500 transition-colors">
                                <span>View Pricing</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Search Overlay */}
            {isMobileSearchOpen && (
                <div className="fixed inset-0 z-50 lg:hidden mobile-search-overlay p-6 animate-overlay-in">
                    <div className="flex justify-end mb-6">
                         <button onClick={() => setMobileSearchOpen(false)} className="text-text-light dark:text-text-dark">
                            <span className="material-icons-outlined text-4xl">close</span>
                        </button>
                    </div>
                    <EnhancedSearchBar navigate={navigate} page={page} isMobile={true} onMobileSelect={() => setMobileSearchOpen(false)} />
                </div>
            )}

            {/* Enhanced Mobile Menu */}
            {menuState !== 'closed' && (
                <div
                    className={`fixed inset-0 z-50 lg:hidden ${
                        (menuState === 'opening' || menuState === 'open') ? 'animate-overlay-in' : 'animate-overlay-out'
                    }`}
                    onClick={closeMenu}
                >
                    <div
                        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background-light dark:bg-background-dark shadow-2xl flex flex-col ${
                           menuState === 'opening' ? 'animate-book-open' : ''
                        } ${
                           menuState === 'closing' ? 'animate-book-close' : ''
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-8 p-6 pb-0">
                             <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary">Theme</span>
                                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                             </div>
                            <button onClick={closeMenu} className="text-text-light dark:text-text-dark">
                                <span className="material-icons-outlined text-3xl">close</span>
                            </button>
                        </div>

                        <div className={`flex-grow flex flex-col px-6 pb-6 overflow-hidden ${
                            menuState === 'open' ? 'animate-children-in' : ''
                        } ${
                            menuState === 'closing' ? 'animate-children-out' : ''
                        }`}>
                            <NavLinks
                                className="flex flex-col space-y-6 text-xl"
                                isMobile={true}
                                onLinkClick={closeMenu}
                                navigate={navigate}
                            />
                            <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-4">
                                <button onClick={(e) => { handleNavigation(e, 'contact'); closeMenu(); }} className="text-center px-5 py-3 border border-primary dark:border-accent rounded-full text-primary dark:text-accent hover:bg-primary/10 dark:hover:bg-accent/10 transition-colors">Contact sales</button>
                                <button onClick={() => { navigate('pricing'); closeMenu(); }} className="text-center bg-accent text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors">
                                    <span>View Pricing</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;