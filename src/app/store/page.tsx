import React from "react";
import { SectionTag } from "@/components/ui/SectionTag";

export const metadata = {
  title: "Online Store - Aayush Wellness Limited",
  description: "Shop for premium daily wellness, beauty, and preventive supplements from Aayush Wellness Limited.",
};

export default function StorePage() {
  return (
    <main className="w-full store-page" style={{ padding: "160px 48px 120px", background: "var(--off-white)" }}>
      <SectionTag num="01" label="E-Commerce" theme="dark" />
      <h1 className="about-title" style={{ marginBottom: "32px", fontSize: "clamp(32px, 4vw, 52px)" }}>Digital Store Coming Soon</h1>
      <p className="about-body" style={{ maxWidth: "800px", fontSize: "16px", lineHeight: "1.75", color: "var(--gray-700)" }}>
        We are building a seamless digital shopping experience to deliver premium daily nutraceuticals and beauty formulations directly to your doorstep. Stay tuned for our launch!
      </p>
    </main>
  );
}
