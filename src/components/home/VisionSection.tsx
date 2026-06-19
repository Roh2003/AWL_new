import React from "react";
import { SectionTag } from "@/components/ui/SectionTag";

export function VisionSection() {
  return (
    <section id="vision">
      {/* Background video */}
      <video
        className="vision-video-bg"
        src="/Abstract_cellular_architecture.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="vision-overlay" />

      <div className="vision-inner">
        {/* Left: section tag */}
        <div className="vision-left reveal">
          <SectionTag num="07" label="Our Vision" theme="light" />
        </div>

        {/* Right: title + body */}
        <div className="vision-text reveal reveal-delay-2">
          <h2 className="vision-title">
            Building the future of preventive wellness for modern India
          </h2>
          <p className="vision-body">
            Aayush Wellness is creating an integrated ecosystem of nutraceuticals,
            herbal wellness, diagnostics, and healthcare innovation designed to make
            proactive wellness more accessible, trustworthy, and scalable across India.
          </p>
        </div>
      </div>
    </section>
  );
}
