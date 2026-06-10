import React from "react";
import { SectionTag } from "@/components/ui/SectionTag";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function TrustedName() {
  return (
    <section id="about">
      <div className="about-left reveal">
        <SectionTag num="01" label="Who Are We" theme="dark" className="reveal" />
        <div className="about-shape">
          <img
            src="/Geometric Element.png"
            alt=""
            className="about-geo-img"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="about-right">
        <h2 className="about-title reveal reveal-delay-1">A Trusted Name In Integrated Healthcare</h2>
        <p className="about-body reveal reveal-delay-2">Founded in 1984 and incorporated as Aayush Wellness Limited, we are a BSE-listed integrated healthcare company headquartered in Mumbai, Maharashtra. For four decades, we have built a reputation as one of India&apos;s most trusted brands in nutraceuticals and preventive wellness.</p>
        <p className="about-body reveal reveal-delay-3">We are a publicly listed, audited, and regulated company. Every product we make is a reflection of our commitment to transparency, quality, and affordable healthcare for all.</p>
        <div className="about-stats reveal reveal-delay-4">
          <div className="stat-item">
            <div className="stat-value">BSE</div>
            <div className="stat-label">Publicly Listed</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              <AnimatedCounter target={100} suffix="K+" />
            </div>
            <div className="stat-label">Customers Reached</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              <AnimatedCounter target={40} suffix="+" />
            </div>
            <div className="stat-label">Years of Trust</div>
          </div>
        </div>
        <a href="/about" className="about-read-more reveal reveal-delay-4">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M16.9706 24.0415L24.0416 16.9705L16.9706 9.89941M24.0416 16.9705H9.89949" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
