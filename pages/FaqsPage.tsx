import React, { useState, useMemo } from 'react';
import ContactBanner from '../components/ContactBanner';
import { Page } from '../App';

const faqData = [
    {
        category: "General Questions",
        icon: "help_outline",
        items: [
            {
                question: "What services does TECHLAUNCH provide?",
                answer: "TECHLAUNCH is a comprehensive business services provider in Zimbabwe. Our core mission is to simplify the process of starting and running a business. We specialize in company registration (both Private Limited Companies and Private Business Corporations), tax registration and compliance with ZIMRA (including ITF263, VAT, and Vendor Numbers), and a wide range of business support services like tender document preparation, licensing, and compliance with bodies like NSSA and PRAZ. We handle the administrative burden so you can focus on your core business operations."
            },
            {
                question: "Who is your typical client?",
                answer: "We serve a diverse range of clients, from aspiring entrepreneurs taking their first step, to small and medium-sized enterprises (SMEs) looking to formalize and grow, to established companies needing ongoing compliance support. Whether you're a local Zimbabwean or part of the diaspora looking to invest back home, our services are tailored to meet your specific needs for establishing a legitimate and compliant business entity."
            },
            {
                question: "How are your prices determined and what payment methods do you accept?",
                answer: "Our pricing is transparent and competitive. For standard services like company registration or obtaining an ITF263, we have fixed fees which are listed on our Services section. For more complex or ongoing work like bookkeeping or tender preparation, we provide a custom quote based on the scope of work. We accept various payment methods including local bank transfers, EcoCash, and international payment options for our diaspora clients. All fees are communicated upfront with no hidden costs."
            },
        ]
    },
    {
        category: "Company Registration",
        icon: "assignment",
        items: [
            {
                question: "What's the difference between a PBC and a PLC?",
                answer: "This is a crucial first decision. A Private Business Corporation (PBC) is designed for simplicity and is ideal for small businesses, startups, and sole traders who want a formal structure with limited liability. It's cheaper, has fewer compliance requirements, and can be run by 1 to 20 members. A Private Limited Company (PLC) is more structured and is the preferred choice for businesses aiming for significant growth, seeking investment, or requiring a more traditional corporate structure. It can have up to 50 shareholders (who are separate from directors) and has more stringent compliance obligations, such as holding annual general meetings."
            },
            {
                question: "How long does the company registration process take?",
                answer: "The timeline depends on the company type and the efficiency of the Companies Registry at the time. Generally, a PBC registration is faster, typically taking 3-5 business days. A PLC registration is more involved and usually takes between 7-10 business days. These timelines are estimates and assume that all required documents (like certified IDs and proof of address) are submitted correctly and promptly. We manage the process to ensure it moves as quickly as possible."
            },
            {
                question: "What documents do I need to provide for registration?",
                answer: "To begin the process, we require a few key documents from all proposed directors/members. These include: <ul><li>Clear, certified copies of National IDs, Passports, or Driver's Licenses.</li><li>Proof of residential address for each director (a recent utility bill, bank statement, or affidavit is usually sufficient).</li><li>A list of 3-5 unique proposed company names, in order of preference.</li></ul> We will provide you with all the necessary official forms (like the CR2, CR5, etc.) and guide you on how to complete them accurately."
            },
            {
                question: "What happens after my company is successfully registered?",
                answer: "Congratulations! Once registered, you will receive your official company documents, including the Certificate of Incorporation. However, this is just the beginning. The next critical steps, which we can assist with, are: <ul><li>Opening a corporate bank account.</li><li>Registering with ZIMRA for a BP Number (tax number) and obtaining your initial ITF263 Tax Clearance certificate.</li><li>Registering with NSSA if you plan to have employees.</li><li>Setting up your accounting and bookkeeping systems.</li></ul> Being registered is the first step; becoming fully compliant is the next, and we're here to guide you through it all."
            }
        ]
    },
    {
        category: "Tax & Compliance",
        icon: "verified",
        items: [
            {
                question: "What is an ITF263 (Tax Clearance) and why do I need it?",
                answer: "An ITF263 is a Tax Clearance Certificate issued by the Zimbabwe Revenue Authority (ZIMRA). It is one of the most critical documents for any operating business. It serves as proof that your company's tax affairs are up-to-date and in good order. Its primary benefit is financial: without a valid ITF263, any company you conduct business with is legally obligated to withhold 30% of your payment and remit it directly to ZIMRA. This can severely impact your cash flow. A valid tax clearance ensures you receive 100% of your invoiced amounts."
            },
            {
                question: "Do I need a Vendor Number to do business?",
                answer: "A Vendor Number is absolutely essential if you plan to supply goods or services to the Zimbabwean Government, government-related entities, or many large corporations. It is your registration number in the public procurement database. Without it, you are ineligible to participate in public tenders or be awarded government contracts. We facilitate the entire application process, which requires an initial supplier assessment and valid company documents."
            },
            {
                question: "What are the penalties for non-compliance?",
                answer: "Non-compliance with statutory bodies like ZIMRA and NSSA can lead to severe penalties that can cripple a small business. These can include: <ul><li>Hefty financial fines and interest charges on unpaid taxes or contributions.</li><li>Garnishee orders placed on your company bank accounts.</li><li>Inability to obtain a Tax Clearance (ITF263), leading to 30% withholding tax on all payments.</li><li>Ineligibility for government tenders and contracts.</li><li>In severe cases, legal action against the company and its directors.</li></ul> Our compliance services are designed to protect you from these risks and ensure your business operates smoothly."
            },
        ]
    },
    {
        category: "Business Support",
        icon: "business_center",
        items: [
            {
                question: "How do you help with Tender Document Preparation?",
                answer: "Winning tenders requires meticulous preparation. Our service goes beyond just filling out forms. We assist you in: <ul><li>Thoroughly understanding the tender requirements (RFQ/RFP).</li><li>Compiling all necessary compliance documents (Company Docs, ZIMRA, PRAZ, NSSA).</li><li>Structuring and formatting your bid document professionally to ensure it is clear, compelling, and fully compliant.</li><li>Advising on pricing strategies to make your bid competitive.</li></ul> A well-prepared tender document significantly increases your chances of being shortlisted and winning the contract."
            },
            {
                question: "What design services do you offer for startups?",
                answer: "A strong brand identity is crucial for a new business. Our graphic design services are tailored for startups and include: <ul><li><b>Logo Design:</b> Creating a unique and memorable logo that represents your brand's values.</li><li><b>Company Profile Design:</b> Developing a professional, multi-page document that showcases your company's history, services, and capabilities – essential for clients and tenders.</li><li><b>Business Card & Letterhead Design:</b> Ensuring all your official correspondence is consistently branded and professional.</li></ul>"
            },
            {
                question: "Is getting a Shop or Liquor license a complicated process?",
                answer: "The process can be bureaucratic and time-consuming if you're unfamiliar with it. It involves applications to the local council and adherence to specific health, safety, and zoning regulations. We simplify this for you by managing the entire application process. We ensure all paperwork is correctly filed, liaise with the relevant authorities, and guide you through any required inspections, making the path to obtaining your license as smooth as possible."
            }
        ]
    }
];

