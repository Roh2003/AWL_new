"use client";

import React from "react";
import JobList from "../../../components/admin/jobs/JobList";

export default function AdminJobsPage() {
  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Job Postings</h1>
          <p className="admin-page-subtitle">
            Post and manage career openings, select departments, location requirements, and track application statuses.
          </p>
        </div>
      </div>

      <JobList />
    </div>
  );
}
