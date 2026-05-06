import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Briefcase,
  Check,
  CheckCircle2,
  ClockAlert,
  FileSearch,
  Send,
  ShieldCheck,
  Stethoscope,
  UserRoundX,
  UsersRound,
} from "lucide-react";
import executiveSearchImg from "@/assets/services/executive-search.jpg";
import permanentStaffingImg from "@/assets/services/permanent-staffing.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/employer")({
  head: () => ({
    meta: [
      { title: "Employer - Skill Spark Consulting" },
      {
        name: "description",
        content:
          "Employer hiring solutions from permanent placements to executive search and healthcare recruitment.",
      },
      { property: "og:title", content: "Employer Solutions That Deliver - Skill Spark" },
      {
        property: "og:description",
        content:
          "Permanent staffing, executive search, and healthcare recruitment across Pune and PCMC.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Briefcase,
    title: "Permanent Staffing",
    image: permanentStaffingImg,
    desc: "End-to-end hiring for full-time roles across mid to senior levels in IT, manufacturing, logistics, and corporate functions. We manage the complete lifecycle - from requirement gathering and candidate sourcing to interview coordination and offer management.",
    points: [
      "Mid to senior-level roles",
      "IT, manufacturing, logistics, corporate",
      "Full lifecycle management",
      "Pre-vetted shortlists",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Executive Search",
    image: executiveSearchImg,
    desc: "Identifying and approaching high-caliber leadership talent who aren't actively job-seeking. Our executive search practice is confidential, strategic, and result-driven - designed for CXO, VP, and Director-level mandates.",
    points: [
      "CXO & leadership hiring",
      "Confidential headhunting",
      "Market mapping & talent intelligence",
      "Industry-specific approach",
    ],
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Nursing Staffing",
    image: permanentStaffingImg,
    desc: "We source and shortlist dependable blue-collar healthcare talent for hospitals, clinics, diagnostic centers, and care facilities. Our focus is on reliable, pre-screened staff for patient care, diagnostics, facility operations, and administrative support.",
    points: [
      "Nurses and nursing assistants",
      "Medical attendants and ward support staff",
      "Lab technicians and diagnostic staff",
      "Hospital front office, billing, and admin support",
    ],
  },
] as const;

const employerProblems = [
  {
    title: "Too Many Irrelevant Applications",
    desc: "Hiring teams spend hours filtering resumes, but many candidates do not match the role, location, salary range, or experience requirement.",
    icon: FileSearch,
  },
  {
    title: "Slow Hiring and Lost Candidates",
    desc: "When sourcing, screening, interviews, and follow-ups take too long, strong candidates accept other offers before closure.",
    icon: ClockAlert,
  },
  {
    title: "Poor Candidate Fit",
    desc: "A candidate may look good on paper but still fail on communication, stability, practical skills, culture fit, or joining commitment.",
    icon: UserRoundX,
  },
  {
    title: "Pressure Across Multiple Roles",
    desc: "Companies often need hiring support across IT, manufacturing, logistics, healthcare, admin, BFSI, and sales at the same time.",
    icon: UsersRound,
  },
];

const processHighlights = [
  "Clear communication at every stage",
  "Pre-screened and relevant candidate submissions",
  "Faster coordination between employers and candidates",
  "Support through closure and onboarding",
];

const hiringSchema = z.object({
  company: z.string().trim().min(1, "Company name is required").max(120),
  name: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  department: z.string().trim().min(1, "Department is required").max(120),
  roles: z.string().trim().min(2, "Tell us the role you want to hire for").max(200),
  jobType: z.string().trim().min(1, "Job type is required").max(80),
  location: z.string().trim().min(1, "Job location is required").max(160),
  openings: z.string().trim().min(1, "Number of openings is required").max(20),
  experience: z.string().trim().min(1, "Experience range is required").max(80),
  salary: z.string().trim().max(80),
  joiningTimeline: z.string().trim().max(80),
  workMode: z.string().trim().max(80),
  qualification: z.string().trim().max(160),
  keySkills: z.string().trim().max(300),
  message: z.string().trim().min(10, "Tell us a bit more about your hiring needs").max(1000),
});

function ServicesPage() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    roles: "",
    jobType: "",
    location: "",
    openings: "",
    experience: "",
    salary: "",
    joiningTimeline: "",
    workMode: "",
    qualification: "",
    keySkills: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = hiringSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setLoading(false);
    toast.success("Thank you! Our hiring team will reach out shortly.");
    setForm({
      company: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      roles: "",
      jobType: "",
      location: "",
      openings: "",
      experience: "",
      salary: "",
      joiningTimeline: "",
      workMode: "",
      qualification: "",
      keySkills: "",
      message: "",
    });
  };

  return (
    <>
      <section className="bg-primary py-12 text-primary-foreground sm:py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            Employer
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-5 md:mb-6">
            Employer Solutions That Deliver
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-3xl mx-auto">
            From permanent placements to executive search and healthcare hiring - we cover the full
            spectrum of talent acquisition.
          </p>
        </div>
      </section>

      <section className="bg-card py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold uppercase tracking-wider text-accent">
              Problems
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-5 text-primary leading-tight">
              Hiring Challenges Employers Face
            </h2>
            <p className="mt-5 text-base md:text-lg text-black leading-relaxed">
              Before the right candidate joins, companies often lose time in screening, follow-ups,
              coordination, and finding people who truly fit the role.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {employerProblems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-2xl border border-border/60 bg-secondary/45 p-5 shadow-card transition-smooth hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-elegant sm:p-6"
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
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-20 bg-secondary/55">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 md:space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-soft">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mt-6">
                  {service.title}
                </h2>
                <p className="mt-5 text-black leading-relaxed">{service.desc}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-black">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`rounded-2xl md:rounded-3xl border border-border/60 bg-card shadow-card min-h-56 sm:min-h-72 flex items-center justify-center ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full min-h-56 w-full rounded-2xl object-cover sm:min-h-72 md:rounded-3xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gradient-soft py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold uppercase tracking-wider text-accent">
              Why It Works
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-5 text-primary leading-tight">
              Built for Clarity, Speed, and Better Hiring Outcomes
            </h2>
            <p className="mt-5 text-base md:text-lg text-black leading-relaxed">
              We keep the process disciplined so employers save time and candidates stay engaged
              throughout the cycle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-14 max-w-6xl mx-auto">
            {processHighlights.map((item) => (
              <div
                key={item}
              className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card p-5 sm:p-6 shadow-card"
              >
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hiring-form" className="bg-primary py-14 sm:py-16 md:py-20 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-semibold">
              Ready to start hiring with a clearer process?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Share the roles you need to fill and we&apos;ll get back with a focused next step.
            </p>
          </div>

          <form
            onSubmit={submit}
            className="mt-8 rounded-2xl border border-primary-foreground/10 bg-card p-5 text-foreground shadow-elegant sm:p-6 md:mt-10 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium block mb-1.5">Company Name</label>
                <Input
                  className="h-11"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Contact Name</label>
                <Input
                  className="h-11"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Email</label>
                <Input
                  type="email"
                  className="h-11"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Phone</label>
                <Input
                  className="h-11"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 99999 99999"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Department</label>
                <Input
                  className="h-11"
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                  placeholder="E.g. Production, HR, Sales, IT"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Job Type</label>
                <Input
                  className="h-11"
                  value={form.jobType}
                  onChange={(e) => setForm({ ...form, jobType: e.target.value })}
                  placeholder="E.g. Full-time, Contract, Temporary"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium block mb-1.5">Roles to Hire</label>
              <Input
                className="h-11"
                value={form.roles}
                onChange={(e) => setForm({ ...form, roles: e.target.value })}
                placeholder="E.g. Production Manager, HR Executive, Staff Nurse"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <div>
                <label className="text-sm font-medium block mb-1.5">Job Location</label>
                <Input
                  className="h-11"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="E.g. Pune, PCMC, Chakan"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Number of Openings</label>
                <Input
                  className="h-11"
                  value={form.openings}
                  onChange={(e) => setForm({ ...form, openings: e.target.value })}
                  placeholder="E.g. 3"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Experience Required</label>
                <Input
                  className="h-11"
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  placeholder="E.g. 2-5 years"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Salary Range</label>
                <Input
                  className="h-11"
                  value={form.salary}
                  onChange={(e) => setForm({ ...form, salary: e.target.value })}
                  placeholder="E.g. 3-6 LPA"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Joining Timeline</label>
                <Input
                  className="h-11"
                  value={form.joiningTimeline}
                  onChange={(e) => setForm({ ...form, joiningTimeline: e.target.value })}
                  placeholder="E.g. Immediate, 15 days, 30 days"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Work Mode</label>
                <Input
                  className="h-11"
                  value={form.workMode}
                  onChange={(e) => setForm({ ...form, workMode: e.target.value })}
                  placeholder="E.g. On-site, Hybrid, Remote"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <div>
                <label className="text-sm font-medium block mb-1.5">
                  Required Qualification
                </label>
                <Input
                  className="h-11"
                  value={form.qualification}
                  onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                  placeholder="E.g. B.Tech, MBA, GNM, Graduate"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Key Skills Required</label>
                <Input
                  className="h-11"
                  value={form.keySkills}
                  onChange={(e) => setForm({ ...form, keySkills: e.target.value })}
                  placeholder="E.g. Excel, CNC, React, Field Sales"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium block mb-1.5">Hiring Requirement</label>
              <Textarea
                className="min-h-32"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about job responsibilities, shift timing, interview process, must-have skills, or any special hiring notes..."
              />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="mt-6 w-full sm:w-auto">
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Submit Requirement <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

