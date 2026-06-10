import React from "react";
import { ContactForm } from "@/components/home";

export const metadata = {
  title: "Partner With Us - Aayush Wellness Limited",
  description: "Get in touch with Aayush Wellness Limited regarding distribution partnerships, investment, or startup accelerator programs.",
};

export default function ContactPage() {
  return (
    <main className="w-full" style={{ paddingTop: "100px" }}>
      <ContactForm />
    </main>
  );
}
