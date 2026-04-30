import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Briefcase,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  Factory,
  HeartPulse,
  Landmark,
  Package,
  Send,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import contractStaffingImg from "@/assets/services/contract-staffing.jpg";
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
          "Employer hiring solutions from permanent placements to executive search to contract staffing.",
      },
      { property: "og:title", content: "Employer Solutions That Deliver - Skill Spark" },
      {
        property: "og:description",
        content:
          "Permanent staffing, executive search, and contract & temp staffing across Pune and PCMC.",
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
    icon: CalendarDays,
    title: "Contract & Temp Staffing",
    image: contractStaffingImg,
    desc: "Flexible workforce solutions for project-based requirements, seasonal demand, or bridging critical gaps. We handle compliance, payroll, and workforce management so you can focus on business.",
    points: [
      "Project-based staffing",
      "Seasonal workforce augmentation",
      "Compliance & payroll management",
      "Quick turnaround",
    ],
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Nursing Staffing",
    image: contractStaffingImg,
    desc: "We source and shortlist dependable blue-collar healthcare talent for hospitals, clinics, diagnostic centers, and care facilities. Our focus is on reliable, pre-screened staff for patient care, diagnostics, facility operations, and administrative support.",
    points: [
      "Nurses and nursing assistants",
      "Medical attendants and ward support staff",
      "Lab technicians and diagnostic staff",
      "Hospital front office, billing, and admin support",
    ],
  },
] as const;

const industries = [
  { icon: Users, label: "Information Technology" },
  { icon: Factory, label: "Manufacturing & Engineering" },
  { icon: Landmark, label: "Industrial & Infrastructure" },
  { icon: Package, label: "Logistics & Supply Chain" },
  { icon: HeartPulse, label: "Healthcare & Nursing" },
  { icon: Building2, label: "Corporate & Admin" },
  { icon: Briefcase, label: "BFSI & Sales" },
] as const;

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
  roles: z.string().trim().min(2, "Tell us the role you want to hire for").max(200),
  message: z.string().trim().min(10, "Tell us a bit more about your hiring needs").max(1000),
});

function ServicesPage() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    roles: "",
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
    setForm({ company: "", name: "", email: "", phone: "", roles: "", message: "" });
  };

  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Employer
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Employer Solutions That Deliver
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            From permanent placements to executive search to contract staffing - we cover the full
            spectrum of talent acquisition.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.label}
                className="bg-secondary/45 rounded-2xl p-6 flex flex-col items-center text-center border border-border shadow-card hover-lift"
              >
                <div className="text-accent mb-3">
                  <industry.icon className="w-8 h-8" />
                </div>
                <p className="text-sm font-semibold text-primary">{industry.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/55">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="grid md:grid-cols-2 gap-10 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-soft">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mt-6">
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
                className={`rounded-3xl border border-border/60 bg-card shadow-card min-h-72 flex items-center justify-center ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full min-h-72 w-full rounded-3xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gradient-soft py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
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
                className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card p-6 shadow-card"
              >
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4">
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
            className="mt-10 bg-card text-foreground rounded-2xl p-6 md:p-8 shadow-elegant border border-primary-foreground/10"
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
            <div className="mt-5">
              <label className="text-sm font-medium block mb-1.5">Hiring Requirement</label>
              <Textarea
                className="min-h-32"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about location, experience level, timeline, and number of openings..."
              />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="mt-6">
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
