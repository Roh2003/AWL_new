import React from "react";
import { SectionTag } from "@/components/ui/SectionTag";

export const metadata = {
  title: "Investor Relations - Aayush Wellness Limited",
  description: "BSE-listed (Code: 539528) integrated healthcare provider governance, shareholdings, and regulatory disclosures.",
};

export default function InvestorsPage() {
  return (
    <main className="w-full" style={{ padding: "160px 48px 120px", background: "var(--off-white)" }}>
      <SectionTag num="01" label="Investors Ecosystem" theme="dark" />
      <h1 className="about-title" style={{ marginBottom: "32px", fontSize: "clamp(32px, 4vw, 52px)" }}>BSE-Listed Governance & Trust</h1>
      <p className="about-body" style={{ maxWidth: "800px", fontSize: "16px", lineHeight: "1.75", color: "var(--gray-700)" }}>
        Aayush Wellness Limited (BSE: 539528) is committed to building a transparent investor ecosystem anchored in long-term value creation. Our business statistics reflect continuous, solid year-over-year revenue expansion, robust audits, and compliance in India&apos;s expanding preventive health sector.
      </p>
    </main>
  );
}
