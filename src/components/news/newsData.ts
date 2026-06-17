export interface NewsItem {
  id: string;
  category: string; // "Press Release" | "Corporate Update"
  source: string; // "Z Business" | "ET NOW" | "CNBC" | "mint"
  title: string;
  date: string; // "10 June 2026"
  dateISO: string; // "2026-06-10" for reliable sorting
  link: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: "news-1",
    category: "Press Release",
    source: "Z Business",
    title: "Aayush Wellness delivers strong FY26 performance - ₹15,548 lakhs revenue, 112% YoY growth",
    date: "10 June 2026",
    dateISO: "2026-06-10",
    link: "#"
  },
  {
    id: "news-2",
    category: "Press Release",
    source: "ET NOW",
    title: "Aayush Wellness delivers strong FY26 performance - ₹15,548 lakhs revenue, 112% YoY growth",
    date: "08 June 2026",
    dateISO: "2026-06-08",
    link: "#"
  },
  {
    id: "news-3",
    category: "Press Release",
    source: "CNBC",
    title: "Aayush Wellness delivers strong FY26 performance - ₹15,548 lakhs revenue, 112% YoY growth",
    date: "04 June 2026",
    dateISO: "2026-06-04",
    link: "#"
  },
  {
    id: "news-4",
    category: "Press Release",
    source: "mint",
    title: "Aayush Wellness delivers strong FY26 performance - ₹15,548 lakhs revenue, 112% YoY growth",
    date: "26 May 2026",
    dateISO: "2026-05-26",
    link: "#"
  },
  {
    id: "news-5",
    category: "Corporate Update",
    source: "CNBC",
    title: "Aayush Wellness delivers strong FY26 performance - ₹15,548 lakhs revenue, 112% YoY growth",
    date: "20 May 2026",
    dateISO: "2026-05-20",
    link: "#"
  },
  {
    id: "news-6",
    category: "Press Release",
    source: "mint",
    title: "Aayush Wellness delivers strong FY26 performance - ₹15,548 lakhs revenue, 112% YoY growth",
    date: "16 May 2026",
    dateISO: "2026-05-16",
    link: "#"
  }
];
