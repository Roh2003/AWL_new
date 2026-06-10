import React from "react";
import { SectionTag } from "@/components/ui/SectionTag";

export const metadata = {
  title: "Terms of Use - Aayush Wellness Limited",
  description: "Terms and conditions governing the use of the Aayush Wellness website.",
};

export default function TermsPage() {
  return (
    <main className="w-full" style={{ padding: "160px 48px 120px", background: "var(--off-white)" }}>
      <SectionTag num="01" label="Legal" theme="dark" />
      <h1 className="about-title" style={{ marginBottom: "32px", fontSize: "clamp(32px, 4vw, 52px)" }}>Terms of Use</h1>
      <p className="about-body" style={{ maxWidth: "800px", fontSize: "16px", lineHeight: "1.75", color: "var(--gray-700)" }}>
        By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
      </p>
    </main>
  );
}
