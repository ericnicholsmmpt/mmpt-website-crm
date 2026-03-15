import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import { Inter, Rajdhani } from "next/font/google";
import VisitTracker from "../components/analytics/VisitTracker";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";
import {
  defaultDescription,
  jsonLdScript,
  localBusinessJsonLd,
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
  icons: {
    icon: "/images/icon.jpeg",
    shortcut: "/images/icon.jpeg",
    apple: "/images/icon.jpeg",
  },
  keywords: [
    "sports medicine physical therapy Atlanta",
    "athlete assessment Atlanta",
    "arm care baseball Atlanta",
    "return to sport physical therapy",
    "performance training Atlanta",
  ],
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(localBusinessJsonLd) }}
        />
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
