import ogImage from "@/assets/hero.jpg";

export const defaultSeoKeywords =
  "Skill Spark Consulting, recruitment agency Pune, PCMC recruitment, IT staffing, healthcare staffing, executive search, candidate registration, employer hiring solutions, talent acquisition";

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
  keywords?: string;
  image?: string;
}) {
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: "Skill Spark Consulting preview image" },
    { property: "og:site_name", content: "Skill Spark Consulting" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: "Skill Spark Consulting preview image" },
    { name: "robots", content: "index, follow" },
  ];
}
