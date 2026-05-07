import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  FileUser,
  FileWarning,
  MessageCircleWarning,
  MessagesSquare,
  Search,
  ShieldCheck,
  UserRoundX,
  UserRoundCheck,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { industries } from "@/lib/recruitmentIndustries";

export const Route = createFileRoute("/employee")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Employee - Skill Spark Consulting",
      description:
        "Find career opportunities with Skill Spark Consulting and get guided support from registration to joining.",
      url: "https://skillsparkconsulting.lovable.app/employee",
      keywords:
        "employee job support, candidate registration, career matching, interview preparation, Pune job opportunities, candidate services",
    }),
    links: [{ rel: "canonical", href: "https://skillsparkconsulting.lovable.app/employee" }],
  }),
  component: EmployeePage,
});

const steps = [
  {
    n: "01",
    title: "Share Your Profile",
    desc: "Fill the candidate form with your contact details, education, experience, skills, preferred role, salary expectation, notice period, location preference, and updated CV.",
    icon: FileUser,
  },
  {
    n: "02",
    title: "Resume and Details Check",
    desc: "Our team reviews your resume, work history, skills, communication, availability, and career goals to understand what type of opportunity will suit you.",
    icon: ShieldCheck,
  },
  {
    n: "03",
    title: "Suitable Job Matching",
    desc: "We match your profile with relevant openings across IT, manufacturing, logistics, healthcare, corporate, BFSI, sales, and admin roles based on your skills and preferences.",
    icon: Search,
  },
  {
    n: "04",
    title: "Interview Scheduling",
    desc: "Once a suitable role is shortlisted, we coordinate with you and the employer, share interview details, confirm timing, and help you understand the role before the discussion.",
    icon: Clock3,
  },
  {
    n: "05",
    title: "Feedback and Next Rounds",
    desc: "After every interview round, we collect feedback, update you on the status, guide you for the next round, and keep communication clear until the final decision.",
    icon: MessagesSquare,
  },
  {
    n: "06",
    title: "Offer and Joining Support",
    desc: "When you are selected, we help with offer discussion, document coordination, joining date confirmation, and follow-up support so you can start smoothly.",
    icon: UserRoundCheck,
  },
];

const employeeProblems = [
  {
    title: "Not Getting Relevant Job Calls",
    desc: "Many candidates apply everywhere but receive calls for roles that do not match their skills, salary expectation, location, or experience level.",
    icon: Search,
  },
  {
    title: "Resume Is Not Reaching the Right Employers",
    desc: "A good profile can get missed when it is not presented clearly or shared with the right companies and hiring teams.",
    icon: FileWarning,
  },
  {
    title: "Unclear Interview Updates",
    desc: "Candidates often wait without knowing interview status, feedback, next rounds, or whether the opportunity is still active.",
    icon: MessageCircleWarning,
  },
  {
    title: "Confusion During Offer and Joining",
    desc: "Salary discussion, documents, joining date, and final coordination can feel confusing without proper communication and support.",
    icon: UserRoundX,
  },
];

const profileFields = [
  { label: "Full Name", name: "fullName", placeholder: "Your full name" },
  { label: "Phone Number", name: "phone", placeholder: "eg. 9876543210", type: "tel" },
  { label: "Email Address", name: "email", placeholder: "you@example.com", type: "email" },
  { label: "Current Location", name: "location", placeholder: "City, State" },
  { label: "Experience", name: "experience", placeholder: "eg. 5 years" },
  {
    label: "Highest Qualification",
    name: "qualification",
    placeholder: "eg. MBA, B.Tech",
  },
  { label: "Current Employer", name: "employer", placeholder: "Current company" },
  { label: "Current Designation", name: "designation", placeholder: "Your job title" },
  { label: "Preferred Role", name: "preferredRole", placeholder: "Role you're seeking" },
  { label: "Key Skills", name: "skills", placeholder: "eg. Java, Excel, Sales" },
  { label: "Notice Period", name: "noticePeriod", placeholder: "eg. Immediate, 30 days" },
  { label: "Expected Salary", name: "expectedSalary", placeholder: "eg. 15 LPA" },
  { label: "Availability", name: "availability", placeholder: "When can you join?" },
];

