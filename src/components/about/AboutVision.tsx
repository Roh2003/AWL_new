"use client"

import React, { useEffect, useRef, useState } from "react";

export function AboutVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId: number;

    const getScrollProgress = () => {
      const container = containerRef.current;
      if (!container) return 0;
      const rect = container.getBoundingClientRect();
      // Start progress when the top of the container reaches the half of the screen
      const startOffset = window.innerHeight / 2;
      const totalScrollable = rect.height - window.innerHeight + startOffset;
      if (totalScrollable <= 0) return 0;
      return Math.max(0, Math.min(1, (startOffset - rect.top) / totalScrollable));
    };

    const tick = () => {
      targetProgress = getScrollProgress();
      // Lerp factor: 0.045 = slow & smooth, increase for faster
      currentProgress += (targetProgress - currentProgress) * 0.045;
      setProgress(currentProgress);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Calculate opacities and translation values based on scroll progress

  // Background 2 (Leaf/Swimmer) slides in from 0.35 to 0.55
  let bg2TranslateY = 100;
  if (progress > 0.35) {
    bg2TranslateY = Math.max(0, 100 - ((progress - 0.35) / 0.2) * 100);
  }

  // Card 1 (Vision) — enters slowly 0→0.15, stays 0.15→0.30, exits 0.30→0.42
  let card1Opacity = 0;
  let card1TranslateY = 25;

  if (progress < 0.15) {
    const ratio = progress / 0.15;
    card1Opacity = ratio;
    card1TranslateY = 25 - ratio * 25;
  } else if (progress >= 0.15 && progress < 0.30) {
    card1Opacity = 1;
    card1TranslateY = 0;
  } else if (progress >= 0.30 && progress < 0.42) {
    const ratio = (progress - 0.30) / 0.12;
    card1Opacity = 1 - ratio;
    card1TranslateY = -ratio * 25;
  } else {
    card1Opacity = 0;
    card1TranslateY = -25;
  }

  // Card 2 (Purpose) — enters slowly 0.40→0.70, stays at center 0.70+
  let card2Opacity = 0;
  let card2TranslateY = 25;

  if (progress >= 0.40 && progress < 0.70) {
    const ratio = (progress - 0.40) / 0.30;
    card2Opacity = ratio;
    card2TranslateY = 25 - ratio * 25;
  } else if (progress >= 0.70) {
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
              backgroundColor: `rgba(255, 255, 255, ${0.15 * card1Opacity})`,
              backdropFilter: `blur(${10 * card1Opacity}px)`,
              WebkitBackdropFilter: `blur(${10 * card1Opacity}px)`,
              borderColor: `rgba(255, 255, 255, ${0.15 * card1Opacity})`,
              transform: `translate(-50%, calc(-50% + ${card1TranslateY}vh))`,
              pointerEvents: card1Opacity > 0.1 ? "auto" : "none"
            }}
          >
            <div className="vision-label" style={{ opacity: card1Opacity }}>Our Vision</div>
            <div className="vision-text" style={{ opacity: card1Opacity }}>
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
              backgroundColor: `rgba(120, 140, 60, ${0.35 * card2Opacity})`,
              backdropFilter: `blur(${20 * card2Opacity}px)`,
              WebkitBackdropFilter: `blur(${20 * card2Opacity}px)`,
              borderColor: `rgba(255, 255, 255, ${0.2 * card2Opacity})`,
              transform: `translate(-50%, calc(-50% + ${card2TranslateY}vh))`,
              pointerEvents: card2Opacity > 0.1 ? "auto" : "none"
            }}
          >
            <div className="purpose-label" style={{ opacity: card2Opacity }}>Our Purpose</div>
            <div className="purpose-text" style={{ opacity: card2Opacity }}>
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
