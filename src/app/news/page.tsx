import React from "react";
import { NewsPageClient } from "@/components/news";
import "./news.css";

export const metadata = {
  title: "Media & Press Center - Aayush Wellness Limited",
  description: "Stay updated with company announcements, media coverage, business milestones, product launches, and industry developments at Aayush Wellness.",
};

export default function NewsPage() {
  return (
    <main className="news-page w-full">
      <NewsPageClient />
    </main>
  );
}
