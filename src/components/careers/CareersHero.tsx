import React from "react";

export function CareersHero() {
  return (
    <section className="careers-hero">
      <div className="careers-hero-bg">
        <img src="/assets/images/careers/careers_hero.png" alt="Careers at Aayush Wellness" />
      </div>
      <div className="careers-hero-overlay" />
      <div className="careers-hero-content">
        <h1 className="careers-hero-title">
          Build the future of<br />
          preventive wellness<br />
          with us.
        </h1>
      </div>
    </section>
  );
}
