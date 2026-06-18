"use client";

import React, { useState } from "react";
import AdminTable, { TableColumn } from "../AdminTable";
import AdminModal from "../AdminModal";
import AdminDeleteConfirm from "../AdminDeleteConfirm";

interface AdminJob {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  exp: string;
  status: "Active" | "Closed";
}

const INITIAL_DATA: AdminJob[] = [
  {
    id: "job-1",
    title: "Product Manager",
    dept: "Product & Innovation",
    location: "Mumbai, India",
    type: "Full Time",
    exp: "1-3 yrs",
    status: "Active",
  },
  {
    id: "job-2",
    title: "Business Development Manager",
    dept: "Marketing & Growth",
    location: "Mumbai, India",
    type: "Full Time",
    exp: "1-2 yrs",
    status: "Active",
  },
  {
    id: "job-3",
    title: "Quality Assurance Lead",
    dept: "Product & Innovation",
    location: "Mumbai, India",
    type: "Full Time",
    exp: "3-5 yrs",
    status: "Active",
  },
  {
    id: "job-4",
    title: "SEO Specialist",
    dept: "Marketing & Growth",
    location: "Remote",
    type: "Contract",
    exp: "Fresher / 1 yr",
    status: "Closed",
  },
];

export default function JobList() {
  const [data, setData] = useState<AdminJob[]>(INITIAL_DATA);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<AdminJob | null>(null);
  const [deletingItem, setDeletingItem] = useState<AdminJob | null>(null);

  // Form states
  const [title, setTitle] = useState("");
  const [dept, setDept] = useState("Product & Innovation");
  const [location, setLocation] = useState("Mumbai, India");
  const [type, setType] = useState("Full Time");
  const [exp, setExp] = useState("");
  const [status, setStatus] = useState<"Active" | "Closed">("Active");

  const handleCreateOpen = () => {
    setEditingItem(null);
    setTitle("");
    setDept("Product & Innovation");
    setLocation("Mumbai, India");
    setType("Full Time");
    setExp("1-3 yrs");
    setStatus("Active");
    setIsFormOpen(true);
  };

  const handleEditOpen = (item: AdminJob) => {
    setEditingItem(item);
    setTitle(item.title);
    setDept(item.dept);
    setLocation(item.location);
    setType(item.type);
    setExp(item.exp);
    setStatus(item.status);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !exp.trim()) return;

    if (editingItem) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                title,
                dept,
                location,
                type,
                exp,
                status,
              }
            : item
        )
      );
    } else {
      const newItem: AdminJob = {
        id: `job-${Date.now()}`,
        title,
        dept,
        location,
        type,
        exp,
        status,
      };
      setData((prev) => [newItem, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteOpen = (item: AdminJob) => {
    setDeletingItem(item);
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (!deletingItem) return;
    setData((prev) => prev.filter((item) => item.id !== deletingItem.id));
    setIsDeleteOpen(false);
    setDeletingItem(null);
  };

  const columns: TableColumn<AdminJob>[] = [
    {
      header: "Job Title",
      accessor: "title",
      render: (row) => (
        <span style={{ fontWeight: "600", color: "var(--admin-text-primary)" }}>
          {row.title}
        </span>
      ),
    },
    {
      header: "Department",
      accessor: "dept",
    },
    {
      header: "Location",
      accessor: "location",
    },
    {
      header: "Job Type",
      accessor: "type",
      render: (row) => (
        <span className="admin-badge admin-badge-info">{row.type}</span>
      ),
    },
    {
      header: "Required Experience",
      accessor: "exp",
    },
    {
      header: "Status",
      accessor: "status",
      render: (row) => (
        <span
          className={`admin-badge ${
            row.status === "Active" ? "admin-badge-success" : "admin-badge-danger"
          }`}
        >
          {row.status === "Active" ? "Active" : "Closed"}
        </span>
      ),
    },
  ];

  return (
    <div>
      <AdminTable
        data={data}
        columns={columns}
        searchPlaceholder="Search job openings..."
        searchKeys={["title", "dept", "location"]}
        onCreate={handleCreateOpen}
        createButtonText="Post a Job"
        onEdit={handleEditOpen}
        onDelete={handleDeleteOpen}
      />

      {/* Form Modal */}
      <AdminModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingItem ? "Edit Job Posting" : "Create Job Posting"}
      >
        <form onSubmit={handleFormSubmit}>
          <div className="admin-form-group">
            <label className="admin-label">Job Title</label>
            <input
              type="text"
              className="admin-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Senior Business Development Executive"
              required
            />
          </div>

          <div className="admin-form-row">
            <div className="admin-form-group">
              <label className="admin-label">Department</label>
              <select
                className="admin-select"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
              >
                <option value="Product & Innovation">Product & Innovation</option>
                <option value="Marketing & Growth">Marketing & Growth</option>
                <option value="Sales & Retail">Sales & Retail</option>
                <option value="Operations & Quality">Operations & Quality</option>
                <option value="Finance & Admin">Finance & Admin</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Location</label>
              <select
                className="admin-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="Mumbai, India">Mumbai, India</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid (Mumbai)">Hybrid (Mumbai)</option>
                <option value="Bengaluru, India">Bengaluru, India</option>
              </select>
            </div>
          </div>

          <div className="admin-form-row">
            <div className="admin-form-group">
              <label className="admin-label">Job Type</label>
              <select
                className="admin-select"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Required Experience</label>
              <input
                type="text"
                className="admin-input"
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                placeholder="e.g. 1-3 yrs, 3-5 yrs, Freshers"
                required
              />
            </div>
          </div>

          <div className="admin-switch-container">
            <div className="admin-switch-label">
              <span className="admin-switch-title">Active Posting</span>
              <span className="admin-switch-subtitle">
                Make this opening visible to applicants on the careers page
              </span>
            </div>
            <label className="admin-switch">
              <input
                type="checkbox"
                checked={status === "Active"}
                onChange={(e) =>
                  setStatus(e.target.checked ? "Active" : "Closed")
                }
              />
              <span className="admin-switch-slider" />
            </label>
          </div>

          <div className="admin-modal-footer" style={{ padding: "16px 0 0 0", borderTop: "1px solid var(--admin-border)" }}>
            <button
              type="button"
              className="admin-btn admin-btn-secondary"
              onClick={() => setIsFormOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="admin-btn admin-btn-primary">
              {editingItem ? "Save Changes" : "Post Job"}
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Delete confirmation */}
      <AdminDeleteConfirm
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
        itemName={deletingItem?.title || ""}
      />
    </div>
  );
}
