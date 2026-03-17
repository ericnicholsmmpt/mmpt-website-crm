import type { Metadata } from "next";

export const siteUrl = "https://www.mmptperformance.com";
export const siteName = "Movement Medicine Performance & PT";
export const organizationName = "Movement Medicine Physical Therapy, LLC";
export const defaultOgImage = "/images/home-hero.jpeg";
export const defaultDescription =
  "Sports physical therapy, baseball rehab, athlete movement assessment, strength and power testing, and return-to-throwing support in Atlanta.";
export const displayPhone = "(770) 298-5893";
export const phoneNumber = "+1-770-298-5893";
export const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=1825+MacArthur+Blvd+NW+Atlanta+GA+30318";

export const businessAddress = {
  "@type": "PostalAddress",
  streetAddress: "1825 MacArthur Blvd NW",
  addressLocality: "Atlanta",
  addressRegion: "GA",
  postalCode: "30318",
  addressCountry: "US",
};

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BuildServiceJsonLdInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  audience?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = defaultOgImage,
  type = "website",
}: BuildPageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const socialTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName,
      locale: "en_US",
      type,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
  };
}

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: siteName,
  legalName: organizationName,
  url: siteUrl,
  logo: absoluteUrl("/images/logo.jpeg"),
  telephone: phoneNumber,
  description: defaultDescription,
  address: businessAddress,
  areaServed: ["Atlanta, Georgia", "Metro Atlanta"],
};

export const localBusinessJsonLd = {
  "@type": "MedicalClinic",
  "@id": `${siteUrl}#localbusiness`,
  name: siteName,
  alternateName: "MMPT",
  url: siteUrl,
  parentOrganization: {
    "@id": `${siteUrl}#organization`,
  },
  description: defaultDescription,
  telephone: phoneNumber,
  priceRange: "$$",
  image: [
    absoluteUrl("/images/home-hero.jpeg"),
    absoluteUrl("/images/facility-a.jpeg"),
    absoluteUrl("/images/facility-b.jpeg"),
  ],
  address: businessAddress,
  areaServed: ["Atlanta, Georgia", "Metro Atlanta"],
  hasMap: mapUrl,
  medicalSpecialty: ["Physical Therapy", "Sports Medicine"],
  knowsAbout: [
    "Sports physical therapy",
    "Baseball rehab",
    "Athlete movement assessment",
    "Strength and power testing",
    "Return-to-throwing programs",
  ],
};

export const siteGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, localBusinessJsonLd],
};

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildFaqJsonLd(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildServiceJsonLd({
  name,
  description,
  path,
  serviceType,
  audience = [],
}: BuildServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    provider: {
      "@id": `${siteUrl}#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: "Atlanta",
    },
    audience: audience.map((audienceType) => ({
      "@type": "Audience",
      audienceType,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(path),
      serviceLocation: {
        "@type": "Place",
        name: siteName,
        address: businessAddress,
      },
    },
  };
}
