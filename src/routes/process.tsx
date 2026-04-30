import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessagesSquare,
  Search,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process - Skill Spark Consulting" },
      {
        name: "description",
        content:
          "Explore Skill Spark Consulting's recruitment process, from understanding requirements and sourcing talent to onboarding the right candidate.",
      },
      { property: "og:title", content: "Our Process - Skill Spark Consulting" },
      {
        property: "og:description",
        content:
          "A clear, structured recruitment workflow designed to help companies hire the right talent with confidence.",
      },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  {
    n: "01",
    title: "Understanding Requirements",
    desc: "We begin with a deep dive into the role, business goals, team culture, and the profile that will create the most value for your organization.",
    icon: MessagesSquare,
  },
  {
    n: "02",
    title: "Targeted Sourcing",
    desc: "Candidates are sourced through portals, internal databases, referrals, and focused outreach based on your sector and hiring priority.",
    icon: Search,
  },
  {
    n: "03",
    title: "Screening and Evaluation",
    desc: "Every profile is reviewed for experience, communication, intent, and fit so your team only sees relevant and serious candidates.",
    icon: ShieldCheck,
  },
  {
    n: "04",
    title: "Interview Coordination",
    desc: "We manage scheduling, candidate communication, and follow-ups to keep the hiring cycle smooth and responsive for both sides.",
    icon: Clock3,
  },
  {
    n: "05",
    title: "Feedback and Shortlisting",
    desc: "Structured feedback is gathered quickly so we can refine the shortlist, resolve concerns, and keep momentum through decision-making.",
    icon: CheckCircle2,
  },
  {
    n: "06",
    title: "Offer and Onboarding Support",
    desc: "From final discussions to joining coordination, we stay involved until the selected candidate starts with clarity and confidence.",
    icon: UserRoundCheck,
  },
];

const highlights = [
  "Clear communication at every stage",
  "Pre-screened and relevant candidate submissions",
  "Faster coordination between employers and candidates",
  "Support through closure and onboarding",
];

function ProcessPage() {
  return (
    <>
      <PageHero
        tag="Our Process"
        title="A Proven 6-Step Approach"
        subtitle="Our structured recruitment process ensures quality, consistency, and speed - every single time."
        breadcrumbs={[{ label: "Our Process" }]}
      />

      <Section
        tag="How We Work"
        title="From Requirement to Joining"
        subtitle="Each step is deliberate, collaborative, and built to keep hiring organized from the first brief to the final offer."
        className="bg-background"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.n}
              className="relative rounded-2xl border border-border/50 bg-card p-8 shadow-card hover-lift overflow-hidden"
            >
              <div className="absolute -top-5 -right-3 font-display text-7xl font-bold text-primary/8">
                {step.n}
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Step {step.n}
                </div>
                <h3 className="mt-3 font-display text-2xl text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tag="Why It Works"
        title="Built for Clarity, Speed, and Better Hiring Outcomes"
        subtitle="We keep the process disciplined so employers save time and candidates stay engaged throughout the cycle."
        className="gradient-soft"
      >
        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card p-6 shadow-card"
            >
              <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p className="text-black">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Ready to start hiring with a clearer process?" align="center">
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Start Hiring <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
