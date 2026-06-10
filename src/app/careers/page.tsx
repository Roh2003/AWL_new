import React from "react";
import { SectionTag } from "@/components/ui/SectionTag";

export const metadata = {
  title: "Careers - Aayush Wellness Limited",
  description: "Join Aayush Wellness Limited and build the future of preventive healthcare and nutraceutical innovations in India.",
};

export default function CareersPage() {
  return (
    <main className="w-full" style={{ padding: "160px 48px 120px", background: "var(--off-white)" }}>
      <SectionTag num="01" label="Careers" theme="dark" />
      <h1 className="about-title" style={{ marginBottom: "32px", fontSize: "clamp(32px, 4vw, 52px)" }}>Work with Aayush</h1>
      <p className="about-body" style={{ maxWidth: "800px", fontSize: "16px", lineHeight: "1.75", color: "var(--gray-700)" }}>
        We are always seeking passionate individuals to join our mission of democratizing preventive healthcare. If you are a designer, researcher, formulator, marketer, or developer looking to shape the future of health, send us your resume at <a href="mailto:careers@aayushwellness.com" style={{ color: "var(--lime-dark)", fontWeight: "bold" }}>careers@aayushwellness.com</a>.
      </p>
    </main>
  );
}
