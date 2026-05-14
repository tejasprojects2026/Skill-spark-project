import ogImage from "@/assets/hero.webp";

export const siteConfig = {
  name: "Skill Spark Consulting",
  url: "https://skillsparkconsulting.lovable.app",
  phone: "+91 78758 03175",
  phoneHref: "+917875803175",
  email: "skillsparkconsulting@gmail.com",
  address: "A-620, Gera's Imperium Gateway, Nashik Phata, PCMC, Pune 411034",
  city: "Pune",
  region: "Maharashtra",
  country: "India",
} as const;

export const defaultSeoKeywords = [
  "Skill Spark Consulting",
  "recruitment agency in Pune",
  "recruitment consultancy in PCMC",
  "Pune staffing agency",
  "PCMC recruitment services",
  "IT staffing Pune",
  "manufacturing recruitment Pune",
  "healthcare staffing Pune",
  "logistics recruitment Pune",
  "BFSI hiring Pune",
  "executive search Pune",
  "permanent staffing services",
  "candidate registration Pune",
  "job placement consultancy Pune",
  "employer hiring solutions",
  "pre-vetted candidates",
  "talent acquisition Pune",
];

export const pageSeoKeywords = {
  home: [
    ...defaultSeoKeywords,
    "recruitment partner in Pune",
    "Pimpri Chinchwad recruitment agency",
    "industrial staffing PCMC",
    "corporate hiring Pune",
    "sales hiring Pune",
  ],
  employer: [
    ...defaultSeoKeywords,
    "employer recruitment services Pune",
    "hire candidates in Pune",
    "permanent staffing Pune",
    "executive hiring Pune",
    "healthcare recruitment agency Pune",
    "manufacturing staffing Pune",
    "IT recruitment agency Pune",
    "pre-screened candidate shortlist",
  ],
  employee: [
    ...defaultSeoKeywords,
    "job consultancy in Pune",
    "job placement support Pune",
    "candidate profile registration",
    "career opportunities Pune",
    "interview coordination Pune",
    "resume sharing with employers",
    "IT jobs Pune",
    "manufacturing jobs Pune",
    "healthcare jobs Pune",
    "BFSI jobs Pune",
  ],
  about: [
    ...defaultSeoKeywords,
    "about Skill Spark Consulting",
    "Pune recruitment consultants",
    "PCMC staffing experts",
    "quality recruitment consultancy",
    "candidate matching Pune",
  ],
  contact: [
    ...defaultSeoKeywords,
    "contact recruitment agency Pune",
    "contact staffing agency PCMC",
    "hiring support Pune contact",
    "candidate support Pune contact",
    "Skill Spark Consulting phone number",
  ],
} as const;

export const allSeoKeywords = Array.from(new Set(Object.values(pageSeoKeywords).flat()));

export function toKeywordContent(keywords: readonly string[] | string) {
  return Array.isArray(keywords) ? Array.from(new Set(keywords)).join(", ") : keywords;
}

function withAllSeoKeywords(keywords: readonly string[] | string) {
  if (Array.isArray(keywords)) {
    return Array.from(new Set([...keywords, ...allSeoKeywords]));
  }

  return `${keywords}, ${toKeywordContent(allSeoKeywords)}`;
}

export function buildSeoMeta({
  title,
  description,
  url,
  keywords = defaultSeoKeywords,
  image = ogImage,
}: {
  title: string;
  description: string;
  url: string;
  keywords?: readonly string[] | string;
  image?: string;
}) {
  const keywordContent = toKeywordContent(withAllSeoKeywords(keywords));

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywordContent },
    { name: "author", content: siteConfig.name },
    { name: "publisher", content: siteConfig.name },
    { name: "application-name", content: siteConfig.name },
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "PCMC, Pune, Maharashtra" },
    { name: "language", content: "English" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: "Skill Spark Consulting preview image" },
    { property: "og:site_name", content: "Skill Spark Consulting" },
    { property: "og:locale", content: "en_IN" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: "Skill Spark Consulting preview image" },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
  ];
}
