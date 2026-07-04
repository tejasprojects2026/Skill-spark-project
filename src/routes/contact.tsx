import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta, pageSeoKeywords, siteConfig } from "@/lib/seo";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structuredData";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { StructuredData } from "@/components/site/StructuredData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { skillSparkMapEmbedUrl, skillSparkMapUrl } from "@/lib/location";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { z } from "zod";
import { submitWeb3Form } from "@/lib/web3forms";

const contactSeo = {
  title: "Contact Skill Spark Consulting | Recruitment Agency in PCMC Pune",
  description:
    "Contact Skill Spark Consulting for hiring support, recruitment services, candidate registration, staffing inquiries, and job placement guidance in Pune and PCMC.",
  url: `${siteConfig.url}/contact`,
  keywords: pageSeoKeywords.contact,
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildSeoMeta({
      title: contactSeo.title,
      description: contactSeo.description,
      url: contactSeo.url,
      keywords: contactSeo.keywords,
    }),
    links: [{ rel: "canonical", href: contactSeo.url }],
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
    try {
      await submitWeb3Form({
        data: parsed.data,
        formSource: "Contact Page - Send Us a Message",
        subject: "New enquiry from Contact Form | Skill Spark Website",
      });
      toast.success("Thank you! Our team will reach out shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to send your enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StructuredData
        data={[
          webPageJsonLd(contactSeo),
          breadcrumbJsonLd([
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Contact Skill Spark Consulting", url: contactSeo.url },
          ]),
        ]}
      />
      <PageHero
        tag="Contact Us"
        title="Contact Our Pune Recruitment Team"
        subtitle="Talk to Skill Spark Consulting for employer hiring support, candidate registration, staffing inquiries, and job placement guidance in Pune and PCMC."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <Section title="" className="bg-background">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10 lg:-mt-14">
          <div
            id="contact-form"
            className="scroll-mt-24 rounded-2xl border border-border/50 bg-card p-5 shadow-elegant sm:p-8 md:p-10 lg:col-span-3"
          >
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
            <div className="rounded-2xl bg-primary p-5 text-primary-foreground shadow-elegant sm:p-8">
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
                  href={skillSparkMapUrl}
                />
                <ContactRow
                  icon={Clock}
                  title="Business Hours"
                  value="Mon – Sat: 9:30 AM – 6:30 PM"
                />
              </div>
            </div>
            <div className="h-64 overflow-hidden rounded-2xl border border-border shadow-elegant sm:h-72">
              <iframe
                title="Skill Spark Office — Gera's Imperium Gateway, PCMC, Pune"
                src={skillSparkMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
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
  const isExternal = href?.startsWith("http");

  return (
    <div className="flex min-w-0 items-start gap-3">
      <Icon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
      <div className="min-w-0">
        <div className="font-semibold">{title}</div>
        {href ? (
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`text-primary-foreground/75 hover:text-gold transition-smooth ${href.startsWith("tel:") ? "phone-number whitespace-nowrap" : "break-all"}`}
          >
            {value}
          </a>
        ) : (
          <div className="text-primary-foreground/75 mt-0.5 break-words">{value}</div>
        )}
      </div>
    </div>
  );
}
