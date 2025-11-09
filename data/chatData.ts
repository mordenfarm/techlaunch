export interface KnowledgeBaseItem {
    id: number;
    question: string;
    answer: string;
    keywords: string[];
    aliases?: string[];
    related?: number[];
}

export const chatData: KnowledgeBaseItem[] = [
    // === GENERAL (1-9) ===
    {
        id: 1,
        question: "What services do you offer?",
        answer: "TECHLAUNCH is your one-stop-shop for launching a business in Zimbabwe. We offer a comprehensive suite of services including: <br>1. <b>Company Registration:</b> Expert registration for both Private Business Corporations (PBC) and Private Limited Companies (PLC). <br>2. <b>Tax & Compliance:</b> We handle all ZIMRA, NSSA, and PRAZ registrations to ensure you're 100% compliant. <br>3. <b>Business Support:</b> We provide crucial support services like licensing, tender document preparation, and professional graphic design.",
        keywords: ["services", "do", "offer"],
        related: [10, 30, 50]
    },
    {
        id: 2,
        question: "How can I contact you?",
        answer: "We're easy to reach! You can contact us via:<br>• <b>WhatsApp:</b> <a href='https://wa.me/263719842785' target='_blank'>+263 719 842 785</a><br>• <b>Call:</b> <a href='tel:+263773842785'>0773 842 785</a><br>• <b>Email:</b> <a href='mailto:support@techlaunch.co.zw'>support@techlaunch.co.zw</a>. <br>Our 'Contact Us' page has all the details.",
        keywords: ["contact", "number", "phone", "whatsapp", "email", "call"],
        related: [3, 4]
    },
    {
        id: 3,
        question: "What are your business hours?",
        answer: "Our dedicated team is available to assist you from <b>Monday to Friday, 8:00 AM to 5:00 PM</b> (GMT+2). We are closed on weekends and Zimbabwean public holidays.",
        keywords: ["hours", "open", "time", "working", "close"],
        related: [2]
    },
    {
        id: 4,
        question: "Where are you located?",
        answer: "We operate as a modern, primarily online-based service to efficiently serve clients across Zimbabwe and the diaspora. This model allows us to keep our services affordable and accessible. We do not currently have a physical office for walk-in appointments.",
        keywords: ["location", "address", "office", "located", "where"],
    },
    {
        id: 5,
        question: "What are your prices?",
        answer: "We believe in transparent pricing. Key service costs are: <br>• PBC Registration: <b>$100</b> <br>• PLC Registration: <b>$110</b> <br>• ITF263 Tax Clearance: <b>$30</b>. <br>For a comprehensive list, please see the 'Services' section on our homepage.",
        keywords: ["price", "cost", "much", "fees"],
        related: [10, 11, 12, 31]
    },
    {
        id: 6,
        question: "How do I make a payment?",
        answer: "We offer flexible payment options for your convenience. We accept local bank transfers (ZimSwitch/RTGS), EcoCash, and major international payment platforms like Mukuru and WorldRemit for our diaspora clients. We'll provide you with the specific details when you order a service.",
        keywords: ["payment", "pay", "bank", "ecocash"],
    },
     {
        id: 7,
        question: "Who are your clients?",
        answer: "We work with a diverse range of entrepreneurs, from ambitious individuals starting their first business, to established SMEs seeking to formalize and scale, to diaspora Zimbabweans looking to invest back home. If you're serious about building a compliant business in Zimbabwe, we're here for you.",
        keywords: ["clients", "who", "work with"],
        related: [1, 16]
    },

    // === COMPANY REGISTRATION (10-29) ===
    {
        id: 10,
        question: "How much is company registration?",
        answer: "The cost for company registration depends on the structure you choose: <br>• <b>Private Business Corporation (PBC):</b> $100 <br>• <b>Private Limited Company (PLC):</b> $110. <br>The PBC is the most popular choice for new startups.",
        keywords: ["how much", "company registration", "cost"],
        aliases: ["register company price"],
        related: [11, 12, 13]
    },
    {
        id: 11,
        question: "What is the price for a PBC?",
        answer: "The all-inclusive fee for registering a Private Business Corporation (PBC) is <b>$100</b>. This covers all registry fees and our professional service.",
        keywords: ["pbc", "price", "cost", "much"],
        related: [10, 12, 13, 14]
    },
    {
        id: 12,
        question: "What is the price for a PLC?",
        answer: "The all-inclusive fee for registering a Private Limited Company (PLC) is <b>$110</b>. This covers all registry fees and our professional service for this more complex structure.",
        keywords: ["plc", "price", "cost", "much"],
        related: [10, 11, 13]
    },
    {
        id: 13,
        question: "What is the difference between a PBC and a PLC?",
        answer: "It's a key choice! <br>• A <b>PBC</b> is simple, affordable, and perfect for 1-20 member businesses wanting the protection of limited liability. It has fewer compliance requirements. <br>• A <b>PLC</b> is a more formal structure, ideal for businesses planning for major growth, seeking external investment, or requiring distinct shareholders and directors. It can have up to 50 shareholders.",
        keywords: ["difference", "pbc", "plc", "vs"],
        related: [10, 14]
    },
    {
        id: 14,
        question: "How long does company registration take?",
        answer: "Our streamlined process ensures the fastest possible turnaround: <br>• <b>PBC Registration:</b> Typically completed within <b>3-5 business days</b>. <br>• <b>PLC Registration:</b> Generally takes <b>7-10 business days</b> due to its complexity. <br>Timelines begin once we receive all correct documentation from you.",
        keywords: ["long", "time", "company registration", "take", "timeline"],
        related: [15]
    },
    {
        id: 15,
        question: "What documents are needed for registration?",
        answer: "The process is simple. We just need the following from all directors/members: <br>1. Clear, certified copies of National IDs or Passports. <br>2. Proof of residential address for each director (a recent utility bill or affidavit works). <br>3. A list of 3-5 unique proposed company names, in order of your preference.",
        keywords: ["documents", "requirements", "needed", "registration"],
        related: [14, 16]
    },
    {
        id: 16,
        question: "Can I register a company from outside Zimbabwe?",
        answer: "Yes, absolutely! We specialize in assisting clients from the diaspora. The entire registration process is handled remotely and efficiently. We'll provide clear guidance on how to certify your documents in your current country of residence.",
        keywords: ["diaspora", "outside", "abroad", "foreign", "country"],
        related: [15]
    },
    {
        id: 17,
        question: "What do I receive after registration?",
        answer: "Once your company is successfully registered, you will receive a complete set of official documents, including: <br>• The Certificate of Incorporation <br>• CR2 (List of Directors/Members) <br>• The company's constitutional documents (e.g., Articles of Association). <br>These are everything you need to open a bank account and begin formal operations.",
        keywords: ["receive", "get", "after registration", "documents"],
        related: [18, 30, 40]
    },
    {
        id: 18,
        question: "What is the first step after I register my company?",
        answer: "Congratulations on registering! The immediate next steps are crucial for compliance: <br>1. <b>Open a Corporate Bank Account.</b> <br>2. <b>Register with ZIMRA</b> to get your BP Number and initial ITF263 Tax Clearance. <br>3. <b>Register with NSSA</b> if you will have employees. <br>We can assist you with all of these post-registration steps.",
        keywords: ["first step", "next", "after register"],
        related: [30, 40, 19]
    },
    {
        id: 19,
        question: "Can I change my company name later?",
        answer: "Yes, a company's name can be changed after registration. This is a formal process that involves a special resolution and filing the required forms with the Companies Registry. We offer 'Change of Company Name' as a service.",
        keywords: ["change name", "rename"],
    },
    {
        id: 20,
        question: "Do I need a physical address to register?",
        answer: "Yes, a physical registered office address in Zimbabwe is a legal requirement. This is the official address where legal notices will be sent. It cannot be a P.O. Box. We can advise on virtual office solutions if you don't have a physical premise.",
        keywords: ["physical address", "registered office"],
        related: [15]
    },

    // === TAX & COMPLIANCE (30-49) ===
    {
        id: 30,
        question: "What is a tax clearance (ITF263)?",
        answer: "An ITF263, commonly known as a Tax Clearance Certificate, is issued by ZIMRA and is one of the most vital documents for any business in Zimbabwe. It confirms that your company's tax affairs are fully compliant and in good order. Without it, your clients are legally required to withhold 30% of your payments, severely impacting your cash flow.",
        keywords: ["tax clearance", "itf263", "what is"],
        aliases: ["itf 263", "itf"],
        related: [31, 32, 42]
    },
    {
        id: 31,
        question: "How much is a tax clearance?",
        answer: "Our professional fee to process a new or renewal application for your ITF263 Tax Clearance is <b>$30</b>. This service ensures your application is filed correctly, but it requires that your company's tax filings (like QPDs) are up to date.",
        keywords: ["tax clearance", "itf263", "cost", "price", "much"],
        aliases: ["itf 263", "itf"],
        related: [30, 42]
    },
    {
        id: 32,
        question: "Why do I need a tax clearance?",
        answer: "A valid tax clearance (ITF263) is non-negotiable for three main reasons: <br>1. <b>Receive Full Payment:</b> It ensures you get 100% of your invoiced amounts without the mandatory 30% withholding tax. <br>2. <b>Win Tenders:</b> It is a mandatory requirement for virtually all government and corporate tenders. <br>3. <b>Show Credibility:</b> It signals to clients and partners that your business is legitimate and compliant.",
        keywords: ["tax clearance", "itf263", "why", "need", "purpose"],
        aliases: ["itf 263", "itf"],
        related: [30, 31]
    },
    {
        id: 33,
        question: "What is a Vendor Number?",
        answer: "A Vendor Number is your official registration number with the Government of Zimbabwe's procurement system. It is absolutely essential if you intend to supply goods or services to any government ministry, department, parastatal, or public entity. Without it, you cannot be awarded a public contract.",
        keywords: ["vendor number", "what is"],
        related: [34, 41, 51]
    },
    {
        id: 34,
        question: "How much does a Vendor Number cost?",
        answer: "Our comprehensive service to manage your Vendor Number application from start to finish is <b>$280</b>. We handle all the paperwork and submissions on your behalf.",
        keywords: ["vendor number", "cost", "price", "much"],
        related: [33]
    },
    {
        id: 35,
        question: "When should I register for VAT?",
        answer: "VAT (Value Added Tax) registration with ZIMRA becomes mandatory once your business's annual revenue reaches the official threshold (currently the ZWL equivalent of USD $40,000). You can also choose to register voluntarily if it's beneficial for your business model, for example, if you supply to other VAT-registered companies.",
        keywords: ["vat", "register", "when", "turnover", "threshold"],
        related: [36]
    },
    {
        id: 36,
        question: "What is Virtual Fiscalisation?",
        answer: "Virtual Fiscalisation is a ZIMRA-approved digital system for recording sales and tax data without needing a physical fiscal device. It's a modern, cost-effective solution for businesses to issue tax invoices and stay compliant. Our service fee for setting this up is $149.99.",
        keywords: ["virtual fiscalisation", "fiscal device"],
    },
    {
        id: 40,
        question: "What is NSSA registration?",
        answer: "NSSA (National Social Security Authority) registration is a legal requirement in Zimbabwe for any company that has one or more employees. It's the national pension and social security scheme. Employers and employees both contribute monthly. We can manage your initial company registration with NSSA.",
        keywords: ["nssa", "what is", "social security"],
    },
    {
        id: 41,
        question: "What is PRAZ registration?",
        answer: "PRAZ (Procurement Regulatory Authority of Zimbabwe) registration is another mandatory requirement for participating in public tenders. While the Vendor Number gets you into the government supplier database, PRAZ registration certifies that you are a legitimate and compliant supplier. Both are often needed for tenders.",
        keywords: ["praz", "what is"],
        related: [33, 51]
    },
    {
        id: 42,
        question: "What are QPDs?",
        answer: "QPDs stand for Quarterly Payment Dates. They are the deadlines for companies to remit provisional income tax payments to ZIMRA based on their estimated annual profit. Keeping up with your QPDs is a key requirement for obtaining and maintaining a valid ITF263 Tax Clearance.",
        keywords: ["qpds", "what are", "quarterly payment"],
        related: [30]
    },
    {
        id: 43,
        question: "What are annual returns?",
        answer: "Annual Returns are a yearly filing required by the Companies Registry to confirm that the company is still active and to update its records on directors, shareholders, and addresses. This is separate from tax returns filed with ZIMRA. Failure to file can lead to penalties and the company being struck off the register.",
        keywords: ["annual returns", "yearly filing"],
    },

    // === BUSINESS SUPPORT (50-69) ===
    {
        id: 50,
        question: "Can you help write a business plan?",
        answer: "Yes, we provide expert Business Plan and Business Proposal writing services. A professionally crafted business plan is essential for securing loans from banks, attracting investors, and providing a clear roadmap for your business's growth and success.",
        keywords: ["business plan", "proposal", "write", "help"],
    },
    {
        id: 51,
        question: "How do you help with tender preparation?",
        answer: "Our tender preparation service is designed to make your bid as competitive as possible. We assist by: <br>• Compiling all mandatory compliance documents (Company Docs, ITF263, PRAZ, NSSA). <br>• Professionally structuring and formatting your bid document. <br>• Ensuring every section of the tender request is answered accurately and persuasively. <br>This meticulous approach greatly increases your chance of winning.",
        keywords: ["tender", "prepare", "help", "bid"],
        related: [33, 41]
    },
    {
        id: 52,
        question: "What design services do you offer?",
        answer: "We offer critical graphic design services to establish a strong brand identity for your new business. Our packages include: <br>• <b>Logo Design:</b> Creating a unique and professional logo. <br>• <b>Company Profile Design:</b> A crucial marketing document for showcasing your business to potential clients. <br>• <b>Business Cards & Letterheads.</b>",
        keywords: ["design", "logo", "company profile", "branding"],
    },
    {
        id: 53,
        question: "Can you help me get a shop license?",
        answer: "Yes, we streamline the process of acquiring various operational licenses from local councils, including Shop Licenses and Liquor Licenses. We manage the paperwork, submissions, and follow-ups, navigating the bureaucracy so you can focus on setting up your business premises.",
        keywords: ["shop license", "liquor license", "permit"],
    }
];
