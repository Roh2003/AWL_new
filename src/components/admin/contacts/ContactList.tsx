"use client";

import React, { useState } from "react";
import AdminTable, { TableColumn } from "../AdminTable";
import AdminModal from "../AdminModal";
import AdminDeleteConfirm from "../AdminDeleteConfirm";

interface ContactInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  message: string;
  createdAt: string;
}

const INITIAL_DATA: ContactInquiry[] = [
  {
    id: "con-1",
    fullName: "Rohan Sharma",
    email: "rohan.sharma@example.com",
    phone: "+91 9876543210",
    company: "Sharma Retailers",
    inquiryType: "Business Partnership",
    message: "We are interested in distributing Aayush wellness gummies in the Maharashtra region. We have over 150 retail touchpoints. Please connect us with your sales manager.",
    createdAt: "2026-06-17T14:12:00Z",
  },
  {
    id: "con-2",
    fullName: "Priya Patel",
    email: "priya.patel@example.com",
    phone: "+91 9988776655",
    company: "Personal Health",
    inquiryType: "Products & Orders",
    message: "I've been using your Dreamy Sleep Gummies for the last 2 weeks and they've been incredibly effective. Do you offer bulk subscription discounts for regular monthly orders?",
    createdAt: "2026-06-16T09:30:00Z",
  },
  {
    id: "con-3",
    fullName: "Anand Gupta",
    email: "anand.gupta@example.com",
    phone: "+91 9123456789",
    company: "Gupta Investments LLC",
    inquiryType: "Investor Relations",
    message: "Could you send over the latest investor presentation and financial results booklet for FY26? I am interested in understanding your long term retail expansion plans.",
    createdAt: "2026-06-15T11:45:00Z",
  },
  {
    id: "con-4",
    fullName: "Sarah Jenkins",
    email: "sarah.j@example.com",
    phone: "+1 415 555 2671",
    company: "Wellness Global Corp",
    inquiryType: "General Enquiry",
    message: "Do you export products to North America or Europe? We are looking to import high quality Ayurvedic gummies and supplements for our health storefronts.",
    createdAt: "2026-06-14T16:20:00Z",
  },
  {
    id: "con-5",
    fullName: "Vikram Malhotra",
    email: "v.malhotra@wellnessindia.com",
    phone: "+91 9654321098",
    company: "Wellness India Distributors",
    inquiryType: "Business Partnership",
    message: "We want to schedule a brief introductory call to discuss co-branding opportunities for wellness gummies. Please let us know your availability.",
    createdAt: "2026-06-13T08:15:00Z",
  },
];

export default function ContactList() {
  const [data, setData] = useState<ContactInquiry[]>(INITIAL_DATA);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ContactInquiry | null>(null);
  const [deletingItem, setDeletingItem] = useState<ContactInquiry | null>(null);

  const handleViewOpen = (item: ContactInquiry) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleDeleteOpen = (item: ContactInquiry) => {
    setDeletingItem(item);
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (!deletingItem) return;
    setData((prev) => prev.filter((item) => item.id !== deletingItem.id));
    setIsDeleteOpen(false);
    setDeletingItem(null);
  };

  const formatDate = (isoString: string) => {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const columns: TableColumn<ContactInquiry>[] = [
    {
      header: "Name",
      accessor: "fullName",
      render: (row) => (
        <span style={{ fontWeight: "600", color: "var(--admin-text-primary)" }}>
          {row.fullName}
        </span>
      ),
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Phone",
      accessor: "phone",
    },
    {
      header: "Type",
      accessor: "inquiryType",
      render: (row) => {
        let badgeClass = "admin-badge-info";
        if (row.inquiryType === "Business Partnership") badgeClass = "admin-badge-success";
        if (row.inquiryType === "Investor Relations") badgeClass = "admin-badge-warning";
        return <span className={`admin-badge ${badgeClass}`}>{row.inquiryType}</span>;
      },
    },
    {
      header: "Date Received",
      accessor: "createdAt",
      render: (row) => <span>{formatDate(row.createdAt)}</span>,
    },
  ];

  return (
    <div>
      <AdminTable
        data={data}
        columns={columns}
        searchPlaceholder="Search contact inquiries by name, email, company..."
        searchKeys={["fullName", "email", "company", "inquiryType"]}
        onView={handleViewOpen}
        onDelete={handleDeleteOpen}
      />

      {/* Details View Modal */}
      <AdminModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        title="Contact Inquiry Details"
      >
        {selectedItem && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="admin-form-row">
              <div>
                <span className="admin-label">Sender Name</span>
                <div style={{ padding: "10px", backgroundColor: "var(--admin-surface)", borderRadius: "8px", border: "1px solid var(--admin-border)" }}>
                  {selectedItem.fullName}
                </div>
              </div>
              <div>
                <span className="admin-label">Company Name</span>
                <div style={{ padding: "10px", backgroundColor: "var(--admin-surface)", borderRadius: "8px", border: "1px solid var(--admin-border)" }}>
                  {selectedItem.company || "N/A"}
                </div>
              </div>
            </div>

            <div className="admin-form-row">
              <div>
                <span className="admin-label">Email Address</span>
                <div style={{ padding: "10px", backgroundColor: "var(--admin-surface)", borderRadius: "8px", border: "1px solid var(--admin-border)", wordBreak: "break-all" }}>
                  {selectedItem.email}
                </div>
              </div>
              <div>
                <span className="admin-label">Phone Number</span>
                <div style={{ padding: "10px", backgroundColor: "var(--admin-surface)", borderRadius: "8px", border: "1px solid var(--admin-border)" }}>
                  {selectedItem.phone || "N/A"}
                </div>
              </div>
            </div>

            <div className="admin-form-row">
              <div>
                <span className="admin-label">Inquiry Type</span>
                <div style={{ display: "inline-block" }}>
                  <span
                    className={`admin-badge ${
                      selectedItem.inquiryType === "Business Partnership"
                        ? "admin-badge-success"
                        : selectedItem.inquiryType === "Investor Relations"
                        ? "admin-badge-warning"
                        : "admin-badge-info"
                    }`}
                    style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                  >
                    {selectedItem.inquiryType}
                  </span>
                </div>
              </div>
              <div>
                <span className="admin-label">Date Submitted</span>
                <div style={{ padding: "10px", backgroundColor: "var(--admin-surface)", borderRadius: "8px", border: "1px solid var(--admin-border)" }}>
                  {formatDate(selectedItem.createdAt)}
                </div>
              </div>
            </div>

            <div>
              <span className="admin-label">Message Content</span>
              <div
                style={{
                  padding: "16px",
                  backgroundColor: "var(--admin-surface)",
                  borderRadius: "8px",
                  border: "1px solid var(--admin-border)",
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                  color: "var(--admin-text-primary)",
                }}
              >
                {selectedItem.message}
              </div>
            </div>

            <div className="admin-modal-footer" style={{ padding: "16px 0 0 0", borderTop: "1px solid var(--admin-border)", marginTop: "12px" }}>
              <button
                className="admin-btn admin-btn-secondary"
                onClick={() => setIsDetailOpen(false)}
              >
                Close View
              </button>
              <button
                className="admin-btn admin-btn-danger"
                onClick={() => {
                  setIsDetailOpen(false);
                  handleDeleteOpen(selectedItem);
                }}
              >
                Delete Submission
              </button>
            </div>
          </div>
        )}
      </AdminModal>

      {/* Delete Confirmation */}
      <AdminDeleteConfirm
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
        itemName={deletingItem?.fullName || ""}
      />
    </div>
  );
}
