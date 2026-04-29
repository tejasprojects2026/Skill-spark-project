import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Building2, UserRound, Send, Paperclip } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — Skill Spark Consulting" },
      {
        name: "description",
        content:
          "Whether you're looking to hire or looking to get hired — we're here to help. Submit your hiring requirement or register as a candidate.",
      },
      { property: "og:title", content: "Partner With Skill Spark Consulting" },
      {
        property: "og:description",
        content: "Submit a hiring requirement or register as a candidate.",
      },
    ],
  }),
  component: PartnerPage,
});

const industries = [
  "Information Technology",
  "Manufacturing & Engineering",
  "Industrial & Infrastructure",
  "Logistics & Supply Chain",
  "Corporate & Admin",
  "BFSI & Sales",
];

const hiringTypes = ["Permanent", "Contract / Temp", "Executive Search"];
const experiences = ["Fresher", "1-3 Years", "3-5 Years", "5-10 Years", "10+ Years"];

const employerSchema = z.object({
  company: z.string().trim().min(1, "Company name is required").max(120),
  contact: z.string().trim().min(1, "Contact name is required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  industry: z.string().min(1, "Select an industry"),
  hiringType: z.string().min(1, "Select hiring type"),
  details: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

const candidateSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  industry: z.string().min(1, "Select an industry"),
  experience: z.string().min(1, "Select experience"),
  message: z.string().trim().max(1000).optional(),
});

function PartnerPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = window.location.hash.replace("#", "");
    if (id) {
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, []);

  return (
    <>
      <PageHero
        tag="Partner With Us"
        title="Let's Work Together"
        subtitle="Whether you're looking to hire or looking to get hired — we're here to help."
        breadcrumbs={[{ label: "Partner" }]}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 -mt-14">
          <EmployerForm />
          <CandidateForm />
        </div>
      </section>
    </>
  );
}

function EmployerForm() {
  const [form, setForm] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    industry: "",
    hiringType: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = employerSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Requirement submitted! We'll get back to you within 24 hours.");
    setForm({
      company: "",
      contact: "",
      email: "",
      phone: "",
      industry: "",
      hiringType: "",
      details: "",
    });
  };

  return (
    <div
      id="employer"
      className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant border border-border/50 scroll-mt-24"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <Building2 className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="font-display text-2xl text-primary">For Employers</h2>
          <p className="text-sm text-muted-foreground">
            Submit your hiring requirement and we'll get back to you within 24 hours.
          </p>
        </div>
      </div>

      <form onSubmit={submit} className="mt-7 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Company Name">
            <Input
              className="h-11"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Acme Pvt Ltd"
            />
          </Field>
          <Field label="Contact Person">
            <Input
              className="h-11"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              placeholder="HR Manager"
            />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Email">
            <Input
              type="email"
              className="h-11"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="hr@company.com"
            />
          </Field>
          <Field label="Phone">
            <Input
              className="h-11"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 99999 99999"
            />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Select Industry">
            <Select
              value={form.industry}
              onChange={(v) => setForm({ ...form, industry: v })}
              options={industries}
              placeholder="Select Industry"
            />
          </Field>
          <Field label="Hiring Type">
            <Select
              value={form.hiringType}
              onChange={(v) => setForm({ ...form, hiringType: v })}
              options={hiringTypes}
              placeholder="Hiring Type"
            />
          </Field>
        </div>
        <Field label="Role / Requirement Details">
          <Textarea
            className="min-h-28"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            placeholder="Roles, openings, experience, key skills, location..."
          />
        </Field>
        <Button
          type="submit"
          variant="hero"
          size="lg"
          disabled={loading}
          className="w-full sm:w-auto"
        >
          {loading ? (
            "Submitting..."
          ) : (
            <>
              Submit Requirement <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

function CandidateForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    experience: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = candidateSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("You're registered! Our team will reach out with relevant opportunities.");
    setForm({ name: "", email: "", phone: "", industry: "", experience: "", message: "" });
  };

  return (
    <div
      id="candidate"
      className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant border border-border/50 scroll-mt-24"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
          <UserRound className="w-6 h-6 text-gold-foreground" />
        </div>
        <div>
          <h2 className="font-display text-2xl text-primary">For Job Seekers</h2>
          <p className="text-sm text-muted-foreground">
            Register with us and we'll match you with the right opportunities.
          </p>
        </div>
      </div>

      <form onSubmit={submit} className="mt-7 space-y-5">
        <Field label="Full Name">
          <Input
            className="h-11"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
          />
        </Field>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Email">
            <Input
              type="email"
              className="h-11"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
            />
          </Field>
          <Field label="Phone">
            <Input
              className="h-11"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 99999 99999"
            />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Preferred Industry">
            <Select
              value={form.industry}
              onChange={(v) => setForm({ ...form, industry: v })}
              options={industries}
              placeholder="Preferred Industry"
            />
          </Field>
          <Field label="Total Experience">
            <Select
              value={form.experience}
              onChange={(v) => setForm({ ...form, experience: v })}
              options={experiences}
              placeholder="Total Experience"
            />
          </Field>
        </div>
        <Field label="A short note (optional)">
          <Textarea
            className="min-h-24"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Anything we should know — current role, location preference, notice period..."
          />
        </Field>
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/60 border border-border rounded-lg px-3 py-2.5">
          <Paperclip className="w-3.5 h-3.5" /> Resume upload coming soon
        </div>
        <Button
          type="submit"
          variant="gold"
          size="lg"
          disabled={loading}
          className="w-full sm:w-auto"
        >
          {loading ? (
            "Registering..."
          ) : (
            <>
              Register as Candidate <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground block mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-11 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
