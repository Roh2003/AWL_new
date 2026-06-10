import React from "react";

const leftItems = [
  {
    icon: "₹",
    title: "Strategic Funding",
    body: "Growth capital designed to accelerate innovation, scale, and long-term value creation.",
  },
  {
    icon: "⚗",
    title: "Product & Industry Expertise",
    body: "Operational guidance and sector knowledge to support innovation and product development.",
  },
];

const rightItems = [
  {
    icon: "🌐",
    title: "Distribution & Network Access",
    body: "Direct access to Aayush's pan-India distribution network and retail partnerships to accelerate market reach.",
  },
  {
    icon: "🤝",
    title: "Mentorship & Governance",
    body: "Board-level guidance from industry veterans, regulatory advisors, and domain experts in health and wellness.",
  },
];

export function AccOffer() {
  return (
    <section className="acc-offer">
      {/* Header */}
      <div className="acc-offer-header">
        <div className="reveal">
          <span className="acc-offer-tag">What We Offer</span>
        </div>
        <div className="acc-offer-title-wrap reveal reveal-delay-1">
          <h2 className="acc-offer-title">Capital Is Only The Beginning</h2>
          <p className="acc-offer-subtitle">Our support is operational, not just financial.</p>
        </div>
      </div>

      {/* 3-col grid: left items | center image | right items */}
      <div className="acc-offer-grid">
        {/* Left column */}
        <div className="acc-offer-col reveal-left">
          {leftItems.map((item) => (
            <div className="acc-offer-item" key={item.title}>
              <div className="acc-offer-icon">{item.icon}</div>
              <h3 className="acc-offer-item-title">{item.title}</h3>
              <p className="acc-offer-item-body">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Center image / video slot ─────────────────────────────────────
            Drop your <video> or <Image> inside .acc-offer-center-img.
            The placeholder emoji is shown when the slot is empty.
        ──────────────────────────────────────────────────────────────────── */}
        <div className="acc-offer-center-img reveal">
          {/* <Image src="/assets/images/accelerator/offer.jpg" alt="Offer" fill style={{objectFit:'cover'}} /> */}
          <span className="acc-offer-center-placeholder">🌱</span>
        </div>

        {/* Right column */}
        <div className="acc-offer-col right reveal-right">
          {rightItems.map((item) => (
            <div className="acc-offer-item" key={item.title}>
              <div className="acc-offer-icon">{item.icon}</div>
              <h3 className="acc-offer-item-title">{item.title}</h3>
              <p className="acc-offer-item-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
