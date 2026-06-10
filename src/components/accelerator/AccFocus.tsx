import React from "react";

const focusAreas = [
  {
    icon: "💊",
    title: "Nutraceuticals & Functional Nutrition",
    body: "Science-backed nutraceuticals, wellness products, and nutrition solutions designed for healthier everyday living.",
    delay: "",
  },
  {
    icon: "🌿",
    title: "Herbal & Ayurvedic Innovation",
    body: "Modern wellness brands combining Ayurvedic heritage with scientific research and product innovation.",
    delay: "reveal-delay-1",
  },
  {
    icon: "🛡",
    title: "AI-Powered Preventive Healthcare",
    body: "AI-powered health tools, preventive care platforms, and technology-driven wellness solutions.",
    delay: "reveal-delay-2",
  },
  {
    icon: "➕",
    title: "Accessible Healthcare Services",
    body: "Solutions that improve access to preventive healthcare, diagnostics, and wellness services.",
    delay: "reveal-delay-3",
  },
];

export function AccFocus() {
  return (
    <section className="acc-focus">
      {/* Header */}
      <div className="acc-focus-header">
        <div className="reveal">
          <span className="acc-focus-tag">Investment Focus</span>
        </div>
        <h2 className="acc-focus-title reveal reveal-delay-1">
          Where We Invest Our<br />Conviction
        </h2>
      </div>

      <div className="acc-focus-divider" />

      {/* 4-col grid */}
      <div className="acc-focus-grid">
        {focusAreas.map((area) => (
          <div className={`acc-focus-item reveal ${area.delay}`} key={area.title}>
            <div className="acc-focus-icon">{area.icon}</div>
            <h3 className="acc-focus-item-title">{area.title}</h3>
            <p className="acc-focus-item-body">{area.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
