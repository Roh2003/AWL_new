import React from "react";

export function SusQuote() {
  return (
    <section id="quote-banner">
      <div className="quote-card reveal">
        <svg className="quote-wave" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 Q50 10 100 40 Q150 70 200 40" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M0 55 Q50 25 100 55 Q150 85 200 55" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <p className="quote-text">
          Our responsibility to the planet and to the people who inhabit it is not peripheral to our mission.<br />
          It is the mission.
        </p>
      </div>
    </section>
  );
}
