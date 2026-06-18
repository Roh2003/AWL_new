"use client";

import React from "react";
import ContactList from "../../../components/admin/contacts/ContactList";

export default function AdminContactsPage() {
  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Contact Inquiries</h1>
          <p className="admin-page-subtitle">
            Review and manage submissions received from your website contact page.
          </p>
        </div>
      </div>

      <ContactList />
    </div>
  );
}
