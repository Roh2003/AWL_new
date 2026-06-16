import React from "react";
import { AyuTag } from "@/components/ui/AyuTag";

export function CareersThrive() {
  return (
    <section className="careers-thrive">
      <div className="careers-thrive-header reveal">
        <AyuTag label="What We Look For" theme="dark" />
        <h2 className="careers-thrive-heading">Who Thrives At Aayush Wellness</h2>
      </div>

      <div className="careers-thrive-grid">
        {/* Column 1 */}
        <div className="careers-thrive-col col-1">
          <div className="careers-thrive-img-box reveal">
            <img src="/assets/images/careers/careers_meeting.png" alt="Business Meeting" />
          </div>
          <div className="careers-thrive-card reveal d1">
            <div className="careers-thrive-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.34454 16.527C7.00665 16.527 6.73242 16.2528 6.73242 15.9149V3.67266C6.73242 3.33477 7.00665 3.06055 7.34454 3.06055H12.2414C12.5793 3.06055 12.8536 3.33477 12.8536 3.67266V15.9149C12.8536 16.2528 12.5793 16.527 12.2414 16.527H7.34454Z" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.9141 9.79382H12.8535" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.73244 9.79382H3.67188" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="careers-thrive-card-title">Growth Mindset</h3>
            <p className="careers-thrive-card-body">
              People who learn fast, embrace challenges, and seek to improve every day.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="careers-thrive-col col-2">
          <div className="careers-thrive-card reveal">
            <div className="careers-thrive-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15.9141 9.18175L9.79301 3.06061L3.67188 9.18175" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.9141 15.3028L9.79301 9.18171L3.67188 15.3028H15.9141Z" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="careers-thrive-card-title">Ownership</h3>
            <p className="careers-thrive-card-body">
              Professionals who take initiative, think long-term, and drive results.
            </p>
          </div>
          <div className="careers-thrive-img-box reveal d1">
            <img src="/assets/images/careers/careers_laptop.png" alt="Collaborating at work" />
          </div>
        </div>

        {/* Column 3 (Tall Image) */}
        <div className="careers-thrive-col col-3 tall reveal">
          <div className="careers-thrive-img-box tall-img">
            <img src="/assets/images/careers/careers_outdoor.png" alt="Colleagues laughing" />
          </div>
        </div>

        {/* Column 4 */}
        <div className="careers-thrive-col col-4">
          <div className="careers-thrive-card reveal">
            <div className="careers-thrive-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.527 16.5271H3.06055" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.3024 13.4665C15.3024 13.8044 15.0281 14.0786 14.6903 14.0786H11.6297C11.2918 14.0786 11.0176 13.8044 11.0176 13.4665V6.12115C11.0176 5.78326 11.2918 5.50903 11.6297 5.50903H14.6903C15.0281 5.50903 15.3024 5.78326 15.3024 6.12115V13.4665Z" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.89727 14.0786C4.55938 14.0786 4.28516 13.8044 4.28516 13.4665V3.06054C4.28516 2.72265 4.55938 2.44843 4.89727 2.44843H7.95784C8.29572 2.44843 8.56995 2.72265 8.56995 3.06054V13.4665C8.56995 13.8044 8.29572 14.0786 7.95784 14.0786H4.89727Z" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="careers-thrive-card-title">Customer Focus</h3>
            <p className="careers-thrive-card-body">
              Individuals who care deeply about improving lives and creating real value.
            </p>
          </div>
          <div className="careers-thrive-card reveal d1">
            <div className="careers-thrive-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.67266 15.9149C3.33477 15.9149 3.06055 15.6407 3.06055 15.3028V7.95745C3.06055 7.61956 3.33477 7.34534 3.67266 7.34534H15.9149C16.2528 7.34534 16.527 7.61956 16.527 7.95745V15.3028C16.527 15.6407 16.2528 15.9149 15.9149 15.9149H3.67266Z" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.28516 4.89685H15.3032" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.50977 2.44849H14.0794" stroke="#0F1012" strokeWidth="0.816151" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="careers-thrive-card-title">Collaboration</h3>
            <p className="careers-thrive-card-body">
              People who build, support, and succeed together across teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
