import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Skill Spark Consulting" },
      {
        name: "description",
        content:
          "Have a question or want to discuss your hiring needs? We'd love to hear from you.",
      },
      { property: "og:title", content: "Contact Skill Spark Consulting" },
      {
        property: "og:description",
        content: "Reach our PCMC office for hiring and recruitment conversations.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Thank you! Our team will reach out shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <PageHero
        tag="Contact Us"
        title="Get in Touch"
        subtitle="Have a question or want to discuss your hiring needs? We'd love to hear from you."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section title="" className="bg-background">
        <div className="grid lg:grid-cols-5 gap-10 -mt-14">
          <div className="lg:col-span-3 bg-card rounded-2xl p-8 md:p-10 shadow-elegant border border-border/50">
            <h3 className="font-display text-2xl text-primary">Send Us a Message</h3>
            <p className="text-sm text-black mt-1">We typically respond within one business day.</p>
            <form onSubmit={submit} className="mt-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium block mb-1.5">Full Name</label>
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
                <label className="text-sm font-medium block mb-1.5">Message</label>
                <Textarea
                  className="min-h-32"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your hiring needs or question..."
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={loading}
                className="w-full sm:w-auto"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-elegant">
              <h3 className="font-display text-2xl">Contact Information</h3>
              <div className="mt-6 space-y-5 text-sm">
                <ContactRow
                  icon={Phone}
                  title="Phone"
                  value="+91 78758 03175"
                  href="tel:+917875803175"
                />
                <ContactRow
                  icon={Mail}
                  title="Email"
                  value="skillsparkconsulting@gmail.com"
                  href="mailto:skillsparkconsulting@gmail.com"
                />
                <ContactRow
                  icon={MapPin}
                  title="Address"
                  value="A-620, Gera's Imperium Gateway, Nashik Phata, PCMC, Pune – 411034"
                />
                <ContactRow
                  icon={Clock}
                  title="Business Hours"
                  value="Mon – Sat: 9:30 AM – 6:30 PM"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elegant border border-border h-72">
              <iframe
                title="Skill Spark Office — Gera's Imperium Gateway, PCMC, Pune"
                src="https://www.google.com/maps?q=Gera%27s+Imperium+Gateway+Nashik+Phata+PCMC+Pune&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
      <div>
        <div className="font-semibold">{title}</div>
        {href ? (
          <a
            href={href}
            className="text-primary-foreground/75 hover:text-gold transition-smooth break-all"
          >
            {value}
          </a>
        ) : (
          <div className="text-primary-foreground/75 mt-0.5">{value}</div>
        )}
      </div>
    </div>
  );
}
