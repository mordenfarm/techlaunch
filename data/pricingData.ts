export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  features: string[];
  whatsappMessage: string;
}

export interface PricingCategory {
  category: string;
  description: string;
  services: ServiceItem[];
}

export const pricingData: PricingCategory[] = [
  {
    category: "Company Registration",
    description: "Establish your legal business entity with confidence. We handle all paperwork for a fast and compliant registration.",
    services: [
      {
        title: "Private Business Corporation (PBC)",
        description: "The ideal, affordable choice for startups, sole traders, and small businesses seeking limited liability without complex compliance.",
        price: "$100",
        features: ["1-20 Members", "Limited Liability Protection", "Faster Registration (3-5 Days)", "Minimal Compliance"],
        whatsappMessage: "Hello TECHLAUNCH, I'm interested in registering a Private Business Corporation (PBC)."
      },
      {
        title: "Private Limited Company (PLC)",
        description: "The standard for growing businesses planning to seek investment, issue shares, and operate with a formal board structure.",
        price: "$110",
        features: ["2-50 Shareholders", "Formal Director Structure", "Ideal for Investment", "Globally Recognized"],
        whatsappMessage: "Hello TECHLAUNCH, I would like to register a Private Limited Company (PLC)."
      }
    ]
  },
  {
    category: "Tax & Compliance",
    description: "Stay ahead of regulations. We ensure your business is fully compliant with ZIMRA, NSSA, and PRAZ to operate smoothly.",
    services: [
       {
        title: "ZIMRA ITF263 Tax Clearance",
        description: "A crucial certificate to prove your tax affairs are in order, ensuring you receive 100% of your payments without withholding tax.",
        price: "$30",
        features: ["Avoid 30% Withholding Tax", "Required for Tenders", "Valid for 1 Year", "Boosts Business Credibility"],
        whatsappMessage: "Hello TECHLAUNCH, I need to get an ITF263 Tax Clearance certificate."
      },
      {
        title: "Vendor Number",
        description: "Essential for any business wanting to supply goods or services to the Zimbabwean Government and related entities.",
        price: "$280",
        features: ["Access to Public Tenders", "Official Supplier Registration", "One-time Application", "Unlocks Major Contracts"],
        whatsappMessage: "Hello TECHLAUNCH, I require a Vendor Number for my business."
      },
      {
        title: "VAT Registration",
        description: "Mandatory for businesses exceeding the revenue threshold. We handle the complete registration process with ZIMRA.",
        price: "$250",
        features: ["Full ZIMRA Compliance", "Claim Input Tax", "Formal Business Stature", "Expert Process Management"],
        whatsappMessage: "Hello TECHLAUNCH, I need assistance with VAT Registration."
      },
       {
        title: "PRAZ Registration",
        description: "Mandatory registration with the Procurement Regulatory Authority of Zimbabwe to be eligible for public sector tenders.",
        price: "$180 / year",
        features: ["Eligibility for All Tenders", "Annual Compliance Certificate", "Supplier Directory Listing", "Proof of Legitimacy"],
        whatsappMessage: "Hello TECHLAUNCH, I need help with my annual PRAZ Registration."
      }
    ]
  },
   {
    category: "Business Support",
    description: "From branding to licensing, we provide the essential support services to build and grow your business operations.",
    services: [
      {
        title: "Logo & Company Profile Design",
        description: "Establish a strong, professional brand identity with a custom logo and a comprehensive company profile document.",
        price: "TBA",
        features: ["Professional Logo Concepts", "Multi-page Profile PDF", "Full Branding Suite", "Source File Delivery"],
        whatsappMessage: "Hello TECHLAUNCH, I'm interested in your Logo and Company Profile design services."
      },
       {
        title: "Tender Document Preparation",
        description: "Increase your chances of winning contracts with a professionally compiled and fully compliant tender submission.",
        price: "TBA",
        features: ["Compliance Checklist", "Professional Formatting", "Content Review", "Submission Guidance"],
        whatsappMessage: "Hello TECHLAUNCH, I need help preparing a tender document."
      },
      {
        title: "Shop & Liquor Licenses",
        description: "We navigate the complex local council requirements to secure the necessary operating licenses for your business premises.",
        price: "TBA",
        features: ["Council Application Management", "Regulatory Guidance", "Hassle-free Process", "For Retail & Hospitality"],
        whatsappMessage: "Hello TECHLAUNCH, I need assistance with obtaining a shop or liquor license."
      }
    ]
  }
];