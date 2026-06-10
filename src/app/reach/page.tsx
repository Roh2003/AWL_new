import React from "react";
import { Geographic } from "@/components/home";

export const metadata = {
  title: "Our Reach - Aayush Wellness Limited",
  description: "View the pan-India presence and international expansion reach maps of Aayush Wellness Limited.",
};

export default function ReachPage() {
  return (
    <main className="w-full" style={{ paddingTop: "100px" }}>
      <Geographic />
    </main>
  );
}
