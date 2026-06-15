import React from "react";
import { Manrope } from "next/font/google";
import { CareersHero, CareersThrive, CareersFeels, CareersJobs } from "@/components/careers";
import "./careers.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata = {
  title: "Careers - Aayush Wellness Limited",
  description: "Join Aayush Wellness Limited and build the future of preventive healthcare and nutraceutical innovations in India.",
};

export default function CareersPage() {
  return (
    <main className={`${manrope.variable} careers-page w-full`}>
      <CareersHero />
      <CareersThrive />
      <CareersFeels />
      <CareersJobs />
    </main>
  );
}
