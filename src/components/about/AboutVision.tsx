"use client"

import React, { useEffect, useRef, useState } from "react";

export function AboutVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let targetProgress = 0;
    let currentProgress = 0;
    let rafId: number;

    const getScrollProgress = () => {
      const container = containerRef.current;
      if (!container) return 0;
      const rect = container.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return 0;
      return Math.max(0, Math.min(1, -rect.top / totalScrollable));
    };

    const tick = () => {
      targetProgress = getScrollProgress();
      // Lerp factor: 0.045 = slow & smooth, increase for faster
      currentProgress += (targetProgress - currentProgress) * 0.045;
      setProgress(currentProgress);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Return static stacking layout for mobile
  if (isMobile) {
    return (
      <div className="vision-mobile-container">
        {/* Vision Card Block */}
        <div className="vision-mobile-section">
          <div className="vision-mobile-bg yoga-img"></div>
          <div className="vision-mobile-overlay"></div>
          <div className="vision-mobile-card">
            <div className="vision-label">Our Vision</div>
            <div className="vision-text">
              To create a world where health is defined by prevention, not just treatment.
              We envision empowering every individual with accessible healthcare, science-backed nutrition,
              and holistic wellness solutions - bridging the gap between modern medicine and nature's wisdom
              to make proactive health a daily reality for all.
            </div>
          </div>
        </div>

        {/* Purpose Card Block */}
        <div className="vision-mobile-section">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="vision-mobile-bg leaf-img"
            poster="/assets/images/about/swimmer_pool.png"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          >
            <source src="/assets/images/about/about_vision_bg_2.mp4" type="video/mp4" />
          </video>
          <div className="vision-mobile-overlay"></div>
          <div className="vision-mobile-card purpose-theme">
            <div className="purpose-label">Our Purpose</div>
            <div className="purpose-text">
              To develop and deliver high-quality nutraceuticals, herbal wellness alternatives,
              and preventive healthcare services that support long-term well-being. Through rigorous
              scientific research, uncompromising quality, and a people-first approach - we make
              wellness simple, effective, and accessible to everyone.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate opacities and translation values based on scroll progress

  // Background 2 (Leaf/Swimmer) slides in from 0.45 to 0.65
  let bg2TranslateY = 100;
  if (progress > 0.45) {
    bg2TranslateY = Math.max(0, 100 - ((progress - 0.45) / 0.2) * 100);
  }

  // Card 1 (Vision) — enters slowly 0→0.15, stays 0.15→0.40, exits 0.40→0.52
  let card1Opacity = 0;
  let card1TranslateY = 100;

  if (progress < 0.15) {
    const ratio = progress / 0.15;
    card1Opacity = ratio;
    card1TranslateY = 100 - ratio * 100;
  } else if (progress >= 0.15 && progress < 0.40) {
    card1Opacity = 1;
    card1TranslateY = 0;
  } else if (progress >= 0.40 && progress < 0.52) {
    const ratio = (progress - 0.40) / 0.12;
    card1Opacity = 1 - ratio;
    card1TranslateY = -ratio * 100;
  } else {
    card1Opacity = 0;
    card1TranslateY = -100;
  }

  // Card 2 (Purpose) — enters slowly 0.50→0.80, stays at center 0.80+
  let card2Opacity = 0;
  let card2TranslateY = 100;

  if (progress >= 0.50 && progress < 0.80) {
    const ratio = (progress - 0.50) / 0.30;
    card2Opacity = ratio;
    card2TranslateY = 100 - ratio * 100;
  } else if (progress >= 0.80) {
    card2Opacity = 1;
    card2TranslateY = 0;
  }

  return (
    <div className="vision-scroll-container" ref={containerRef}>
      <div className="vision-sticky-frame">
        {/* Slide 1 Background (Yoga silhouette) */}
        <div
          className="vision-bg-slide yoga-slide"
          style={{ transform: "translateY(0)" }}
        >
          <div className="vision-bg-img yoga-img"></div>
          <div className="vision-overlay"></div>
        </div>

        {/* Slide 2 Background (Leaf texture) */}
        <div
          className="vision-bg-slide leaf-slide"
          style={{ transform: `translateY(${bg2TranslateY}%)` }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="vision-bg-img leaf-img"
            poster="/assets/images/about/swimmer_pool.png"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          >
            <source src="/assets/images/about/about_vision_bg_2.mp4" type="video/mp4" />
          </video>
          <div className="vision-overlay"></div>
        </div>

        {/* Contents */}
        <div className="vision-content-wrapper">
          {/* Card 1: Our Vision */}
          <div
            className="vision-card"
            style={{
              opacity: card1Opacity,
              transform: `translate(-50%, calc(-50% + ${card1TranslateY}vh))`,
              pointerEvents: card1Opacity > 0.1 ? "auto" : "none"
            }}
          >
            <div className="vision-label">Our Vision</div>
            <div className="vision-text">
              To create a world where health is defined by prevention, not just treatment.
              We envision empowering every individual with accessible healthcare, science-backed nutrition,
              and holistic wellness solutions - bridging the gap between modern medicine and nature's wisdom
              to make proactive health a daily reality for all.
            </div>
          </div>

          {/* Card 2: Our Purpose */}
          <div
            className="purpose-card"
            style={{
              opacity: card2Opacity,
              transform: `translate(-50%, calc(-50% + ${card2TranslateY}vh))`,
              pointerEvents: card2Opacity > 0.1 ? "auto" : "none"
            }}
          >
            <div className="purpose-label">Our Purpose</div>
            <div className="purpose-text">
              To develop and deliver high-quality nutraceuticals, herbal wellness alternatives,
              and preventive healthcare services that support long-term well-being. Through rigorous
              scientific research, uncompromising quality, and a people-first approach - we make
              wellness simple, effective, and accessible to everyone.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
