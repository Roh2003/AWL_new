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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"/>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="careers-thrive-card-title">Customer Focus</h3>
            <p className="careers-thrive-card-body">
              Individuals who care deeply about improving lives and creating real value.
            </p>
          </div>
          <div className="careers-thrive-card reveal d1">
            <div className="careers-thrive-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
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
