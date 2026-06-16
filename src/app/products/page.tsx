import React from "react";
import { ProductsPageClient } from "@/components/products";
import "./products.css";

export const metadata = {
  title: "Our Products - Aayush Wellness Limited",
  description: "Browse our preventive health platform integrating nutraceuticals, herbal wellness, and organic skin care.",
};

export default function ProductsPage() {
  return (
    <main className="products-page w-full" style={{ paddingTop: "100px" }}>
      <ProductsPageClient />
    </main>
  );
}
