import React from 'react';

const Badge: React.FC = () => {
    const text = "Get your business registered fast and easy";
    return (
        <div className="relative inline-block py-2 px-4 rounded-full overflow-hidden mb-6 scroll-animate from-left">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-badge-bg"></div>
            <div className="relative z-10 text-sm font-semibold text-white">
                {text.split("").map((char, i) => (
                    <span key={i} className="animate-badge-char" style={{ animationDelay: `${i * 0.025}s` }}>
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Hero: React.FC = () => {
    const handleScrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center px-6 overflow-hidden" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200&auto=format&fit=crop')" }}
        >
            {/* Darkening & Blur Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-3xl flex flex-col items-center">
                <Badge />
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 scroll-animate from-bottom" style={{transitionDelay: '200ms'}}>
                    Streamline Your Business Launch in Zimbabwe.
                </h1>
                <p className="text-lg text-gray-200 mb-10 scroll-animate from-bottom" style={{transitionDelay: '400ms'}}>
                    From company registration to tax compliance, we provide the essential services you need to establish and grow your business with confidence. Let us handle the paperwork so you can focus on what matters most.
                </p>
                
                <div className="container-plans-btn scroll-animate from-left" style={{transitionDelay: '600ms'}}>
                    <button className="button" onClick={handleScrollToServices}>
                        <div className="icon-arrow-sliding">
                            <div className="column" style={{'--delay': 1} as React.CSSProperties}>
                                <span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span>
                            </div>
                            <div className="column" style={{'--delay': 2} as React.CSSProperties}>
                                <span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span>
                            </div>
                            <div className="column" style={{'--delay': 3} as React.CSSProperties}>
                                <span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span>
                            </div>
                            <div className="column" style={{'--delay': 4} as React.CSSProperties}>
                                <span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span>
                            </div>
                            <div className="column" style={{'--delay': 5} as React.CSSProperties}>
                                <span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span>
                            </div>
                            <div className="column" style={{'--delay': 6} as React.CSSProperties}>
                                <span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span>
                            </div>
                            <div className="column" style={{'--delay': 7} as React.CSSProperties}>
                                <span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span><span className="cube"></span>
                            </div>
                        </div>
                        <div className="text normal">
                             <p>
                                <span data-label="E" style={{'--i': 1} as React.CSSProperties}>E</span>
                                <span data-label="x" style={{'--i': 2} as React.CSSProperties}>x</span>
                                <span data-label="p" style={{'--i': 3} as React.CSSProperties}>p</span>
                                <span data-label="l" style={{'--i': 4} as React.CSSProperties}>l</span>
                                <span data-label="o" style={{'--i': 5} as React.CSSProperties}>o</span>
                                <span data-label="r" style={{'--i': 6} as React.CSSProperties}>r</span>
                                <span data-label="e" style={{'--i': 7} as React.CSSProperties}>e</span>
                                <span data-label="M" style={{'--i': 8} as React.CSSProperties}>M</span>
                                <span data-label="o" style={{'--i': 9} as React.CSSProperties}>o</span>
                                <span data-label="r" style={{'--i': 10} as React.CSSProperties}>r</span>
                                <span data-label="e" style={{'--i': 11} as React.CSSProperties}>e</span>
                            </p>
                        </div>
                        <div className="text focus">
                            <p>
                                <span data-label="E" style={{'--i': 1} as React.CSSProperties}>E</span>
                                <span data-label="x" style={{'--i': 2} as React.CSSProperties}>x</span>
                                <span data-label="p" style={{'--i': 3} as React.CSSProperties}>p</span>
                                <span data-label="l" style={{'--i': 4} as React.CSSProperties}>l</span>
                                <span data-label="o" style={{'--i': 5} as React.CSSProperties}>o</span>
                                <span data-label="r" style={{'--i': 6} as React.CSSProperties}>r</span>
                                <span data-label="e" style={{'--i': 7} as React.CSSProperties}>e</span>
                                <span data-label="M" style={{'--i': 8} as React.CSSProperties}>M</span>
                                <span data-label="o" style={{'--i': 9} as React.CSSProperties}>o</span>
                                <span data-label="r" style={{'--i': 10} as React.CSSProperties}>r</span>
                                <span data-label="e" style={{'--i': 11} as React.CSSProperties}>e</span>
                            </p>
                        </div>
                        <div className="wave"></div>
                        <div className="exterior-lines">
                            <svg xmlns="http://www.w3.org/2000/svg" width="267" height="107" viewBox="0 0 267 107" fill="none">
                                <path d="M1 20V11L10.8994 1.10051H20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
                                <path d="M266 19.8995V10.8995L256.101 1H247" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
                                <path d="M1 87V96L10.8994 105.899H20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
                                <path d="M266 87.1005V96.1005L256.101 106H247" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;