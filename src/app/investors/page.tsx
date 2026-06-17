import React from "react";
import { InvestorsPageClient } from "./InvestorsPageClient";

export const metadata = {
  title: "Investor Relations - Aayush Wellness Limited",
  description: "BSE-listed (Code: 539528) integrated healthcare provider governance, shareholdings, and regulatory disclosures.",
};

export default function InvestorsPage() {
  return (
    <main className="w-full" style={{ background: "var(--off-white)" }}>
      <InvestorsPageClient />
    </main>
  );
}
