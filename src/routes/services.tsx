import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarDays,
  Check,
  Factory,
  HeartPulse,
  Landmark,
  Package,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import contractStaffingImg from "@/assets/services/contract-staffing.jpg";
import executiveSearchImg from "@/assets/services/executive-search.jpg";
import permanentStaffingImg from "@/assets/services/permanent-staffing.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Skill Spark Consulting" },
      {
        name: "description",
        content:
          "From permanent placements to executive search to contract staffing - we cover the full spectrum of talent acquisition.",
      },
      { property: "og:title", content: "Recruitment Solutions That Deliver - Skill Spark" },
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

function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Our Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Recruitment Solutions That Deliver
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            From permanent placements to executive search to contract staffing - we cover the full
            spectrum of talent acquisition.
          </p>
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

      <section className="bg-primary py-16 text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-semibold mb-4">Ready to Hire Smarter?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss your hiring needs and find the perfect talent for your team.
          </p>
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">
              Submit Hiring Requirement <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
