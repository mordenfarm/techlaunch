import React, { useState } from 'react';
import { Page } from '../App';

interface ContactPageProps {
    navigate: (page: Page) => void;
}

const ContactCard: React.FC<{ icon: string, title: string, description: string, buttonText: string, href: string }> = ({ icon, title, description, buttonText, href }) => (
    <div className="contact-card p-6 rounded-lg flex flex-col items-center text-center">
        <div className="icon-wrapper w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <span className="material-icons-outlined text-3xl text-white">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">{title}</h3>
        <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4 flex-grow">{description}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
            {buttonText} &rarr;
        </a>
    </div>
);

const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
    const [formState, setFormState] = useState('idle'); // idle, sending, sent
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState('sending');
        // Simulate an email sending process
        setTimeout(() => {
            setFormState('sent');
            console.log("Form Submitted:", formData);
        }, 1500);
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero py-20 md:py-32 text-white text-center">
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 scroll-animate from-bottom">Get in Touch</h1>
                    <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto scroll-animate from-bottom" style={{ transitionDelay: '200ms' }}>
                        We're here to help you navigate the journey of starting and growing your business. Reach out with any questions, and let's start the conversation.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-background-light dark:bg-background-dark">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Contact Cards */}
                        <div className="scroll-animate from-left">
                            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8">Direct Contact</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <ContactCard
                                    icon="chat_bubble"
                                    title="WhatsApp"
                                    description="For quick questions and instant support, chat with us directly on WhatsApp."
                                    buttonText="Chat Now"
                                    href="https://wa.me/263719842785?text=Hello%20TECHLAUNCH!+I+have+a+question."
                                />
                                <ContactCard
                                    icon="email"
                                    title="Email Us"
                                    description="Send us an email for detailed inquiries or document submissions."
                                    buttonText="Send an Email"
                                    href="mailto:support@techlaunch.co.zw"
                                />
                                <ContactCard
                                    icon="phone"
                                    title="Call Us"
                                    description="Prefer to talk? Give us a call during our business hours for a direct conversation."
                                    buttonText="Call 0773 842 785"
                                    href="tel:+263773842785"
                                />
                                <ContactCard
                                    icon="groups"
                                    title="Community"
                                    description="Join our WhatsApp group to connect with other entrepreneurs and stay updated."
                                    buttonText="Join our Group"
                                    href="https://chat.whatsapp.com/BRDoPFBFt4oI6BF27S8n01"
                                />
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="contact-form bg-background-light p-8 rounded-lg shadow-lg scroll-animate from-right">
                            {formState === 'sent' ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="material-icons-outlined text-5xl">check_circle</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-text-light dark:text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-text-light-secondary dark:text-gray-800">Thank you for reaching out. We will get back to you as soon as possible.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6">Send us a Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-2">Full Name</label>
                                            <input type="text" name="name" id="name" required placeholder="e.g. Tanaka Moyo" className="form-input w-full p-3 rounded-md" value={formData.name} onChange={handleInputChange} />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-2">Email Address</label>
                                            <input type="email" name="email" id="email" required placeholder="e.g. tanaka.moyo@example.com" className="form-input w-full p-3 rounded-md" value={formData.email} onChange={handleInputChange} />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-2">Subject</label>
                                            <input type="text" name="subject" id="subject" required placeholder="e.g. Kubvunza nezve kunyoresa PLC" className="form-input w-full p-3 rounded-md" value={formData.subject} onChange={handleInputChange} />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-2">Message</label>
                                            <textarea name="message" id="message" rows={5} required placeholder="Nyora shoko rako pano..." className="form-input w-full p-3 rounded-md" value={formData.message} onChange={handleInputChange}></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" disabled={formState === 'sending'} className="w-full bg-accent text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-blue-500 transition-all duration-300 disabled:bg-gray-400 flex items-center justify-center">
                                                {formState === 'sending' ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    'Send Message'
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;