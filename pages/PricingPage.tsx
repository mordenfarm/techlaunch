import React from 'react';
import { pricingData } from '../data/pricingData';

const PricingPage: React.FC = () => {
    return (
        <div className="bg-background-dark text-text-dark">
            {/* Hero Section */}
            <section className="pricing-hero py-20 md:py-32 text-center relative">
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 scroll-animate from-bottom">Transparent Pricing</h1>
                    <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto scroll-animate from-bottom" style={{ transitionDelay: '200ms' }}>
                        Choose the right services for your business. All our prices are clear, competitive, and designed to provide maximum value with no hidden fees.
                    </p>
                </div>
            </section>

            {/* Pricing Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    {pricingData.map((category, catIndex) => (
                        <div key={category.category} className="mb-20">
                            <div className="text-center mb-12 scroll-animate from-bottom">
                                <h2 className="text-3xl md:text-4xl font-bold text-white">{category.category}</h2>
                                <p className="text-lg text-text-dark-secondary mt-2 max-w-2xl mx-auto">{category.description}</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.services.map((service, serviceIndex) => {
                                    const whatsappLink = `https://wa.me/263719842785?text=${encodeURIComponent(service.whatsappMessage)}`;
                                    return (
                                        <div 
                                            key={service.title} 
                                            className="pricing-card flex flex-col scroll-animate from-bottom"
                                            style={{ transitionDelay: `${(catIndex * 3 + serviceIndex) * 100}ms` }}
                                        >
                                            <div className="flex-grow">
                                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                                <p className="text-text-dark-secondary mb-6">{service.description}</p>
                                                <div className="text-4xl font-bold text-white mb-6">
                                                    {service.price}
                                                </div>
                                                <ul className="space-y-3 text-text-dark-secondary mb-8">
                                                    {service.features.map(feature => (
                                                        <li key={feature} className="pricing-card-feature">{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <a 
                                                href={whatsappLink}
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="pricing-card-button block w-full text-center text-white py-3 px-6 rounded-full font-bold text-lg mt-auto"
                                            >
                                                Get Started
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PricingPage;
