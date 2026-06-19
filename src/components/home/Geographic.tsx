import React from "react";
import { SectionTag } from "@/components/ui/SectionTag";

export function Geographic() {
  return (
    <section id="reach">
      {/* Header: section tag left, title + description right */}
      <div className="reach-header">
        <div className="reach-header-left">
          <SectionTag num="04" label="Our Reach" theme="dark" className="reveal" />
        </div>
        <div className="reach-header-right reveal">
          <h2 className="reach-title">Pan-India. Built For What&apos;s Next</h2>
          <div className="reach-body">
            <p>Aayush Wellness has established a strong footprint across India, making preventive healthcare and wellness solutions accessible to consumers nationwide through digital commerce and marketplace platforms.</p>
            <p>As the company continues to scale, it is exploring opportunities to expand its presence across South Asia, the UAE, and Southeast Asia.</p>
          </div>
        </div>
      </div>

      {/* Map video */}
      <div className="reach-map reveal">
        {/* Desktop Map Video */}
        <video
          src="/assets/images/Map Desktop View.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="reach-map-video desktop-map-video"
        />
        {/* Mobile Map Video */}
        <video
          src="/Map Mobile View.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="reach-map-video mobile-map-video"
        />
      </div>
    </section>
  );
}
