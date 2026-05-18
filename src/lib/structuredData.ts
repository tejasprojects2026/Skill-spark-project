import logo from "@/assets/skill spark.png";
import heroImage from "@/assets/hero.webp";
import { siteConfig, toAbsoluteUrl, toKeywordContent } from "@/lib/seo";

export type JsonLd = Record<string, unknown>;

const businessId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

const address = {
  "@type": "PostalAddress",
  streetAddress: "A-620, Gera's Imperium Gateway, Nashik Phata, PCMC",
  addressLocality: "Pune",
  addressRegion: "Maharashtra",
  postalCode: "411034",
  addressCountry: "IN",
};

const areaServed = [
  { "@type": "City", name: "Pune" },
  { "@type": "City", name: "Pimpri-Chinchwad" },
  { "@type": "AdministrativeArea", name: "PCMC" },
  { "@type": "AdministrativeArea", name: "Maharashtra" },
  { "@type": "Country", name: "India" },
];

const knowsAbout = [
  "Recruitment consulting",
  "Permanent staffing",
  "Executive search",
  "IT staffing",
  "Manufacturing recruitment",
  "Healthcare staffing",
  "Logistics recruitment",
  "BFSI hiring",
  "Sales hiring",
  "Candidate registration",
  "Job placement support",
];

export const organizationJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": businessId,
  name: siteConfig.name,
  alternateName: ["Skill Spark Consulting", "SkillSpark Consulting"],
  url: siteConfig.url,
  logo: toAbsoluteUrl(logo),
  image: toAbsoluteUrl(heroImage),
  telephone: siteConfig.phoneHref,
  email: siteConfig.email,
  address,
  areaServed,
  knowsAbout,
  priceRange: "Rs",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneHref,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  ],
};

export const websiteJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: siteConfig.name,
  alternateName: "Skill Spark Consulting Official Website",
  url: siteConfig.url,
  publisher: { "@id": businessId },
  inLanguage: "en-IN",
};

export function webPageJsonLd({
  title,
  description,
  url,
  keywords,
}: {
  title: string;
  description: string;
  url: string;
  keywords: readonly string[] | string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: toAbsoluteUrl(heroImage),
    },
    keywords: toKeywordContent(keywords),
    inLanguage: "en-IN",
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  serviceTypes,
  url,
}: {
  name: string;
  description: string;
  serviceTypes: readonly string[];
  url: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": businessId },
    areaServed,
    serviceType: serviceTypes,
    audience: [
      { "@type": "BusinessAudience", audienceType: "Employers" },
      { "@type": "PeopleAudience", audienceType: "Job seekers" },
    ],
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>): JsonLd {
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
