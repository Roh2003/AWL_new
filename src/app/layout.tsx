import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header, Footer, ClientInitializer } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aayush Wellness Limited",
  description: "Founded in 1984, Aayush Wellness Limited is a BSE-listed integrated healthcare company headquartered in Mumbai, India. Trust built on preventive healthcare, nutraceuticals, and organic formulations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body>
        <ClientInitializer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
