"use client";

import React, { useState } from "react";

const stages = [
  {
    label: "Stage 1",
    dotType: "acc-dot-lime",
    title: "Application Screening",
    desc: "Initial Application Review",
    criteria: "Criteria Focus",
    tags: ["Problem Clarity", "Founding Team"],
  },
  {
    label: "Stage 2",
    dotType: "acc-dot-dark",
    title: "Business & Market Review",
    desc: "Market And Business Assessment",
    criteria: "Criteria Focus",
    tags: ["Market Opportunity", "Business Model"],
  },
  {
    label: "Stage 3",
    dotType: "acc-dot-gray",
    title: "Founder Interaction",
    desc: "Founder Discussion And Evaluation",
    criteria: "Criteria Focus",
    tags: ["Vision & Execution", "Strategic Fit"],
  },
  {
    label: "Stage 4",
    dotType: "acc-dot-lime",
    title: "Due Diligence",
    desc: "Detailed Business Review",
    criteria: "Criteria Focus",
    tags: ["Scalability", "Commercial Viability"],
  },
  {
    label: "Stage 5",
    dotType: "acc-dot-dark",
    title: "Investment Decision",
    desc: "Final Selection And Onboarding",
    criteria: "Criteria Focus",
    tags: ["Long-Term Potential", "Investment Alignment"],
  },
];

/* Decorative tab styles matching the original HTML design */
const defaultTabStyle = (idx: number) => {
  if (idx === 1 || idx === 4) return "acc-stage-tab tab-active-dark";
  if (idx === 3) return "acc-stage-tab tab-active-lime";
  return "acc-stage-tab";
};

export function AccEvaluation() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const getTabClass = (idx: number) => {
    if (activeTab !== null) {
      if (activeTab === idx) {
        return idx === 3 ? "acc-stage-tab tab-active-lime" : "acc-stage-tab tab-active-dark";
      }
      return "acc-stage-tab";
    }
    return defaultTabStyle(idx);
  };

  return (
    <section className="acc-eval">
      {/* Header */}
      <div className="acc-eval-header">
        <div className="reveal">
          <span className="acc-eval-tag">Evaluation Process</span>
        </div>
        <h2 className="acc-eval-title reveal reveal-delay-1">Our Evaluation Journey</h2>
      </div>

      {/* Stage tabs — decorative by default, interactive on click */}
      <div className="acc-stage-tabs reveal">
        {stages.map((s, idx) => (
          <button
            key={s.label}
            className={getTabClass(idx)}
            onClick={() => setActiveTab(activeTab === idx ? null : idx)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Steps — cascading waterfall layout */}
      <div className="acc-steps reveal reveal-delay-1">
        {stages.map((s) => (
          <div className="acc-step-col" key={s.label}>
            {/* Dashed vertical line — length grows per nth-child CSS */}
            <div className="acc-step-line" />

            {/* Dot at bottom of line */}
            <div className={`acc-step-dot ${s.dotType}`} />

            {/* Content below dot */}
            <div className="acc-step-content">
              <div className="acc-step-title">{s.title}</div>
              <div className="acc-step-desc">{s.desc}</div>
              <div className="acc-step-criteria">{s.criteria}</div>
              <div className="acc-step-tags">
                {s.tags.map((t) => (
                  <span className="acc-step-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
