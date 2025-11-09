import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../App';
import { searchData, popularSearches, SearchItem } from '../data/searchData';

interface EnhancedSearchBarProps {
    navigate: (page: Page) => void;
    page: Page;
    isMobile?: boolean;
    onMobileSelect?: () => void;
}

const EnhancedSearchBar: React.FC<EnhancedSearchBarProps> = ({ navigate, page, isMobile = false, onMobileSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<SearchItem[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchWrapperRef = useRef<HTMLDivElement>(null);
    
    const placeholders = [
        "Search 'PBC Registration'...",
        "Search 'VAT Registration'...",
        "Search 'Vendor Number'...",
        "Search 'Company Profiles'...",
        "Search 'NSSA Compliance'..."
    ];
    const [placeholder, setPlaceholder] = useState(placeholders[0]);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % placeholders.length;
            setPlaceholder(placeholders[currentIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (searchTerm.length > 1) {
            const lowerCaseTerm = searchTerm.toLowerCase();
            const filtered = searchData.filter(item =>
                item.title.toLowerCase().includes(lowerCaseTerm) ||
                item.keywords.some(kw => kw.toLowerCase().includes(lowerCaseTerm))
            );
            setResults(filtered);
            setShowSuggestions(true);
        } else {
            setResults([]);
            setShowSuggestions(false);
        }
    }, [searchTerm]);

    const handleNavigation = (item: SearchItem) => {
        setSearchTerm('');
        setShowSuggestions(false);
        if(onMobileSelect) onMobileSelect();

        const { page: targetPage, elementId } = item.navigation;

        if (page !== targetPage) {
            navigate(targetPage);
        }

        setTimeout(() => {
            if (elementId) {
                const element = document.getElementById(elementId);
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }, page !== targetPage ? 100 : 0); // Allow time for page switch
    };

    const hasResults = results.length > 0;
    const showNoResults = !hasResults && searchTerm.length > 1;

    return (
        <div className="relative w-full lg:w-96" ref={searchWrapperRef}>
            <div className="relative">
                 <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                <input
                    className={`w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-background-light dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ${isMobile ? 'text-lg py-3' : ''}`}
                    placeholder={isMobile ? 'Search TECHLAUNCH...' : placeholder}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => { if (searchTerm.length > 1) setShowSuggestions(true); }}
                />
            </div>

            {showSuggestions && (
                <div className="absolute top-full mt-2 w-full lg:w-96 rounded-lg shadow-2xl p-4 animate-curtain-reveal search-suggestions-enhanced overflow-hidden z-50">
                    {hasResults && (
                        <ul>
                            {results.slice(0, 5).map(item => (
                                <li key={item.title} onClick={() => handleNavigation(item)} className="p-3 flex items-center gap-4 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <span className="material-icons-outlined text-accent text-2xl">{item.icon}</span>
                                    <div>
                                        <p className="font-semibold text-text-light dark:text-text-dark">{item.title}</p>
                                        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">{item.category}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}

                    {showNoResults && (
                        <div>
                             <div className="text-center py-4">
                                <p className="font-semibold text-text-light dark:text-text-dark">No results for "{searchTerm}"</p>
                                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Try searching for something else.</p>
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                            <h4 className="font-bold text-text-light dark:text-text-dark my-3 px-2">Most Popular Searches</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {popularSearches.map(item => (
                                    <div key={item.title} onClick={() => handleNavigation(item)} className="p-3 text-center rounded-md cursor-pointer popular-search-card">
                                        <span className="material-icons-outlined text-accent text-3xl mb-1">{item.icon}</span>
                                        <p className="text-sm font-semibold text-text-light dark:text-text-dark">{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default EnhancedSearchBar;