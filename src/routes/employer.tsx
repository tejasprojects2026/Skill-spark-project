import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  Factory,
  HeartPulse,
  Package,
  Send,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import executiveSearchImg from "@/assets/services/executive-search.jpg";
import permanentStaffingImg from "@/assets/services/permanent-staffing.jpg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

const industries = [
  {
    icon: Users,
    label: "Information Technology",
    seoTitle: "IT Recruitment Services for Software, Cloud, Data, and Support Roles",
    overview:
      "Skill Spark supports IT hiring for startups, product companies, IT services firms, and enterprise technology teams across Pune, PCMC, and India. We help employers hire screened technology talent for permanent staffing, specialized recruitment, and leadership search.",
    services: [
      "Permanent staffing for software and IT support teams",
      "Specialized recruitment for technology project teams",
      "Executive search for engineering, product, and technology leaders",
    ],
    roleGroups: [
      {
        title: "Software & Web Development",
        roles: [
          "Frontend Developer",
          "Backend Developer",
          "Full Stack Developer",
          "React Developer",
          "Node.js Developer",
          "Python Developer",
        ],
      },
      {
        title: "Cloud, Data & Infrastructure",
        roles: [
          "DevOps Engineer",
          "Cloud Engineer",
          "Data Analyst",
          "Data Engineer",
          "Database Administrator",
          "Network Engineer",
        ],
      },
      {
        title: "Product, QA & Support",
        roles: [
          "QA Engineer",
          "Automation Tester",
          "Product Manager",
          "Business Analyst",
          "Technical Support Executive",
          "IT Helpdesk Engineer",
        ],
      },
    ],
  },
  {
    icon: Factory,
    label: "Manufacturing & Engineering",
    seoTitle: "Manufacturing and Engineering Recruitment for Plant, Production, and Quality Teams",
    overview:
      "We provide manufacturing recruitment and engineering staffing for factories, industrial units, fabrication businesses, and production-led companies. Our hiring support covers shop-floor, technical, supervisory, and senior plant roles.",
    services: [
      "Permanent staffing for production and engineering departments",
      "Specialized recruitment for plant operations and project demand",
      "Executive search for plant heads and operations leaders",
    ],
    roleGroups: [
      {
        title: "Production & Operations",
        roles: [
          "Production Manager",
          "Production Supervisor",
          "Machine Operator",
          "CNC Operator",
          "Assembly Line Supervisor",
          "Shift Incharge",
        ],
      },
      {
        title: "Quality, Maintenance & EHS",
        roles: [
          "Quality Engineer",
          "QA/QC Inspector",
          "Maintenance Engineer",
          "EHS Officer",
          "Safety Officer",
          "Utility Technician",
        ],
      },
      {
        title: "Engineering & Plant Leadership",
        roles: [
          "Design Engineer",
          "Process Engineer",
          "Plant Head",
          "Operations Manager",
          "Tool Room Engineer",
          "Industrial Engineer",
        ],
      },
    ],
  },
  {
    icon: Package,
    label: "Logistics & Supply Chain",
    seoTitle: "Logistics and Supply Chain Hiring for Warehouse, Procurement, and Transport Roles",
    overview:
      "Skill Spark helps companies hire dependable logistics and supply chain professionals for warehousing, dispatch, procurement, inventory, and last-mile operations. We focus on practical screening, communication skills, and operational reliability.",
    services: [
      "Permanent staffing for logistics and supply chain functions",
      "Bulk hiring support for warehouse and dispatch operations",
      "Leadership hiring for procurement, warehouse, and distribution teams",
    ],
    roleGroups: [
      {
        title: "Warehouse & Inventory",
        roles: [
          "Warehouse Manager",
          "Inventory Executive",
          "Store Keeper",
          "Picker Packer",
          "Warehouse Supervisor",
          "Stock Auditor",
        ],
      },
      {
        title: "Transport & Dispatch",
        roles: [
          "Dispatch Executive",
          "Logistics Coordinator",
          "Fleet Supervisor",
          "Transport Manager",
          "Delivery Operations Executive",
          "Route Planner",
        ],
      },
      {
        title: "Procurement & Supply Chain",
        roles: [
          "Purchase Executive",
          "Procurement Manager",
          "Supply Chain Analyst",
          "Vendor Development Executive",
          "Import Export Executive",
          "MIS Executive",
        ],
      },
    ],
  },
  {
    icon: HeartPulse,
    label: "Healthcare & Nursing",
    seoTitle: "Healthcare and Nursing Staffing for Hospitals, Clinics, and Care Facilities",
    overview:
      "We support healthcare recruitment for hospitals, clinics, diagnostic centers, home-care providers, and medical facilities. Our process focuses on verified experience, patient-care attitude, shift readiness, and role-specific screening.",
    services: [
      "Permanent staffing for clinical and hospital support roles",
      "Focused recruitment for ward, patient-care, and facility requirements",
      "Focused sourcing for nursing, diagnostics, and healthcare operations",
    ],
    roleGroups: [
      {
        title: "Nursing & Patient Care",
        roles: [
          "Staff Nurse",
          "GNM Nurse",
          "ANM Nurse",
          "ICU Nurse",
          "Nursing Assistant",
          "Patient Care Attendant",
        ],
      },
      {
        title: "Diagnostics & Clinical Support",
        roles: [
          "Lab Technician",
          "Radiology Technician",
          "Phlebotomist",
          "OT Technician",
          "Dialysis Technician",
          "Medical Records Executive",
        ],
      },
      {
        title: "Hospital Operations",
        roles: [
          "Hospital Administrator",
          "Front Office Executive",
          "Billing Executive",
          "Ward Boy",
          "Housekeeping Supervisor",
          "Facility Coordinator",
        ],
      },
    ],
  },
  {
    icon: Building2,
    label: "Corporate & Admin",
    seoTitle: "Corporate and Admin Recruitment for HR, Finance, Back Office, and Office Operations",
    overview:
      "Skill Spark recruits corporate and administrative talent for growing businesses that need dependable back-office, HR, finance, operations, and office support teams. We prioritize communication, stability, documentation accuracy, and role fit.",
    services: [
      "Permanent staffing for corporate and back-office functions",
      "Focused hiring support for documentation, operations, and admin workload",
      "Search support for HR, finance, and administration leadership",
    ],
    roleGroups: [
      {
        title: "Human Resources & Admin",
        roles: [
          "HR Executive",
          "Recruiter",
          "Admin Executive",
          "Office Coordinator",
          "Payroll Executive",
          "Facility Executive",
        ],
      },
      {
        title: "Finance & Accounts",
        roles: [
          "Accountant",
          "Accounts Executive",
          "Billing Executive",
          "Finance Executive",
          "Tax Assistant",
          "Accounts Manager",
        ],
      },
      {
        title: "Back Office & Operations",
        roles: [
          "Data Entry Operator",
          "MIS Executive",
          "Operations Executive",
          "Customer Support Executive",
          "Documentation Executive",
          "Executive Assistant",
        ],
      },
    ],
  },
  {
    icon: Briefcase,
    label: "BFSI & Sales",
    seoTitle:
      "BFSI and Sales Recruitment for Banking, Insurance, Field Sales, and Business Development",
    overview:
      "We help banking, financial services, insurance, fintech, and sales-led organizations hire target-driven professionals. Our screening focuses on communication, product understanding, field readiness, customer handling, and performance orientation.",
    services: [
      "Permanent staffing for sales, banking, and insurance teams",
      "Bulk hiring support for field sales and customer acquisition",
      "Leadership hiring for branch, sales, and business development roles",
    ],
    roleGroups: [
      {
        title: "Banking, Finance & Insurance",
        roles: [
          "Relationship Manager",
          "Loan Officer",
          "Credit Executive",
          "Insurance Advisor",
          "Branch Operations Executive",
          "KYC Executive",
        ],
      },
      {
        title: "Sales & Business Development",
        roles: [
          "Sales Executive",
          "Business Development Executive",
          "Area Sales Manager",
          "Field Sales Officer",
          "Inside Sales Executive",
          "Key Account Manager",
        ],
      },
      {
        title: "Customer & Revenue Operations",
        roles: [
          "Telecaller",
          "Customer Service Executive",
          "Collection Executive",
          "Sales Coordinator",
          "Channel Sales Executive",
          "Team Leader Sales",
        ],
      },
    ],
  },
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
            From permanent placements to executive search and healthcare hiring - we cover the full
            spectrum of talent acquisition.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
            Industries We Serve
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
            {industries.map((industry) => (
              <Dialog key={industry.label}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="w-[calc(50%-0.75rem)] sm:w-[198px] min-h-[166px] bg-secondary/45 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-border shadow-card hover-lift cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                    aria-label={`View ${industry.label} recruitment roles and services`}
                  >
                    <div className="text-accent mb-3">
                      <industry.icon className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold text-primary">{industry.label}</p>
                    <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold">
                      View Roles
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto rounded-3xl border-border bg-card p-0 shadow-elegant [&>button]:flex [&>button]:h-9 [&>button]:w-9 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:bg-white/10 [&>button]:p-0 [&>button]:text-white [&>button]:opacity-100 [&>button]:ring-offset-primary hover:[&>button]:bg-white/20 [&>button>svg]:h-5 [&>button>svg]:w-5">
                  <article>
                    <div className="bg-primary px-6 py-7 text-primary-foreground md:px-7">
                      <DialogHeader className="text-left">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-primary shadow-soft">
                          <industry.icon className="h-6 w-6" />
                        </div>
                        <DialogTitle className="font-display text-3xl font-semibold leading-tight">
                          {industry.label} Recruitment Roles
                        </DialogTitle>
                        <DialogDescription className="max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                          {industry.seoTitle}
                        </DialogDescription>
                      </DialogHeader>
                    </div>

                    <div className="space-y-7 p-6 md:p-7">
                      <p className="text-black leading-relaxed">{industry.overview}</p>

                      <section aria-labelledby={`${industry.label}-services`}>
                        <h3
                          id={`${industry.label}-services`}
                          className="font-display text-2xl font-semibold text-primary"
                        >
                          Services We Provide
                        </h3>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {industry.services.map((item) => (
                            <div
                              key={item}
                              className="rounded-xl border border-gold/25 bg-gold/10 p-4 text-sm font-medium leading-relaxed text-primary shadow-card"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </section>

                      <section aria-labelledby={`${industry.label}-roles`}>
                        <h3
                          id={`${industry.label}-roles`}
                          className="font-display text-2xl font-semibold text-primary"
                        >
                          Sector Wise Roles We Hire
                        </h3>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                          {industry.roleGroups.map((group) => (
                            <div
                              key={group.title}
                              className="rounded-2xl border border-border bg-secondary/45 p-5 shadow-card"
                            >
                              <h4 className="font-display text-lg font-semibold text-primary">
                                {group.title}
                              </h4>
                              <ul className="mt-4 space-y-2">
                                {group.roles.map((role) => (
                                  <li
                                    key={role}
                                    className="flex items-start gap-2 text-sm text-black"
                                  >
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
                          Looking for {industry.label.toLowerCase()} recruitment in Pune, PCMC, or
                          across India? Share your required roles, experience level, location, and
                          timeline so Skill Spark Consulting can prepare a focused shortlist.
                        </p>
                      </div>
                    </div>
                  </article>
                </DialogContent>
              </Dialog>
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

      <section id="hiring-form" className="bg-primary py-16 md:py-20 text-primary-foreground">
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
