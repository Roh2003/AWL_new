import React from "react";

export function AboutHero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-photo"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Defining wellness through science &amp; nature</h1>
        <p className="hero-body">
          <span className="hero-asterisk">✦</span>
          Aayush Wellness Limited is a publicly listed preventive healthcare and wellness company — bridging ancient Ayurvedic wisdom with modern science to make proactive health a daily reality for every individual.
        </p>
      </div>
      <div className="scroll-hint">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
