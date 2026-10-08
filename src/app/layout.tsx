import type { Metadata, Viewport } from "next";
import { Fredoka, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Headings: Fredoka (rounded, echoing the CRAM logo) · Body: Inter
const display = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.metaDescription,
  applicationName: siteConfig.fullName,
  category: "education",
  alternates: { canonical: "/" },
  // Icons (src/app/icon.svg, apple-icon.tsx) and share images (opengraph-image.tsx,
  // twitter-image.tsx) are picked up automatically through Next.js file conventions.
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "/",
    siteName: siteConfig.fullName,
    title: siteConfig.title,
    description: siteConfig.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.metaDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#1c2541",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
