import React from "react";
import { PressReleases } from "@/components/home";

export const metadata = {
  title: "Media Coverage - Aayush Wellness Limited",
  description: "Read the latest news coverage, financial summaries, and press releases about Aayush Wellness Limited.",
};

export default function NewsPage() {
  return (
    <main className="w-full" style={{ paddingTop: "100px" }}>
      <PressReleases />
    </main>
  );
}
