import React from 'react';

const Services: React.FC = () => {
    const servicesData = [
        {
            icon: "assignment",
            title: "Company Registration",
            items: [
                "Private Limited Company (PLC)",
                "Private Business Corporation (PBC)",
                "Company Re-registration",
                "Change of Directors",
            ],
        },
        {
            icon: "verified",
            title: "Tax & Compliance",
            items: [
                "ZIMRA ITF263 Tax Clearance",
                "VAT & PAYE Registration",
                "Vendor Number Application",
                "PRAZ & NSSA Compliance",
                "QPDs & Income Tax Filing",
            ],
        },
        {
            icon: "business_center",
            title: "Business Support",
            items: [
                "Tender Document Preparation",
                "Logo & Company Profile Design",
                "Shop & Liquor Licenses",
                "Business Plans & Proposals",
            ],
        },
    ];

    const generateIdFromTitle = (title: string) => {
        return `service-${title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;
    };

    return (
        <section className="bg-background-light dark:bg-background-dark py-20" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate from-bottom">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">A Full Suite of Business Services</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        We offer a comprehensive range of services to get your business fully compliant and ready for success in Zimbabwe.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((category, index) => (
                        <div 
                            key={category.title} 
                            id={generateIdFromTitle(category.title)} 
                            className="service-card scroll-animate from-bottom"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="service-card-icon">
                                <span className="material-icons-outlined text-4xl">{category.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">{category.title}</h3>
                            <ul className="space-y-3 text-text-light-secondary dark:text-text-dark-secondary">
                                {category.items.map((item) => (
                                    <li key={item} className="service-card-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;