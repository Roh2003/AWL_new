"use client";

import React from "react";
import PressReleaseList from "../../../components/admin/press-releases/PressReleaseList";

export default function AdminPressReleasesPage() {
  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Press Release Management</h1>
          <p className="admin-page-subtitle">
            Create, edit, publish, and delete press releases and corporate announcements.
          </p>
        </div>
      </div>

      <PressReleaseList />
    </div>
  );
}
