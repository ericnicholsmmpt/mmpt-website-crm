import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import { Inter, Rajdhani } from "next/font/google";
import VisitTracker from "../components/analytics/VisitTracker";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";
import JsonLd from "../components/seo/JsonLd";
import {
  defaultDescription,
  defaultOgImage,
  siteGraphJsonLd,
  siteName,
  siteUrl,
} from "../lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  category: "Sports medicine physical therapy and athlete performance",
  icons: {
    icon: "/images/icon.jpeg",
    shortcut: "/images/icon.jpeg",
    apple: "/images/icon.jpeg",
  },
  keywords: [
    "sports physical therapy atlanta",
    "baseball rehab atlanta",
    "athlete movement assessment atlanta",
    "strength and power testing atlanta",
    "return to throwing program atlanta",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rajdhani.variable} antialiased`}>
        <JsonLd data={siteGraphJsonLd} />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <div className="min-h-screen bg-black text-zinc-100">
          <VisitTracker />
          {children}
        </div>
      </body>
    </html>
  );
}
