"use client";

import React from "react";
import AdminModal from "./AdminModal";

interface AdminDeleteConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
}

export default function AdminDeleteConfirm({
  isOpen,
  onClose,
  onConfirm,
  itemName,
}: AdminDeleteConfirmProps) {
  return (
    <AdminModal isOpen={isOpen} onClose={onClose} title="Confirm Delete">
      <div className="admin-delete-body">
        <div className="admin-delete-warning-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" x2="12" y1="9" y2="13" />
            <line x1="12" x2="12.01" y1="17" y2="17" />
          </svg>
        </div>
        <h4 className="admin-delete-title">Are you absolutely sure?</h4>
        <p className="admin-delete-text">
          You are about to delete <strong>&quot;{itemName}&quot;</strong>. This action is irreversible and will permanently remove this item from the list.
        </p>
      </div>
      <div className="admin-modal-footer">
        <button className="admin-btn admin-btn-secondary" onClick={onClose}>
          Cancel
        </button>
        <button className="admin-btn admin-btn-danger" onClick={onConfirm}>
          Delete Item
        </button>
      </div>
    </AdminModal>
  );
}
