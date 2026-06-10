import React from "react";

export function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-bg">
        <video autoPlay loop muted playsInline>
          <source src="/Hero Video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-actions">
          <a href="#products" className="btn-ghost">Explore our products</a>
          <a href="#contact" className="btn-lime">Partner with us</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
