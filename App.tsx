import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FaqsPage from './pages/FaqsPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

export type Page = 'home' | 'faqs' | 'contact' | 'pricing';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('home');
    const [theme, setTheme] = useState<Theme>(() => {
        // This is safe to run on client-side and avoids SSR issues.
        // The script in index.html handles the initial server-render look.
        if (typeof window !== 'undefined') {
            const savedTheme = window.localStorage.getItem('theme');
            if (savedTheme) return savedTheme as Theme;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    const navigate = (targetPage: Page) => {
        setPage(targetPage);
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        try {
            window.localStorage.setItem('theme', theme);
        } catch (e) {
            // Local storage might be disabled
        }
    }, [theme]);

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        // We re-query elements on page change to catch new elements
        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [page]); // Re-run effect when page changes

    return (
        <div className="relative min-h-screen">
            <Header navigate={navigate} page={page} theme={theme} toggleTheme={toggleTheme} />
            <main>
                {page === 'home' && (
                    <>
                        <Hero />
                        <Services />
                        <CtaSection navigate={navigate} />
                    </>
                )}
                {page === 'faqs' && <FaqsPage navigate={navigate} />}
                {page === 'contact' && <ContactPage navigate={navigate} />}
                {page === 'pricing' && <PricingPage />}
            </main>
            <Footer navigate={navigate} />
            <ChatButton />
        </div>
    );
};

export default App;