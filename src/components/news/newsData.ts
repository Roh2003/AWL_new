export interface NewsItem {
  id: string;
  category: string; // "Investor & Financial" | "Products & Wellness" | "Healthcare Services" | "Business Expansion" | "Corporate Updates"
  source: string; // e.g. "The Tribune", "Business Standard"
  title: string;
  excerpt: string;
  date: string;
  link: string;
  image: string;
  badge: string; // "CORPORATE UPDATE" | "PRESS RELEASE" | "FINANCIAL UPDATE"
  isSpotlight?: boolean;
}

export const NEWS_CATEGORIES = [
  "All News",
  "Investor & Financial",
  "Products & Wellness",
  "Healthcare Services",
  "Business Expansion",
  "Corporate Updates"
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: "spotlight-1",
    category: "Investor & Financial",
    source: "The Tribune",
    title: "Aayush Wellness delivers strong FY26 performance - ₹15,548 lakhs revenue, 112% YoY growth",
    excerpt: "The company delivered a strong operational performance during FY26, with Revenue from Operations rising sharply to ₹15,548.20 Lakhs, registering a robust 112% Year-on-Year growth.",
    date: "MAY 18, 2026",
    link: "#",
    image: "/assets/images/news/news_spotlight_chart.png",
    badge: "CORPORATE UPDATE",
    isSpotlight: true
  },
  {
    id: "spotlight-2",
    category: "Healthcare Services",
    source: "The Tribune",
    title: "Tech innovators: The minds behind the machines",
    excerpt: "All financial disclosures, governance documents, regulatory filings, and shareholder information for Aayush Wellness Limited - organised for transparency and ease of access.",
    date: "MAY 18, 2026",
    link: "#",
    image: "/assets/images/news/news_card_fallback.png",
    badge: "PRESS RELEASE",
    isSpotlight: true
  },
  {
    id: "spotlight-3",
    category: "Healthcare Services",
    source: "The Tribune",
    title: "Tech innovators: The minds behind the machines",
    excerpt: "All financial disclosures, governance documents, regulatory filings, and shareholder information for Aayush Wellness Limited - organised for transparency and ease of access.",
    date: "MAY 18, 2026",
    link: "#",
    image: "/assets/images/news/news_card_fallback.png",
    badge: "PRESS RELEASE",
    isSpotlight: true
  },
  {
    id: "art-1",
    category: "Healthcare Services",
    source: "The Tribune",
    title: "Tech innovators: The minds behind the machines",
    excerpt: "All financial disclosures, governance documents, regulatory filings, and shareholder information for Aayush Wellness Limited - organised for transparency and ease of access.",
    date: "May 18, 2026",
    link: "#",
    image: "/assets/images/news/news_card_fallback.png",
    badge: "PRESS RELEASE"
  },
  {
    id: "art-2",
    category: "Healthcare Services",
    source: "The Tribune",
    title: "Tech innovators: The minds behind the machines",
    excerpt: "All financial disclosures, governance documents, regulatory filings, and shareholder information for Aayush Wellness Limited - organised for transparency and ease of access.",
    date: "May 18, 2026",
    link: "#",
    image: "/assets/images/news/news_card_fallback.png",
    badge: "PRESS RELEASE"
  },
  {
    id: "art-3",
    category: "Corporate Updates",
    source: "Business Standard",
    title: "Strategic healthcare initiatives for a stronger tomorrow",
    excerpt: "Aayush Wellness executes strategic expansions in domestic care segments and deepens research networks to improve healthcare product outreach.",
    date: "May 17, 2026",
    link: "#",
    image: "/assets/images/news/news_card_fallback.png",
    badge: "CORPORATE UPDATE"
  },
  {
    id: "art-4",
    category: "Products & Wellness",
    source: "The Economic Times",
    title: "Aayush Wellness launches 'Liver Detox Tablets' to capture growing demand",
    excerpt: "New launch aligns with rising liver wellness trends and reinforces category expansion into India's fastest-growing segment.",
    date: "May 15, 2026",
    link: "#",
    image: "/assets/images/news/news_card_fallback.png",
    badge: "PRESS RELEASE"
  },
  {
    id: "art-5",
    category: "Investor & Financial",
    source: "Financial Express",
    title: "Aayush Wellness Enters India's ₹366 Billion Metabolic Health Market",
    excerpt: "Launches Dia Shield Tablets targeting metobolic conditions with natural science-backed wellness formulas.",
    date: "May 12, 2026",
    link: "#",
    image: "/assets/images/news/news_card_fallback.png",
    badge: "CORPORATE UPDATE"
  },
  {
    id: "art-6",
    category: "Business Expansion",
    source: "Business Standard",
    title: "Strategic Collaboration With Healthrashi Nextgen India Limited",
    excerpt: "Expanding institutional networks to deliver integrated wellness diagnostics and clinical supplements across sub-continents.",
    date: "May 08, 2026",
    link: "#",
    image: "/assets/images/news/news_card_fallback.png",
    badge: "PRESS RELEASE"
  },
  {
    id: "art-7",
    category: "Products & Wellness",
    source: "The Hindu",
    title: "Aayush Wellness launches Herbal Masala series to replace harmful habits",
    excerpt: "An innovative, health-focused alternative to traditional mouth fresheners, utilizing traditional Ayurvedic herbs and values.",
    date: "May 02, 2026",
    link: "#",
    image: "/assets/images/news/news_card_fallback.png",
    badge: "PRESS RELEASE"
  },
  {
    id: "art-8",
    category: "Corporate Updates",
    source: "The Tribune",
    title: "Aayush Wellness appoints leading clinical panels to direct expansion",
    excerpt: "Establishing a premier scientific board of advisory to validate product lines and ensure absolute preventive standards.",
    date: "April 28, 2026",
    link: "#",
    image: "/assets/images/news/news_card_fallback.png",
    badge: "CORPORATE UPDATE"
  }
];
