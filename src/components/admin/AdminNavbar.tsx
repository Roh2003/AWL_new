"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface AdminNavbarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (val: boolean) => void;
}

export default function AdminNavbar({
  isMobileOpen,
  setIsMobileOpen,
}: AdminNavbarProps) {
  const pathname = usePathname();

  // Create human-readable breadcrumbs from the pathname (e.g. /admin/press-releases -> Admin / Press Releases)
  const getBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.map((segment, index) => {
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return (
        <span key={segment} style={{ display: "flex", alignItems: "center" }}>
          {index > 0 && (
            <svg
              style={{ margin: "0 8px", color: "var(--admin-text-muted)" }}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
          <span
            style={{
              color:
                index === segments.length - 1
                  ? "var(--admin-lime)"
                  : "var(--admin-text-secondary)",
              fontWeight: index === segments.length - 1 ? 600 : 400,
            }}
          >
            {label}
          </span>
        </span>
      );
    });
  };

  return (
    <header className="admin-navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Mobile menu toggle */}
        <button
          className="admin-sidebar-collapse-btn"
          style={{ display: "none" }} // overridden in CSS media query for mobile/tablet screens
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        {/* Dynamic breadcrumb navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "0.9rem",
          }}
        >
          {getBreadcrumbs()}
        </div>
      </div>

      {/* Right side elements */}
      <div className="admin-navbar-actions">
        <div className="admin-navbar-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--admin-text-muted)" }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input type="text" placeholder="Search..." disabled />
        </div>

        <div className="admin-user-profile">
          <div className="admin-user-avatar">A</div>
          <div className="admin-user-info">
            <span className="admin-user-name">Admin User</span>
            <span className="admin-user-role">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
