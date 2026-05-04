import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero.jpg";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Factory,
  Globe,
  HeartPulse,
  MapPin,
  Package,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skill Spark Consulting - Pune's Trusted Recruitment Partner" },
      {
        name: "description",
        content:
          "Skill Spark Consulting specializes in end-to-end recruitment solutions for companies across Pune, PCMC, and beyond - covering IT, Industrial, and Corporate sectors.",
      },
      {
        property: "og:title",
        content: "Skill Spark Consulting - Pune's Trusted Recruitment Partner",
      },
      {
        property: "og:description",
        content: "Connecting the right talent with the right opportunity across Pune & PCMC.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Briefcase,
    title: "Permanent Staffing",
    desc: "End-to-end hiring for full-time roles across mid to senior levels in IT, manufacturing, logistics, and corporate functions.",
  },
  {
    icon: ShieldCheck,
    title: "Executive Search",
    desc: "Identifying and approaching high-caliber leadership talent who aren't actively job-seeking. Confidential, strategic, result-driven.",
  },
] as const;

const why = [
  {
    icon: "📍",
    title: "Located in PCMC",
    desc: "Strategically based in Pune's fastest-growing industrial hub - we understand local industry, local talent, and local market dynamics.",
  },
  {
    icon: "🔍",
    title: "Pre-Vetted Talent Only",
    desc: "We screen, assess, and interview candidates before you meet them. Your time is spent evaluating the best - not sifting through noise.",
  },
  {
    icon: "🌐",
    title: "Wide Network Reach",
    desc: "Our talent network spans Pune, PCMC, Pimpri-Chinchwad, Nashik, and beyond - across IT parks, industrial estates, and corporate corridors.",
  },
  {
    icon: "🏭",
    title: "Multi-Sector Expertise",
    desc: "From ERP developers to CNC operators to HR managers - we understand the unique hiring needs of diverse industries.",
  },
] as const;

const sectors = [
  { icon: Users, label: "Information Technology" },
  { icon: Factory, label: "Manufacturing & Engineering" },
  { icon: Package, label: "Logistics & Supply Chain" },
  { icon: HeartPulse, label: "Healthcare & Nursing" },
  { icon: Building2, label: "Corporate & Admin" },
  { icon: Briefcase, label: "BFSI & Sales" },
] as const;

const highlights = [
  { icon: MapPin, label: "Serving Pune & PCMC" },
  { icon: Factory, label: "IT & Industrial Sectors" },
  { icon: Briefcase, label: "Pre-Vetted Candidates" },
  { icon: Globe, label: "Wide Talent Network" },
] as const;

const testimonials = [
  {
    quote:
      "Skill Spark found us a Production Manager within 10 days. The candidate was already pre-screened and joined without any issues.",
    author: "HR Head, Manufacturing Company, Pune",
  },
  {
    quote:
      "I was placed at a great company within 3 weeks of registering. The team was professional and guided me throughout.",
    author: "Placed Candidate, IT Sector",
  },
  {
    quote:
      "Their understanding of our industry helped them deliver exactly the kind of talent we needed for our expansion project.",
    author: "Operations Director, Logistics Firm, PCMC",
  },
] as const;

function Index() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Pune&apos;s Trusted Recruitment Partner
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Connecting the Right Talent with the Right Opportunity
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mb-8">
              Skill Spark Consulting specializes in end-to-end recruitment solutions for companies
              across Pune, PCMC, and beyond - covering IT, Industrial, and Corporate sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/employer"
                className="inline-flex items-center justify-center bg-[#f3a900] text-primary font-semibold px-8 py-3 rounded-md hover:bg-[#d89500] transition-smooth"
              >
                Hire Talent <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-[#f3a900] bg-[#f3a900] text-primary font-semibold px-8 py-3 rounded-md hover:bg-[#d89500] hover:border-[#d89500] transition-smooth"
              >
                Find a Job <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-elegant">
              <img
                src={heroImg}
                alt="Professional recruitment and consulting"
                className="h-[480px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/92 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12 text-primary-foreground/80 text-sm">
          {highlights.map((item) => (
            <span key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-accent" />
              {item.label}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-secondary/55 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">
              We Don&apos;t Just Fill Positions. We Build Teams.
            </h2>
            <p className="text-black leading-relaxed mb-6">
              Skill Spark Consulting is a Pune-based recruitment consultancy with deep roots in the
              PCMC and Pune industrial belt. We work closely with companies to understand their
              culture, goals, and hiring challenges - and with candidates to understand their
              ambitions, skills, and fitment. Our promise: every candidate we send to you has
              already been screened, assessed, and vetted by us. You receive quality, not quantity.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link to="/about">
                Learn About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl h-64 md:h-80 shadow-card border border-border/40 bg-card">
            <img
              src={aboutImg}
              alt="Skill Spark recruitment consulting team"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
            Employer Hiring Solutions
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-secondary/55 rounded-lg p-8 text-center border border-border hover:shadow-lg transition-smooth"
              >
                <div className="text-accent mb-4 flex justify-center">
                  <service.icon className="w-10 h-10" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="gold" size="lg">
              <Link to="/employer">
                View Employer Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
            Why Skill Spark?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((item) => (
              <div key={item.title} className="border border-gold/30 rounded-lg p-6 bg-primary/60">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-lg font-semibold text-gold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="gold" size="lg">
              <Link to="/process">
                See Our Process <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
            Sectors We Specialize In
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.label}
                className="min-h-[168px] bg-secondary/55 rounded-lg p-6 flex flex-col items-center justify-center text-center border border-border hover:shadow-md transition-smooth"
              >
                <div className="text-accent mb-3">
                  <sector.icon className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium text-primary">{sector.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="gold" size="lg">
              <Link to="/employer">
                Explore Employer Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="bg-primary text-primary-foreground py-16 px-8 md:px-16 flex flex-col justify-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Are You an Employer?
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            Looking to hire right the first time? Share your requirement and let us do the heavy
            lifting.
          </p>
          <Button asChild variant="gold" size="lg" className="w-fit">
            <Link to="/employer" hash="hiring-form">
              Submit Hiring Requirement
            </Link>
          </Button>
        </div>
        <div className="bg-accent text-accent-foreground py-16 px-8 md:px-16 flex flex-col justify-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Are You a Job Seeker?
          </h3>
          <p className="text-black mb-6">
            Looking for your next big opportunity? Register with us and get placed with the right
            company.
          </p>
          <Link
            to="/employer"
            hash="hiring-form"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-smooth w-fit"
          >
            Register as a Candidate
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/55">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
            What Our Clients & Candidates Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border shadow-soft">
                <Quote className="w-6 h-6 text-gold mb-4" />
                <p className="text-black italic leading-relaxed mb-4">&quot;{item.quote}&quot;</p>
                <p className="text-sm font-semibold text-primary">- {item.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Talk to Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
