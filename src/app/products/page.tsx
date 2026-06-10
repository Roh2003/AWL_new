import React from "react";
import { ProductCategories } from "@/components/home";

export const metadata = {
  title: "Our Products - Aayush Wellness Limited",
  description: "Browse our preventive health platform integrating nutraceuticals, herbal wellness, and organic skin care.",
};

export default function ProductsPage() {
  return (
    <main className="w-full" style={{ paddingTop: "100px" }}>
      <ProductCategories />
    </main>
  );
}
