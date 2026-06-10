import React from "react";
import { SectionTag } from "@/components/ui/SectionTag";

export const metadata = {
  title: "Ayurveda + Modern Nutrition - Aayush Wellness Limited",
  description: "Learn how we integrate traditional Indian Ayurvedic herbal principles with modern clinical nutritional studies.",
};

export default function AyurvedaPage() {
  return (
    <main className="w-full" style={{ padding: "160px 48px 120px", background: "var(--off-white)" }}>
      <SectionTag num="01" label="Philosophy" theme="dark" />
      <h1 className="about-title" style={{ marginBottom: "32px", fontSize: "clamp(32px, 4vw, 52px)" }}>Ayurveda & Modern Nutrition</h1>
      <p className="about-body" style={{ maxWidth: "800px", fontSize: "16px", lineHeight: "1.75", color: "var(--gray-700)" }}>
        Our philosophy is simple: combine the age-old wisdom of traditional Ayurvedic medicine with the rigorous testing methods of modern clinical science. Every raw ingredient we source is tested for purity and potency to create preventive daily nutraceuticals that are clean, natural, and effective.
      </p>
    </main>
  );
}
