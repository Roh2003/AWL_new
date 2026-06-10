"use client";

import React, { useState } from "react";
import { SectionTag } from "@/components/ui/SectionTag";

interface Toast {
  id: number;
  message: string;
  visible: boolean;
}

export function ContactForm() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Date.now();
    const newToast: Toast = { id, message: "Inquiry submitted successfully! We'll contact you soon.", visible: false };

    setToasts((prev) => [...prev, newToast]);

    // Animate in
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: true } : t))
      );
    }, 100);

    // Animate out and remove
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: false } : t))
      );
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 400);
    }, 4000);

    e.currentTarget.reset();
  };

  return (
    <>
      <section id="contact">
        <div className="contact-inner">
          <div className="contact-info reveal">
            <SectionTag num="08" label="Contact Us" theme="dark" />
            <p className="contact-left-text">
              Whether you&apos;re a prospective distributor, institutional buyer, healthcare partner, or
              investor - we&apos;d love to connect.
            </p>
          </div>

          <div className="contact-right reveal reveal-delay-2">
            <h2 className="contact-right-title">Get In Touch</h2>
            <form className="contact-form-new" onSubmit={handleFormSubmit}>
              <div className="contact-form-row">
                <div className="contact-input-group">
                  <label className="contact-input-label">Full Name</label>
                  <input type="text" className="contact-input" placeholder="Enter your name" required />
                </div>
                <div className="contact-input-group">
                  <label className="contact-input-label">Email Address</label>
                  <input type="email" className="contact-input" placeholder="Enter your email" required />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-input-group">
                  <label className="contact-input-label">Company / Organization</label>
                  <input type="text" className="contact-input" placeholder="Enter your company name" required />
                </div>
                <div className="contact-input-group">
                  <label className="contact-input-label">Inquiry Type</label>
                  <div className="contact-select-wrapper">
                    <select className="contact-select" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="distributor">Prospective Distributor</option>
                      <option value="buyer">Institutional Buyer</option>
                      <option value="partner">Healthcare Partner</option>
                      <option value="investor">Investor</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="contact-select-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="contact-input-group full-width">
                <label className="contact-input-label">Tell us about your project or partnership interest</label>
                <textarea className="contact-textarea" placeholder="Type your message here..." required></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>Submit message</span>
                <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* TOAST SYSTEM */}
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.visible ? "show" : ""}`}>
          <span>✔️</span> <span>{t.message}</span>
        </div>
      ))}
    </>
  );
}
