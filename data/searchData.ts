import { Page } from '../App';

export interface SearchItem {
  title: string;
  category: string;
  icon: string;
  keywords: string[];
  navigation: {
    page: Page;
    elementId?: string;
  };
}

export const searchData: SearchItem[] = [
  // Pages
  {
    title: "Pricing",
    category: "Page",
    icon: "sell",
    keywords: ["prices", "cost", "fees", "plans"],
    navigation: { page: "pricing" },
  },
  {
    title: "Frequently Asked Questions",
    category: "Page",
    icon: "help_outline",
    keywords: ["faq", "help", "questions", "support"],
    navigation: { page: "faqs" },
  },
  {
    title: "Contact Us",
    category: "Page",
    icon: "contact_support",
    keywords: ["contact", "email", "phone", "whatsapp"],
    navigation: { page: "contact" },
  },
  // Company Registration Services
  {
    title: "Company Registration",
    category: "Service",
    icon: "assignment",
    keywords: ["registration", "company", "pbc", "plc", "register"],
    navigation: { page: "home", elementId: "service-company-registration" },
  },
  {
    title: "Private Business Corporation (PBC)",
    category: "Service",
    icon: "business",
    keywords: ["pbc", "private business corporation"],
    navigation: { page: "pricing" },
  },
  {
    title: "Private Limited Company (PLC)",
    category: "Service",
    icon: "corporate_fare",
    keywords: ["plc", "private limited company"],
    navigation: { page: "pricing" },
  },
  // Tax & Compliance Services
  {
    title: "Tax & Compliance",
    category: "Service",
    icon: "verified",
    keywords: ["tax", "compliance", "zimra", "nssa", "praz"],
    navigation: { page: "home", elementId: "service-tax-&-compliance" },
  },
  {
    title: "ZIMRA ITF263 Tax Clearance",
    category: "Service",
    icon: "receipt_long",
    keywords: ["itf263", "tax clearance", "zimra"],
    navigation: { page: "pricing" },
  },
  {
    title: "Vendor Number",
    category: "Service",
    icon: "numbers",
    keywords: ["vendor number", "tenders", "government"],
    navigation: { page: "pricing" },
  },
  {
    title: "VAT Registration",
    category: "Service",
    icon: "add_shopping_cart",
    keywords: ["vat", "value added tax"],
    navigation: { page: "pricing" },
  },
  {
    title: "PRAZ Registration",
    category: "Service",
    icon: "gavel",
    keywords: ["praz", "procurement"],
    navigation: { page: "pricing" },
  },
   {
    title: "NSSA Compliance",
    category: "Service",
    icon: "shield",
    keywords: ["nssa", "social security", "pension"],
    navigation: { page: "home", elementId: "service-tax-&-compliance" },
  },
  // Business Support Services
  {
    title: "Business Support",
    category: "Service",
    icon: "business_center",
    keywords: ["support", "logo", "profile", "license"],
    navigation: { page: "home", elementId: "service-business-support" },
  },
  {
    title: "Logo & Company Profile Design",
    category: "Service",
    icon: "palette",
    keywords: ["logo", "design", "branding", "company profile"],
    navigation: { page: "pricing" },
  },
  {
    title: "Tender Document Preparation",
    category: "Service",
    icon: "description",
    keywords: ["tender", "bid", "document preparation"],
    navigation: { page: "pricing" },
  },
];

export const popularSearches: SearchItem[] = [
    searchData.find(item => item.title === "Pricing")!,
    searchData.find(item => item.title === "Company Registration")!,
    searchData.find(item => item.title === "ZIMRA ITF263 Tax Clearance")!,
    searchData.find(item => item.title === "Contact Us")!,
];
