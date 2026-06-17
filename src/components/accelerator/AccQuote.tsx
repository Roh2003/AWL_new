import React from "react";

export function AccQuote() {
  return (
    <section className="acc-quote-section">
      <div className="acc-quote-card reveal">
        <div className="acc-quote-bg" />
        <div className="acc-quote-video-wrapper">
          <video autoPlay muted loop playsInline className="acc-quote-video">
            <source src="/assets/images/accelarator/acc_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="acc-quote-overlay" />
        <p className="acc-quote-text">
          By collaborating with forward-thinking organizations, we&apos;re not just expanding our
          portfolio, we&apos;re fueling a movement toward smarter, more personalized health and
          wellness solutions
        </p>
        <div className="acc-quote-author">
          <div className="acc-quote-name">- Mr. Naveena Kumar</div>
          <div className="acc-quote-role">Managing Director of Aayush Wellness Limited</div>
        </div>
      </div>
    </section>
  );
}
