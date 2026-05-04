import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about.jpg";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Skill Spark Consulting" },
      {
        name: "description",
        content:
          "Skill Spark Consulting was founded with a clear mission — to bridge the gap between exceptional talent and the companies that need them most.",
      },
      { property: "og:title", content: "About Skill Spark Consulting" },
      {
        property: "og:description",
        content:
          "Born from a deep understanding of Pune's evolving industrial and corporate landscape.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To connect the right talent with the right opportunity — consistently, efficiently, and with integrity. We aim to be the recruitment partner that companies and candidates trust for life.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become Pune's most reliable and respected recruitment consultancy, known for quality placements, sector expertise, and long-term relationships.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Integrity in every interaction. Quality over quantity. Deep respect for both the employer's time and the candidate's aspirations. Transparency at every step.",
  },
];

const founders = [
  {
    name: "Founder Name",
    image: aboutImg,
  },
  {
    name: "Co-Founder Name",
    image: aboutImg,
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        tag="About Us"
        title="We're More Than Just Recruiters"
        subtitle="Skill Spark Consulting was founded with a clear mission — to bridge the gap between exceptional talent and the companies that need them most."
        breadcrumbs={[{ label: "About" }]}
      />

      <Section tag="Our Story" title="Born in PCMC. Built for Pune." align="left">
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
              precise, personal, and results-driven.
            </p>
            <p>
              Based in the heart of PCMC — Pune's fastest-growing industrial corridor — we have a
              unique vantage point. We understand the needs of manufacturing plants, IT parks,
              logistics hubs, and corporate offices because we're right here, embedded in the
              ecosystem.
            </p>
            <p>
              Our team combines industry experience with a consultative approach. We don't just
              match resumes to job descriptions — we match people to purpose.
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
              className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border/50 hover-lift"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
                <v.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl mt-6 text-primary">{v.title}</h3>
              <p className="mt-3 text-black leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tag="Leadership" title="Meet Our Founders">
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

      <section className="bg-primary py-14 sm:py-20 md:py-24 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold">
            Let&apos;s build your team, together.
          </h2>
          <p className="mt-5 text-base md:text-lg text-primary-foreground/80">
            Let&apos;s discuss your hiring needs and find the perfect talent for your team.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button asChild variant="gold" size="xl" className="w-full sm:w-auto">
              <Link to="/contact">
                Submit Hiring Requirement <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl" className="w-full sm:w-auto">
              <Link to="/employer">Explore Employer Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
