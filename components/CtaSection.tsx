import React from 'react';
import { Page } from '../App';

interface CtaSectionProps {
    navigate: (page: Page) => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ navigate }) => {
    return (
        <section className="cta-section py-20">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center text-white max-w-4xl mx-auto scroll-animate from-bottom">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Business?</h2>
                    <p className="text-lg text-blue-200 mb-8">
                        Let us handle the complexities of registration and compliance so you can focus on your vision. Contact us today for a personalized consultation and take the first step towards building your legacy.
                    </p>
                    <div className="flex justify-center">
                         <button 
                            onClick={() => navigate('contact')}
                            className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-transform hover:scale-105 inline-block"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
