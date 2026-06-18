"use client";

import React from "react";
import ProductList from "../../../components/admin/products/ProductList";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Products Management</h1>
          <p className="admin-page-subtitle">
            Manage your brand's product categories, descriptions, benefits, and key ingredients.
          </p>
        </div>
      </div>

      <ProductList />
    </div>
  );
}