const faqItems = [
  {
    question: "How does the registration process work?",
    answer:
      "Share your details, experience, preferred role, and updated CV through the form. Our team reviews your profile, matches it with relevant openings, and contacts you with suitable opportunities.",
  },
  {
    question: "How long does it take to find a suitable job?",
    answer:
      "Timing depends on the role and market demand, but we focus on fast matching and keep you updated at every step so you can move quickly when a good opportunity appears.",
  },
  {
    question: "How is my information kept confidential? What is shared and when?",
    answer:
      "We only share your CV and details with employers after you explicitly approve a specific role. Your current employer will never be contacted without your permission.",
  },
  {
    question: "What does it cost? Are there any fees?",
    answer:
      "Candidate registration is free. Employers pay our placement fees, so you can use our services without any cost to you.",
  },
  {
    question: "Will I get feedback after interviews?",
    answer:
      "Yes, we provide feedback whenever it is available and help you understand the next steps, whether you move forward or not.",
  },
  {
    question: "What kind of roles do you handle?",
    answer:
      "We place candidates across IT, manufacturing, logistics, healthcare, corporate, BFSI, sales, and admin functions, based on your experience and career goals.",
  },
  {
    question: "What happens after I get placed?",
    answer:
      "We support your offer discussion, document coordination, joining date confirmation, and follow through so you can transition smoothly into your new role.",
  },
];

