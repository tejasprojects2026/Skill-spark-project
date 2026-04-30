import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about.jpg";
import { Target, Eye, Heart, Award, ShieldCheck, Users, ArrowRight } from "lucide-react";

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

const why = [
  {
    icon: Award,
    title: "Industry Expertise",
    text: "Deep knowledge across IT, manufacturing, industrial, and corporate sectors in Pune and PCMC.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Every candidate undergoes rigorous screening before being presented to your team.",
  },
  {
    icon: Users,
    title: "Relationship-First",
    text: "We build lasting partnerships, not transactional vendor relationships.",
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
        <div className="grid lg:grid-cols-2 gap-12 items-center -mt-4">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl gradient-gold opacity-80 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl gradient-primary opacity-90 -z-10" />
            <img
              src={aboutImg}
              alt="Skill Spark team"
              loading="lazy"
              width={1280}
              height={896}
              className="rounded-2xl shadow-elegant w-full"
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

      <Section tag="What Drives Us" title="Mission, Vision & Values" className="gradient-soft">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover-lift"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
                <v.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mt-6 text-primary">{v.title}</h3>
              <p className="mt-3 text-black leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tag="Why Choose Us"
        title="Why Choose Skill Spark?"
        subtitle="Three reasons companies and candidates keep coming back."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {why.map((w) => (
            <div
              key={w.title}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover-lift text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl gradient-gold flex items-center justify-center shadow-gold">
                <w.icon className="w-6 h-6 text-gold-foreground" />
              </div>
              <h3 className="font-display text-xl mt-6 text-primary">{w.title}</h3>
              <p className="mt-3 text-black leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-primary py-20 md:py-24 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold">
            Let&apos;s build your team, together.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80">
            Let&apos;s discuss your hiring needs and find the perfect talent for your team.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">
                Submit Hiring Requirement <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
