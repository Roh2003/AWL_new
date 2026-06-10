import React from "react";

export function AccBack() {
  return (
    <section className="acc-back">
      {/* Header */}
      <div className="acc-back-header">
        <div className="reveal">
          <span className="acc-back-tag">Who We Back</span>
        </div>
        <div className="reveal reveal-delay-1">
          <h2 className="acc-back-title">The Founders We Are Built For</h2>
          <p className="acc-back-subtitle">
            We are not a generalist fund. We back a specific kind of founder — one building at the
            intersection of health, science, and genuine human impact, with the discipline to build
            something that lasts.
          </p>
        </div>
      </div>

      {/* Bento grid */}
      <div className="acc-bento">
        {/* Row 1 — left: white card */}
        <div className="acc-bento-card acc-bc-white reveal">
          <h3 className="acc-bc-title">Exceptional Teams</h3>
          <p className="acc-bc-body">
            We look for complementary skill sets, technical depth, and a relentless focus on solving
            user problems. Founders must show skin in the game and a long-term vision.
          </p>
        </div>

        {/* Row 1 — right: dark card with starfield */}
        <div className="acc-bento-card acc-bc-dark reveal reveal-delay-1">
          <h3 className="acc-bc-title">Market Potential</h3>
          <p className="acc-bc-body">
            Large addressable markets where a 10x improvement is possible through innovation.
          </p>
        </div>

        {/* Row 2 — left: lime card */}
        <div className="acc-bento-card acc-bc-lime reveal reveal-delay-1">
          <div className="acc-bc-icon">✦✦</div>
          <h3 className="acc-bc-title">Innovation</h3>
          <p className="acc-bc-body">
            True differentiation — whether in product formulation, delivery, or business model.
          </p>
        </div>

        {/* Row 2 — right: border card with emoji side image */}
        <div className="acc-bento-card acc-bc-border reveal reveal-delay-2">
          <div className="acc-bc-text-side">
            <h3 className="acc-bc-title">Consumer Impact</h3>
            <p className="acc-bc-body">
              Evidence of positive outcomes for the end consumer and a clear path to generating
              sustainable value.
            </p>
          </div>
          <div className="acc-bc-img-side">🧬</div>
        </div>
      </div>
    </section>
  );
}
