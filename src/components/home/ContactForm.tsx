"use client";

import React, { useState } from "react";
import { SectionTag } from "@/components/ui/SectionTag";
import { apiClient } from "@/utils/apiClient";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error";
  visible: boolean;
}

const inquiryOptions = [
  "Prospective Distributor",
  "Institutional Buyer",
  "Healthcare Partner",
  "Investor",
  "Other",
];

export function ContactForm() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (message: string, type: "success" | "error") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, visible: false }]);

    // Animate in
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: true } : t))
      );
    }, 100);

    // Animate out
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: false } : t))
      );
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 400);
    }, 4500);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || undefined,
        inquiryType: formData.inquiryType || undefined,
        message: formData.message.trim(),
      };

      await apiClient.post("/contact", payload);

      showToast("Inquiry submitted successfully! We'll contact you soon.", "success");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        company: "",
        inquiryType: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error("[ContactForm] Submit error:", err);
      const message =
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again later.";
      showToast(message, "error");
    } finally {
      setIsSubmitting(false);
    }
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
                  <input
                    type="text"
                    name="fullName"
                    className="contact-input"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="contact-input-group">
                  <label className="contact-input-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="contact-input"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-input-group">
                  <label className="contact-input-label">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    className="contact-input"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="contact-input-group">
                  <label className="contact-input-label">Inquiry Type</label>
                  <div className="contact-select-wrapper">
                    <select
                      name="inquiryType"
                      className="contact-select"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Select an option</option>
                      {inquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
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
                <textarea
                  name="message"
                  className="contact-textarea"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
                style={isSubmitting ? { opacity: 0.7, cursor: "not-allowed" } : undefined}
              >
                <span>{isSubmitting ? "Sending..." : "Submit message"}</span>
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M16.9706 24.0415L24.0416 16.9705L16.9706 9.89941M24.0416 16.9705H9.89949" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* TOAST SYSTEM */}
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`toast ${t.visible ? "show" : ""}`}
          style={t.type === "error" ? { borderColor: "rgba(211, 47, 47, 0.4)" } : undefined}
        >
          <span>{t.type === "success" ? "✔️" : "❌"}</span>
          <span>{t.message}</span>
        </div>
      ))}
    </>
  );
}
