export const siteUrl = "https://www.mmptperformance.com";
export const siteName = "Movement Performance and Sports Medicine";
export const defaultDescription =
  "Sports medicine physical therapy, athlete assessments, precision arm care, and performance training for athletes in Atlanta.";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#localbusiness`,
  name: "Movement Medicine Performance & PT",
  alternateName: siteName,
  url: siteUrl,
  description: defaultDescription,
  telephone: "+1-770-298-5893",
  priceRange: "$$",
  image: [
    `${siteUrl}/images/home-hero.jpeg`,
    `${siteUrl}/images/facility-a.jpeg`,
    `${siteUrl}/images/facility-b.jpeg`,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1825 MacArthur Blvd NW",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    postalCode: "30318",
    addressCountry: "US",
  },
  areaServed: ["Atlanta, Georgia", "United States"],
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=1825+MacArthur+Blvd+NW+Atlanta+GA+30318",
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
