"use client";

import Link from "next/link";
import React from "react";

export default function AdminDashboardPage() {
  const stats = [
    {
      label: "Press Releases",
      value: 6,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
      ),
      href: "/admin/press-releases",
    },
    {
      label: "Total Products",
      value: 12,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.27 6.96 8.73 5 8.73-5"/><path d="M12 22.08V12"/></svg>
      ),
      href: "/admin/products",
    },
    {
      label: "Contact Responses",
      value: 18,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      ),
      href: "/admin/contacts",
    },
    {
      label: "Job Postings",
      value: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
      ),
      href: "/admin/jobs",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "press",
      icon: "📰",
      text: "Press release 'Aayush Wellness Reports Q4 Earnings' published",
      time: "2 hours ago",
      meta: "PR-204",
    },
    {
      id: 2,
      type: "contact",
      icon: "📩",
      text: "New contact response received from Rohan Sharma (Business Inquiry)",
      time: "4 hours ago",
      meta: "CON-88",
    },
    {
      id: 3,
      type: "product",
      icon: "🛍️",
      text: "Product 'Aayush Herbal Cough Syrup' details updated",
      time: "Yesterday",
      meta: "PROD-12",
    },
    {
      id: 4,
      type: "job",
      icon: "💼",
      text: "New job opening 'Quality Assurance Lead' created in Mumbai",
      time: "2 days ago",
      meta: "JOB-40",
    },
    {
      id: 5,
      type: "contact",
      icon: "📩",
      text: "New contact response received from Priya Patel (Feedback)",
      time: "3 days ago",
      meta: "CON-87",
    },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Dashboard Overview</h1>
          <p className="admin-page-subtitle">
            Welcome back, Admin. Here is what is happening with your website content today.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="admin-stats-grid">
        {stats.map((stat, idx) => (
          <Link
            key={idx}
            href={stat.href}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="admin-stat-card">
              <div className="admin-stat-icon-wrapper">{stat.icon}</div>
              <div className="admin-stat-info">
                <span className="admin-stat-label">{stat.label}</span>
                <span className="admin-stat-value">{stat.value}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="admin-dashboard-row">
        {/* Recent Activity Card */}
        <div className="admin-section-card">
          <h2 className="admin-section-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--admin-lime)" }}
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Recent System Activity
          </h2>
          <div className="admin-activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="admin-activity-item">
                <div className="admin-activity-left">
                  <div className="admin-activity-icon">{activity.icon}</div>
                  <div>
                    <div className="admin-activity-text">{activity.text}</div>
                    <div className="admin-activity-time">{activity.time}</div>
                  </div>
                </div>
                <div className="admin-activity-meta">{activity.meta}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="admin-section-card">
          <h2 className="admin-section-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--admin-lime)" }}
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" x2="12" y1="9" y2="13" />
              <line x1="12" x2="12.01" y1="17" y2="17" />
            </svg>
            Quick Actions
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            <Link href="/admin/press-releases" style={{ textDecoration: "none" }}>
              <button
                className="admin-btn admin-btn-secondary"
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                <span>➕ Add Press Release</span>
              </button>
            </Link>
            <Link href="/admin/products" style={{ textDecoration: "none" }}>
              <button
                className="admin-btn admin-btn-secondary"
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                <span>➕ Add New Product</span>
              </button>
            </Link>
            <Link href="/admin/jobs" style={{ textDecoration: "none" }}>
              <button
                className="admin-btn admin-btn-secondary"
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                <span>➕ Post a New Job</span>
              </button>
            </Link>
            <Link href="/admin/contacts" style={{ textDecoration: "none" }}>
              <button
                className="admin-btn admin-btn-secondary"
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                <span>📨 View Contact Responses</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
