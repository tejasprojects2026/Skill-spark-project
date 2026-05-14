import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeoMeta, pageSeoKeywords, siteConfig } from "@/lib/seo";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structuredData";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { StructuredData } from "@/components/site/StructuredData";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about.png";
import { Compass, Eye, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";

const aboutSeo = {
  title: "About Skill Spark Consulting | Recruitment Consultancy in Pune & PCMC",
  description:
    "Learn about Skill Spark Consulting, a recruitment consultancy in Pune and PCMC helping employers hire pre-vetted talent and candidates find relevant roles across IT, manufacturing, healthcare, logistics, BFSI, sales, and corporate sectors.",
  url: `${siteConfig.url}/about`,
  keywords: pageSeoKeywords.about,
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: buildSeoMeta({
      title: aboutSeo.title,
      description: aboutSeo.description,
      url: aboutSeo.url,
      keywords: aboutSeo.keywords,
    }),
    links: [{ rel: "canonical", href: aboutSeo.url }],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Compass,
    title: "Our Mission",
    points: [
      "Connect the right talent with the right opportunity.",
      "Make recruitment consistent, efficient, and transparent.",
      "Support employers and candidates with honest guidance.",
    ],
  },
  {
    icon: Eye,
    title: "Our Vision",
    points: [
      "Become Pune's most reliable recruitment consultancy.",
      "Be known for quality placements and sector understanding.",
      "Build long-term relationships with companies and candidates.",
    ],
  },
  {
    icon: Handshake,
    title: "Our Values",
    points: [
      "Integrity in every interaction.",
      "Quality over quantity in every shortlist.",
      "Respect for employer time and candidate aspirations.",
      "Clear communication at every step.",
    ],
  },
];

const founders = [
  {
    name: "Hemant Bhamre",
    image: aboutImg,
  },
  {
    name: "Parth Bhamre",
    image: aboutImg,
  },
];

function AboutPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageJsonLd(aboutSeo),
          breadcrumbJsonLd([
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "About Skill Spark Consulting", url: aboutSeo.url },
          ]),
        ]}
      />
      <PageHero
        tag="About Us"
        title="Pune Recruitment Consultants Focused on Quality Hiring"
        subtitle="Skill Spark Consulting bridges the gap between exceptional talent and employers across Pune, PCMC, and growing business hubs in Maharashtra."
        breadcrumbs={[{ label: "About" }]}
      />

      <Section tag="Our Story" title="Born in PCMC. Built for Pune Recruitment." align="left">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 lg:-mt-4">
          <div className="relative">
            <div className="absolute -top-3 -left-3 h-20 w-20 rounded-2xl gradient-gold opacity-80 -z-10 sm:-top-6 sm:-left-6 sm:h-32 sm:w-32" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl gradient-primary opacity-90 -z-10 sm:-bottom-6 sm:-right-6 sm:h-40 sm:w-40" />
            <img
              src={aboutImg}
              alt="Skill Spark team"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full rounded-2xl shadow-elegant"
            />
          </div>
          <div className="space-y-5 text-black leading-relaxed">
            <p>
              Born from a deep understanding of Pune's evolving industrial and corporate landscape,
              Skill Spark Consulting was established to deliver recruitment solutions that are
              precise, personal, and results-driven for employers and job seekers.
            </p>
            <p>
              Based in the heart of PCMC - Pune's fastest-growing industrial corridor - we have a
              unique vantage point. We understand the needs of manufacturing plants, IT parks,
              logistics hubs, and corporate offices because we're right here, embedded in the
              ecosystem as a local recruitment consultancy.
            </p>
            <p>
              Our team combines industry experience with a consultative approach. We don't just
              match resumes to job descriptions - we match people to purpose.
            </p>
          </div>
        </div>
      </Section>

      <Section
        tag="What Drives Us"
        title="Mission, Vision & Values"
        className="gradient-soft md:-mt-14 lg:-mt-20"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((v) => (
            <div
              key={v.title}
              className="relative overflow-hidden bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border/50 hover-lift"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-gold/10" />
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
                <v.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl mt-6 text-primary">{v.title}</h3>
              <ul className="mt-5 space-y-3">
                {v.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-black"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tag="Leadership" title="Meet our Leadership team">
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover-lift text-center"
            >
              <div className="aspect-[4/3] bg-secondary/60">
                <img
                  src={founder.image}
                  alt={founder.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-primary">{founder.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-primary py-10 sm:py-14 md:py-16 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold">
            Let&apos;s build your team, together.
          </h2>
          <p className="mt-5 text-base md:text-lg text-primary-foreground/80">
            Let&apos;s discuss your hiring needs and find the perfect talent for your team.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="gold" size="xl" className="w-full sm:w-auto">
              <Link to="/contact" hash="contact-form">
                Connect with us <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
