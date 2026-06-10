import React from "react";
import {
  HeroSection,
  TrustedName,
  ProductCategories,
  BuildingFuture,
  Geographic,
  WhyChooseUs,
  PressReleases,
  VisionSection,
  ContactForm,
} from "@/components/home";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <TrustedName />
      <ProductCategories />
      <BuildingFuture />
      <Geographic />
      <WhyChooseUs />
      <PressReleases />
      <VisionSection />
      <ContactForm />
    </main>
  );
}
