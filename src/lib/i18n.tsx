import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "mr";

const dict: Record<string, { en: string; mr: string }> = {
  "nav.home": { en: "Home", mr: "Home" },
  "nav.about": { en: "About Us", mr: "About Us" },
  "nav.services": { en: "Employer", mr: "Employer" },
  "nav.process": { en: "Our Process", mr: "Our Process" },
  "nav.contact": { en: "Contact Us", mr: "Contact Us" },
  "cta.consult": { en: "Get Consultation", mr: "Get Consultation" },
  "cta.learn": { en: "Learn More", mr: "Learn More" },
  "cta.explore": { en: "Explore Employer Solutions", mr: "Explore Employer Solutions" },
  "cta.apply": { en: "Apply Now", mr: "Apply Now" },
  "cta.send": { en: "Send Message", mr: "Send Message" },
  "hero.tag": { en: "Premium Consulting Firm", mr: "Premium Consulting Firm" },
  "hero.title": {
    en: "Transforming Talent & Business Growth",
    mr: "Transforming Talent & Business Growth",
  },
  "hero.sub": {
    en: "Strategic consulting that elevates organizations through people, performance, and purposeful innovation.",
    mr: "Strategic consulting that elevates organizations through people, performance, and purposeful innovation.",
  },
  "about.tag": { en: "About Us", mr: "About Us" },
  "about.title": {
    en: "Building Tomorrow's Enterprises Today",
    mr: "Building Tomorrow's Enterprises Today",
  },
  "about.sub": {
    en: "Skill Spark Consulting partners with ambitious organizations to design strategies, develop leaders, and unlock measurable growth.",
    mr: "Skill Spark Consulting partners with ambitious organizations to design strategies, develop leaders, and unlock measurable growth.",
  },
  "services.tag": { en: "Employer", mr: "Employer" },
  "services.title": { en: "Employer Solutions Crafted for Impact", mr: "Employer Solutions Crafted for Impact" },
  "industries.tag": { en: "Industries", mr: "Industries" },
  "industries.title": { en: "Trusted Across Sectors", mr: "Trusted Across Sectors" },
  "why.tag": { en: "Why Choose Us", mr: "Why Choose Us" },
  "why.title": { en: "A Partner You Can Trust", mr: "A Partner You Can Trust" },
  "careers.tag": { en: "We're Hiring", mr: "We're Hiring" },
  "careers.title": { en: "Build Your Career With Us", mr: "Build Your Career With Us" },
  "contact.tag": { en: "Get In Touch", mr: "Get In Touch" },
  "contact.title": { en: "Let's Discuss Your Vision", mr: "Let's Discuss Your Vision" },
  "footer.rights": { en: "All rights reserved.", mr: "All rights reserved." },
  "footer.tagline": {
    en: "People • Purpose • Placements",
    mr: "People • Purpose • Placements",
  },
};

interface I18n {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nCtx = createContext<I18n | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "en" || stored === "mr") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string) => dict[key]?.[lang] ?? key;

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) return { lang: "en" as Lang, setLang: () => {}, t: (k: string) => dict[k]?.en ?? k };
  return ctx;
}
