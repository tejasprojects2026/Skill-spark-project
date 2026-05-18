import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import favicon from "@/assets/favicon .png";
import { buildSeoMeta, pageSeoKeywords, siteConfig } from "@/lib/seo";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structuredData";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StructuredData } from "@/components/site/StructuredData";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

const GA_MEASUREMENT_ID = (
  import.meta.env.VITE_GA_MEASUREMENT_ID || "G-VNHL945XWV"
).trim();

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-semibold text-gradient">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex mt-6 items-center justify-center rounded-lg bg-[#f3a900] px-5 py-2.5 text-sm font-medium text-primary shadow-soft hover:bg-[#d89500] hover:shadow-elegant transition-smooth"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...buildSeoMeta({
        title: "Skill Spark Consulting | Recruitment Agency in Pune & PCMC",
        description:
          "Skill Spark Consulting is a Pune and PCMC recruitment agency for employers and job seekers across IT, manufacturing, healthcare, logistics, BFSI, sales, and executive hiring.",
        url: `${siteConfig.url}/`,
        keywords: pageSeoKeywords.home,
      }),
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.url}/` },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: favicon },
      { rel: "apple-touch-icon", href: favicon },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Nunito:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
        {GA_MEASUREMENT_ID ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        ) : null}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <StructuredData data={[organizationJsonLd, websiteJsonLd]} />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" richColors />
      </div>
    </I18nProvider>
  );
}