const FaqItem: React.FC<{ faq: any; isOpen: boolean; onClick: () => void; }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className={`faq-accordion-item mb-4 ${isOpen ? 'open' : ''}`}>
            <button
                onClick={onClick}
                className="faq-accordion-question w-full flex items-center text-left p-4 md:p-6 text-base md:text-lg font-medium text-text-light dark:text-text-dark focus:outline-none"
                aria-expanded={isOpen}
            >
                <div className="faq-accordion-icon w-8 h-8 rounded-full bg-accent/10 dark:bg-accent/20 text-accent flex items-center justify-center mr-4">
                    <span className="material-icons-outlined text-xl">add</span>
                </div>
                <span>{faq.question}</span>
            </button>
            <div className="faq-accordion-answer">
                <div className="text-gray-600 dark:text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
            </div>
        </div>
    );
};

interface FaqsPageProps {
    navigate: (page: Page) => void;
}

const FaqsPage: React.FC<FaqsPageProps> = ({ navigate }) => {
    const [openFaq, setOpenFaq] = useState<string | null>(faqData[0].items[0].question);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState(faqData[0].category);
    const [suggestions, setSuggestions] = useState<{ question: string; answer: string; }[]>([]);

    const allFaqs = useMemo(() => faqData.flatMap(cat => cat.items), []);

    const filteredFaqs = useMemo(() => {
        if (!searchTerm) return faqData;
        
        const lowercasedFilter = searchTerm.toLowerCase();
        return faqData.map(category => ({
            ...category,
            items: category.items.filter(item =>
                item.question.toLowerCase().includes(lowercasedFilter) ||
                item.answer.toLowerCase().includes(lowercasedFilter)
            )
        })).filter(category => category.items.length > 0);
    }, [searchTerm]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 1) {
            const filteredSuggestions = allFaqs.filter(faq => 
                faq.question.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };
    
    const slugify = (text: string) => {
        return text
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w-]+/g, ''); // Remove all non-word chars
    };

    const handleSuggestionClick = (faq: { question: string; answer: string; }) => {
        const elementId = slugify(faq.question);
        const element = document.getElementById(elementId);

        if (element) {
            // Set the active FAQ to expand it
            setOpenFaq(faq.question);

            // Scroll to it
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
        
        // Reset search
        setSearchTerm('');
        setSuggestions([]);
    };

    const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, category: string) => {
        e.preventDefault();
        setActiveCategory(category);
        const element = document.getElementById(`faq-category-${category.replace(/ & /g, '-').replace(/ /g, '-')}`);
        if(element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    };
    
    return (
        <div>
            {/* Hero Section */}
            <section className="faq-hero py-20 md:py-32 text-white text-center">
                <div className="relative container mx-auto px-6 z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">How can we help?</h1>
                    <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto mb-8">
                        Find answers to your questions about company registration, tax, and compliance in Zimbabwe.
                    </p>
                    <div className="relative max-w-xl mx-auto">
                        <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input
                            type="text"
                            placeholder="Search for a question..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onBlur={() => setTimeout(() => setSuggestions([]), 200)}
                            className="w-full pl-12 pr-4 py-3 text-lg rounded-full bg-white/90 dark:bg-background-dark/80 text-text-light dark:text-text-dark border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                         {suggestions.length > 0 && searchTerm.length > 1 && (
                            <div className="search-suggestions text-left animate-dropdown-in">
                                {suggestions.map(faq => (
                                    <div
                                        key={faq.question}
                                        className="suggestion-item"
                                        onMouseDown={() => handleSuggestionClick(faq)}
                                    >
                                        {faq.question}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-background-light dark:bg-background-dark">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* Sticky Sidebar */}
                        <aside className="lg:w-1/4">
                            <div className="sticky top-28">
                                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-6">Categories</h3>
                                <nav className="faq-category-sidebar flex flex-row flex-wrap gap-x-6 gap-y-4 lg:flex-col lg:space-y-4">
                                    {faqData.map(cat => (
                                        <a 
                                            key={cat.category} 
                                            href="#"
                                            onClick={(e) => handleCategoryClick(e, cat.category)}
                                            className={`font-medium text-lg text-gray-600 dark:text-gray-400 hover:text-accent ${activeCategory === cat.category ? 'active' : ''}`}
                                        >
                                            {cat.category}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Accordion Content */}
                        <div className="lg:w-3/4">
                            {filteredFaqs.map(category => (
                                <div key={category.category} id={`faq-category-${category.category.replace(/ & /g, '-').replace(/ /g, '-')}`} className="mb-12 scroll-animate from-bottom">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="material-icons-outlined text-4xl text-primary">{category.icon}</span>
                                        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">{category.category}</h2>
                                    </div>
                                    {category.items.length > 0 ? (
                                        category.items.map(faq => (
                                            <div id={slugify(faq.question)} key={faq.question}>
                                                <FaqItem
                                                    faq={faq}
                                                    isOpen={openFaq === faq.question}
                                                    onClick={() => setOpenFaq(openFaq === faq.question ? null : faq.question)}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 pl-4">No matching questions in this category.</p>
                                    )}
                                </div>
                            ))}
                             {filteredFaqs.length === 0 && (
                                <div className="text-center py-16">
                                    <span className="material-icons-outlined text-7xl text-gray-400 mb-4">search_off</span>
                                    <h3 className="text-2xl font-bold mb-2">No Results Found</h3>
                                    <p className="text-gray-500">We couldn't find any answers matching your search. Please try different keywords.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactBanner navigate={navigate} />
        </div>
    );
};

export default FaqsPage;