"use client";

import React, { useState, FormEvent } from "react";

export function AccApplication() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section className="acc-application" id="application">
      {/* Header */}
      <div className="acc-app-header">
        <div className="reveal">
          <span className="acc-app-tag">Application</span>
        </div>
        <h2 className="acc-app-title reveal reveal-delay-1">
          Apply For Funding &amp;<br />Partnership
        </h2>
      </div>

      <div className="acc-app-grid">
        {/* Left — image slot */}
        <div className="acc-app-img reveal-left">
          {/* Drop your <Image> here when ready */}
          {/* <Image src="/assets/handshake.jpg" fill alt="Partnership" style={{objectFit:'cover',borderRadius:16}} /> */}
          <span className="acc-app-img-placeholder">🤝</span>
        </div>

        {/* Right — form */}
        <div className="acc-form-wrap reveal-right">
          <form onSubmit={handleSubmit}>

            {/* Row 1 */}
            <div className="acc-form-row">
              <div className="acc-form-group">
                <label className="acc-form-label" htmlFor="founderName">Founder Name</label>
                <input id="founderName" className="acc-form-input" type="text" placeholder="John Doe" required />
              </div>
              <div className="acc-form-group">
                <label className="acc-form-label" htmlFor="companyName">Company Name</label>
                <input id="companyName" className="acc-form-input" type="text" placeholder="Eg. Zycus" required />
              </div>
            </div>

            <div className="acc-form-group">
              <label className="acc-form-label" htmlFor="emailAddr">Email Address</label>
              <input id="emailAddr" className="acc-form-input" type="email" placeholder="john@company.com" required />
            </div>

            <div className="acc-form-group">
              <label className="acc-form-label" htmlFor="website">Website / Portfolio</label>
              <input id="website" className="acc-form-input" type="url" placeholder="https://" />
            </div>

            <div className="acc-form-group">
              <label className="acc-form-label" htmlFor="vision">Brief Vision (Max 200 words)</label>
              <textarea
                id="vision"
                className="acc-form-textarea"
                placeholder="Tell us how you are transforming health..."
                maxLength={200}
                rows={5}
              />
            </div>

            <div className="acc-form-group">
              <label className="acc-form-label" htmlFor="deckLink">Pitch Deck Link (Drive/DocSend)</label>
              <input id="deckLink" className="acc-form-input" type="url" placeholder="Share your materials" />
            </div>

            <button
              type="submit"
              className={`acc-form-submit${submitted ? " acc-submitted" : ""}`}
            >
              {submitted ? "✓ Application Submitted!" : "Submit Application"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .acc-application {
          background: #000;
          color: #fff;
          padding: 60px 40px 80px;
          font-family: inherit;
        }

        .acc-app-header {
          margin-bottom: 40px;
        }

        .acc-app-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a3e635;
          border: 1px solid #a3e635;
          border-radius: 20px;
          padding: 4px 14px;
          margin-bottom: 16px;
        }

        .acc-app-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 700;
          line-height: 1.1;
          color: #fff;
          margin: 0;
        }

        .acc-app-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .acc-app-grid {
            grid-template-columns: 1fr;
          }
          .acc-app-img {
            min-height: 260px !important;
          }
        }

        /* ── Image panel ── */
        .acc-app-img {
          position: relative;
          min-height: 560px;
          border-radius: 16px;
          overflow: hidden;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .acc-app-img-placeholder {
          font-size: 64px;
          opacity: 0.6;
        }

        /* ── White form card ── */
        .acc-form-wrap {
          background: #ffffff;
          border-radius: 16px;
          padding: 32px 28px;
        }

        .acc-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 0;
        }

        .acc-form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 18px;
        }

        .acc-form-label {
          font-size: 13px;
          font-weight: 600;
          color: #111;
          margin-bottom: 7px;
          letter-spacing: 0.01em;
        }

        .acc-form-input {
          width: 100%;
          height: 44px;
          border: 1.5px solid #e2e2e2;
          border-radius: 8px;
          padding: 0 14px;
          font-size: 14px;
          color: #111;
          background: #ffffff;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s;
          font-family: inherit;
        }

        .acc-form-input::placeholder {
          color: #aaa;
        }

        .acc-form-input:focus {
          border-color: #a3e635;
        }

        /* ── Textarea — explicit white bg fixes dark-mode bleed ── */
        .acc-form-textarea {
          width: 100%;
          border: 1.5px solid #e2e2e2;
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 14px;
          color: #111;
          background: #ffffff;
          outline: none;
          resize: vertical;
          box-sizing: border-box;
          transition: border-color 0.2s;
          font-family: inherit;
          line-height: 1.6;
        }

        .acc-form-textarea::placeholder {
          color: #aaa;
        }

        .acc-form-textarea:focus {
          border-color: #a3e635;
        }

        /* ── Submit button ── */
        .acc-form-submit {
          width: 100%;
          height: 52px;
          border: none;
          border-radius: 8px;
          background: #a3e635;
          color: #111;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.01em;
          margin-top: 6px;
          transition: background 0.2s, transform 0.1s;
          font-family: inherit;
        }

        .acc-form-submit:hover {
          background: #bef264;
        }

        .acc-form-submit:active {
          transform: scale(0.99);
        }

        .acc-form-submit.acc-submitted {
          background: #4ade80;
          color: #052e16;
        }
      `}</style>
    </section>
  );
}