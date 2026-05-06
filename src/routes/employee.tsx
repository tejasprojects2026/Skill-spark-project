import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileUser,
  MessagesSquare,
  Search,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/employee")({
  head: () => ({
    meta: [
      { title: "Employee - Skill Spark Consulting" },
      {
        name: "description",
        content:
          "Find career opportunities with Skill Spark Consulting and get guided support from registration to joining.",
      },
      { property: "og:title", content: "Employee - Skill Spark Consulting" },
      {
        property: "og:description",
        content:
          "Candidate support designed to connect skilled professionals with the right employers.",
      },
    ],
  }),
  component: EmployeePage,
});

const steps = [
  {
    n: "01",
    title: "Candidate Registration",
    desc: "Share your details, career goals, preferred location, experience, and the type of roles you are looking for.",
    icon: FileUser,
  },
  {
    n: "02",
    title: "Profile Review",
    desc: "We review your resume, skills, communication, availability, and fitment for active hiring requirements.",
    icon: ShieldCheck,
  },
  {
    n: "03",
    title: "Opportunity Matching",
    desc: "Your profile is matched with relevant openings across IT, manufacturing, logistics, healthcare, corporate, BFSI, and sales.",
    icon: Search,
  },
  {
    n: "04",
    title: "Interview Coordination",
    desc: "We coordinate interviews, share updates, and help keep communication clear between you and the employer.",
    icon: Clock3,
  },
  {
    n: "05",
    title: "Feedback Support",
    desc: "After each round, we gather feedback, guide next steps, and help you stay prepared through the selection process.",
    icon: MessagesSquare,
  },
  {
    n: "06",
    title: "Offer and Joining",
    desc: "From final discussion to joining coordination, we support you until you start the right role with confidence.",
    icon: UserRoundCheck,
  },
];

function EmployeePage() {
  return (
    <>
      <PageHero
        tag="Employee"
        title="Find the Right Opportunity"
        subtitle="Register with Skill Spark Consulting and get guided support from profile review to interview coordination and joining."
        breadcrumbs={[{ label: "Employee" }]}
      />

      <Section
        tag="How We Help"
        title="From Profile to Joining"
        subtitle="Each step is designed to help candidates present their strengths clearly and move through hiring with confidence."
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
                          Number(dot.n) <= Number(step.n) ? "w-6 bg-gold" : "w-2 bg-primary/15"
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
        title="Ready to find your next opportunity?"
        align="center"
        className="bg-primary text-primary-foreground [&_h2]:text-primary-foreground"
      >
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
            <Link to="/contact">
              Register as a Candidate <ArrowRight className="w-4 h-4" />
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
