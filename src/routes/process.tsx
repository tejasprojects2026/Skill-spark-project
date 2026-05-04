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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.n}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card transition-smooth hover:-translate-y-1 hover:border-gold/40 hover:shadow-elegant"
            >
              <div className="relative bg-primary px-6 py-5 text-primary-foreground sm:px-7">
                <div className="absolute inset-y-0 right-0 w-24 bg-gold/15" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold text-primary shadow-soft transition-smooth group-hover:scale-105">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                      Step
                    </div>
                    <div className="font-display text-4xl font-semibold leading-none text-primary-foreground">
                      {step.n}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-6 sm:p-7">
                <div className="absolute right-6 top-6 font-display text-7xl font-bold leading-none text-primary/[0.04]">
                  {step.n}
                </div>
                <div className="relative">
                  <div className="mb-5 flex items-center gap-2">
                    {steps.map((dot) => (
                      <span
                        key={dot.n}
                        className={`h-2 rounded-full transition-smooth ${
                          Number(dot.n) <= Number(step.n)
                            ? "w-6 bg-gold"
                            : "w-2 bg-primary/15"
                        }`}
                      />
                    ))}
                  </div>

                  <h3 className="font-display text-xl font-semibold leading-tight text-primary sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-black">{step.desc}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      {index === steps.length - 1 ? "Complete" : "Next Step"}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-smooth group-hover:bg-gold group-hover:text-primary">
                      {index === steps.length - 1 ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Ready to start hiring with a clearer process?"
        align="center"
        className="bg-primary text-primary-foreground [&_h2]:text-primary-foreground"
      >
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
            <Link to="/contact">
              Start Hiring <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
