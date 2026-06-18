"use client";

import React, { useState } from "react";
import AdminTable, { TableColumn } from "../AdminTable";
import AdminModal from "../AdminModal";
import AdminDeleteConfirm from "../AdminDeleteConfirm";
import { NEWS_DATA, NewsItem } from "../../news/newsData";

interface AdminNewsItem extends NewsItem {
  status: "Published" | "Draft";
}

const INITIAL_DATA: AdminNewsItem[] = NEWS_DATA.map((item, idx) => ({
  ...item,
  status: idx % 3 === 0 ? "Draft" : "Published",
}));

export default function PressReleaseList() {
  const [data, setData] = useState<AdminNewsItem[]>(INITIAL_DATA);
  
  // Modals state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<AdminNewsItem | null>(null);
  const [deletingItem, setDeletingItem] = useState<AdminNewsItem | null>(null);

  // Form inputs state
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Press Release");
  const [source, setSource] = useState("");
  const [dateISO, setDateISO] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState<"Published" | "Draft">("Published");

  // Format utility
  const formatDisplayDate = (isoString: string) => {
    if (!isoString) return "";
    const dateObj = new Date(isoString);
    if (isNaN(dateObj.getTime())) return isoString;
    const day = dateObj.getDate();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Open Form for Add
  const handleCreateOpen = () => {
    setEditingItem(null);
    setTitle("");
    setCategory("Press Release");
    setSource("");
    setDateISO(new Date().toISOString().split("T")[0]);
    setLink("#");
    setStatus("Published");
    setIsFormOpen(true);
  };

  // Open Form for Edit
  const handleEditOpen = (item: AdminNewsItem) => {
    setEditingItem(item);
    setTitle(item.title);
    setCategory(item.category);
    setSource(item.source);
    setDateISO(item.dateISO || new Date().toISOString().split("T")[0]);
    setLink(item.link);
    setStatus(item.status);
    setIsFormOpen(true);
  };

  // Submit form
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !source.trim()) return;

    const displayDate = formatDisplayDate(dateISO);

    if (editingItem) {
      // Edit mode
      setData((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                title,
                category,
                source,
                date: displayDate,
                dateISO,
                link,
                status,
              }
            : item
        )
      );
    } else {
      // Create mode
      const newItem: AdminNewsItem = {
        id: `news-${Date.now()}`,
        title,
        category,
        source,
        date: displayDate,
        dateISO,
        link,
        status,
      };
      setData((prev) => [newItem, ...prev]);
    }

    setIsFormOpen(false);
  };

  // Open Delete Confirm
  const handleDeleteOpen = (item: AdminNewsItem) => {
    setDeletingItem(item);
    setIsDeleteOpen(true);
  };

  // Confirm Delete
  const handleDeleteConfirm = () => {
    if (!deletingItem) return;
    setData((prev) => prev.filter((item) => item.id !== deletingItem.id));
    setIsDeleteOpen(false);
    setDeletingItem(null);
  };

  // Table columns definition
  const columns: TableColumn<AdminNewsItem>[] = [
    {
      header: "Title",
      accessor: "title",
      render: (row) => (
        <span style={{ fontWeight: "600", color: "var(--admin-text-primary)" }}>
          {row.title}
        </span>
      ),
    },
    {
      header: "Category",
      accessor: "category",
      render: (row) => (
        <span className="admin-badge admin-badge-info">{row.category}</span>
      ),
    },
    {
      header: "Source",
      accessor: "source",
    },
    {
      header: "Publish Date",
      accessor: "date",
    },
    {
      header: "Status",
      accessor: "status",
      render: (row) => (
        <span
          className={`admin-badge ${
            row.status === "Published" ? "admin-badge-success" : "admin-badge-warning"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <div>
      <AdminTable
        data={data}
        columns={columns}
        searchPlaceholder="Search press releases..."
        searchKeys={["title", "source", "category"]}
        onCreate={handleCreateOpen}
        createButtonText="Add Press Release"
        onEdit={handleEditOpen}
        onDelete={handleDeleteOpen}
      />

      {/* Create / Edit Form Modal */}
      <AdminModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingItem ? "Edit Press Release" : "Add Press Release"}
      >
        <form onSubmit={handleFormSubmit}>
          <div className="admin-form-group">
            <label className="admin-label">Title</label>
            <input
              type="text"
              className="admin-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Aayush Wellness expands product line..."
              required
            />
          </div>

          <div className="admin-form-row">
            <div className="admin-form-group">
              <label className="admin-label">Category</label>
              <select
                className="admin-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Press Release">Press Release</option>
                <option value="Corporate Update">Corporate Update</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Source Outlet</label>
              <input
                type="text"
                className="admin-input"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="e.g. CNBC, ET NOW, mint"
                required
              />
            </div>
          </div>

          <div className="admin-form-row">
            <div className="admin-form-group">
              <label className="admin-label">Release Date</label>
              <input
                type="date"
                className="admin-input"
                value={dateISO}
                onChange={(e) => setDateISO(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label">External Article Link</label>
              <input
                type="text"
                className="admin-input"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="e.g. https://cnbctv18.com/article..."
              />
            </div>
          </div>

          <div className="admin-switch-container">
            <div className="admin-switch-label">
              <span className="admin-switch-title">Publish Immediately</span>
              <span className="admin-switch-subtitle">
                Make this article public on the website news page
              </span>
            </div>
            <label className="admin-switch">
              <input
                type="checkbox"
                checked={status === "Published"}
                onChange={(e) =>
                  setStatus(e.target.checked ? "Published" : "Draft")
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
              {editingItem ? "Save Changes" : "Create Release"}
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Delete Confirmation */}
      <AdminDeleteConfirm
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
        itemName={deletingItem?.title || ""}
      />
    </div>
  );
}
