import React from "react";
import { SectionTag } from "@/components/ui/SectionTag";

export const metadata = {
  title: "Privacy Policy - Aayush Wellness Limited",
  description: "Read our privacy guidelines and disclosure protocols.",
};

export default function PrivacyPage() {
  return (
    <main className="w-full" style={{ padding: "160px 48px 120px", background: "var(--off-white)" }}>
      <SectionTag num="01" label="Legal" theme="dark" />
      <h1 className="about-title" style={{ marginBottom: "32px", fontSize: "clamp(32px, 4vw, 52px)" }}>Privacy Policy</h1>
      <p className="about-body" style={{ maxWidth: "800px", fontSize: "16px", lineHeight: "1.75", color: "var(--gray-700)" }}>
        Your privacy is important to us. It is Aayush Wellness Limited&apos;s policy to respect your privacy regarding any information we may collect from you across our website. We only request personal information when we truly need it to provide a service to you.
      </p>
    </main>
  );
}
