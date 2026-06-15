"use client";
import React, { useState } from "react";
import { AyuTag } from "@/components/ui/AyuTag";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  img: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Ankit Verma",
    role: "Business Analyst",
    quote: "A culture that encourages learning, experimentation, and collaboration - that's what makes Aayush Wellness a place where you truly grow.",
    img: "/assets/images/careers/careers_ankit.png",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Product Manager",
    quote: "The energy here is infectious. We are given the autonomy to take risks, innovate fast, and build healthcare solutions that will touch millions of lives.",
    img: "/assets/images/careers/careers_woman_blazer.png",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Senior Formulator",
    quote: "Working at the intersection of ancient Ayurveda and modern science gives us the opportunity to create truly novel formulations that solve daily health challenges.",
    img: "/assets/images/careers/careers_vikram.png",
  },
];

export function CareersFeels() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="careers-feels">
      <div className="careers-feels-header reveal">
        <AyuTag label="Life At Aayush" theme="light" />
        <h2 className="careers-feels-heading">What It Actually Feels Like To Work Here</h2>
      </div>

      <div className="careers-feels-slider-container reveal d1">
        <div
          className="careers-feels-slider-track"
          style={{
            "--active-idx": activeIdx
          } as React.CSSProperties}
        >
          {testimonialsData.map((t, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={t.id}
                className={`careers-feels-slide ${isActive ? "active" : "inactive"}`}
                onMouseEnter={() => {
                  if (!isActive) setActiveIdx(idx);
                }}
                onClick={() => {
                  if (!isActive) setActiveIdx(idx);
                }}
              >
                <div className="careers-feels-slide-img">
                  <img src={t.img} alt={t.name} />
                </div>
                <div className="careers-feels-slide-quote-card">
                  <p className="careers-feels-quote">“{t.quote}”</p>
                  <div className="careers-feels-author">
                    <span className="careers-feels-name">{t.name}</span>
                    <span className="careers-feels-role">{t.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="careers-feels-dots">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              className={`careers-feels-dot ${idx === activeIdx ? "active" : ""}`}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
