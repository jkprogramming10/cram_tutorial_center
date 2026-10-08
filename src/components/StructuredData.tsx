import { siteConfig } from "@/config/site";
import { programs } from "@/data/content";

/**
 * schema.org data for search engines. Verified facts only — opening hours are
 * intentionally omitted until the owner confirms they are current.
 */
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.fullName,
    url: siteConfig.siteUrl,
    description: siteConfig.metaDescription,
    telephone: siteConfig.phone.e164,
    email: siteConfig.email.display,
    sameAs: [siteConfig.facebookUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "PH",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Programs",
      itemListElement: programs.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.title, description: p.description },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" to prevent breaking out of the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