function EmployeePage() {
  const [selectedIndustry, setSelectedIndustry] = useState<(typeof industries)[number] | null>(
    null,
  );

  return (
    <>
      <PageHero
        tag="Employee"
        title="Find the Right Opportunity"
        subtitle="Register with Skill Spark Consulting and get guided support from profile review to interview coordination and joining."
        breadcrumbs={[{ label: "Employee" }]}
      />

      <Section
        tag="Problems"
        title="What Job Seekers Commonly Face"
        subtitle="Before the right opportunity appears, candidates often deal with unclear communication, irrelevant openings, and uncertainty about next steps."
        className="bg-secondary/55"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {employeeProblems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-border/60 bg-card p-5 shadow-card transition-smooth hover:-translate-y-1 hover:border-gold/40 hover:shadow-elegant sm:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-gold shadow-soft">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-primary">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black">{problem.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-14 sm:py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {industries.map((industry) => (
              <button
                key={industry.label}
                type="button"
                className="group min-h-[150px] w-full rounded-2xl border border-border bg-secondary/45 p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/90 hover:shadow-elegant cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:min-h-[166px] sm:p-6 flex flex-col items-center justify-center"
                aria-label={`View ${industry.label} recruitment roles and services`}
                onClick={() => setSelectedIndustry(industry)}
              >
                <div className="text-accent mb-3 transition-transform duration-300 group-hover:scale-110">
                  <industry.icon className="w-8 h-8" />
                </div>
                <p className="text-sm font-semibold text-primary">{industry.label}</p>
                <span className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary shadow-soft transition-all duration-300 group-hover:bg-gold/95 group-hover:shadow-elegant">
                  Learn More
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={Boolean(selectedIndustry)} onOpenChange={(open) => !open && setSelectedIndustry(null)}>
        <DialogContent className="max-h-[88vh] w-[calc(100%-1rem)] max-w-3xl overflow-y-auto rounded-2xl border-border bg-card p-0 shadow-elegant sm:w-[calc(100%-2rem)] sm:rounded-3xl [&>button]:flex [&>button]:h-9 [&>button]:w-9 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:bg-white/10 [&>button]:p-0 [&>button]:text-white [&>button]:opacity-100 [&>button]:ring-offset-primary hover:[&>button]:bg-white/20 [&>button>svg]:h-5 [&>button>svg]:w-5">
          {selectedIndustry && (
            <article>
              <div className="bg-primary px-5 py-7 pr-14 text-primary-foreground sm:px-6 md:px-7">
                <DialogHeader className="text-left">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-primary shadow-soft">
                    <selectedIndustry.icon className="h-6 w-6" />
                  </div>
                  <DialogTitle className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
                    {selectedIndustry.label} Recruitment Roles
                  </DialogTitle>
                  <DialogDescription className="max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                    {selectedIndustry.seoTitle}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="space-y-7 p-5 sm:p-6 md:p-7">
                <p className="text-black leading-relaxed">{selectedIndustry.overview}</p>

                <section aria-labelledby={`${selectedIndustry.label}-roles`}>
                  <h3
                    id={`${selectedIndustry.label}-roles`}
                    className="font-display text-xl font-semibold text-primary sm:text-2xl"
                  >
                    Sector Wise Roles We Hire
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {selectedIndustry.roleGroups.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-2xl border border-border bg-secondary/45 p-5 shadow-card"
                      >
                        <h4 className="font-display text-lg font-semibold text-primary">
                          {group.title}
                        </h4>
                        <ul className="mt-4 space-y-2">
                          {group.roles.map((role) => (
                            <li key={role} className="flex items-start gap-2 text-sm text-black">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="rounded-2xl border border-primary/10 bg-primary/5 p-5">
                  <p className="text-sm leading-relaxed text-black">
                    Looking for {selectedIndustry.label.toLowerCase()} opportunities in Pune, PCMC,
                    or across India? Share your preferred roles, experience level, location, and
                    timeline so Skill Spark Consulting can match your profile with relevant
                    openings.
                  </p>
                  <Button asChild variant="gold" size="lg" className="mt-5 w-full sm:w-auto">
                    <a href="#candidate-profile" onClick={() => setSelectedIndustry(null)}>
                      Apply for This Sector <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          )}
        </DialogContent>
      </Dialog>

      <Section
        tag="How We Help"
        title="From Profile to Joining"
        subtitle="Understand exactly what happens after you submit your profile, from review and job matching to interviews, feedback, offer, and joining."
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

      <section className="bg-background py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold text-primary leading-tight md:text-4xl">
              Questions, Answered
            </h2>
            <p className="mt-4 text-base text-black/80 leading-relaxed md:text-lg">
              Everything you need to know before you register with us.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            <div className="overflow-hidden rounded-[32px] border border-border/60 bg-primary px-6 py-7 shadow-elegant sm:px-8 sm:py-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gold/10 text-gold shadow-soft">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    Confidential Candidate Support
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-primary-foreground sm:text-3xl">
                    Your Search Stays Strictly Confidential
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/90">
                    We never share your CV, name, or contact details with any employer without your explicit consent for that specific role. Your current employer will not know you're exploring options through us.
                  </p>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="overflow-hidden rounded-[24px] border border-border/70 bg-white shadow-sm"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between px-5 py-5 text-left text-base font-semibold text-primary transition-colors hover:bg-slate-50">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="border-t border-border/70 bg-slate-50 px-5 pb-5 pt-0 text-sm leading-relaxed text-black">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Section
        title="Submit Your Candidate Profile"
        subtitle="Fill in your details so our team can match your profile with relevant opportunities quickly."
        align="center"
        className="bg-primary text-primary-foreground [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/90"
        containerClassName="max-w-5xl"
      >
        <form
          id="candidate-profile"
          className="mx-auto max-w-4xl rounded-2xl bg-white p-5 text-left shadow-elegant sm:p-7 md:p-9"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {profileFields.map((field) => (
              <div key={field.name} className="space-y-2">
                <label
                  htmlFor={field.name}
                  className="text-xs font-semibold text-primary sm:text-sm"
                >
                  {field.label}
                </label>
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type ?? "text"}
                  placeholder={field.placeholder}
                  className="h-11 rounded-lg border-slate-200 bg-white text-sm text-foreground shadow-sm placeholder:text-slate-400 focus-visible:ring-gold"
                />
              </div>
            ))}

            <div className="space-y-2">
              <label htmlFor="resume" className="text-xs font-semibold text-primary sm:text-sm">
                Upload CV
              </label>
              <Input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="h-11 rounded-lg border-slate-200 bg-white text-sm text-foreground shadow-sm file:mr-3 file:rounded-md file:bg-slate-100 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-primary focus-visible:ring-gold"
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label htmlFor="address" className="text-xs font-semibold text-primary sm:text-sm">
              Address
            </label>
            <Textarea
              id="address"
              name="address"
              placeholder="Your full address"
              className="min-h-28 rounded-lg border-slate-200 bg-white text-sm text-foreground shadow-sm placeholder:text-slate-400 focus-visible:ring-gold"
            />
          </div>

          <div className="mt-4 space-y-2">
            <label
              htmlFor="additionalInformation"
              className="text-xs font-semibold text-primary sm:text-sm"
            >
              Additional Information
            </label>
            <Textarea
              id="additionalInformation"
              name="additionalInformation"
              placeholder="Tell us about your career goals, location preferences, or anything else we should know"
              className="min-h-28 rounded-lg border-slate-200 bg-white text-sm text-foreground shadow-sm placeholder:text-slate-400 focus-visible:ring-gold"
            />
          </div>

          <Button type="submit" variant="gold" className="mt-5 h-12 w-full rounded-lg">
            Submit Your Profile
          </Button>
        </form>
      </Section>
    </>
  );
}
