type GtagParams = Record<string, string | number | boolean | undefined>;

type WindowWithGtag = Window & {
  gtag?: (...args: unknown[]) => void;
};

function getGtag() {
  if (typeof window === "undefined") {
    return null;
  }

  const { gtag } = window as WindowWithGtag;
  return typeof gtag === "function" ? gtag : null;
}

export function trackEvent(eventName: string, params: GtagParams = {}) {
  const gtag = getGtag();
  if (!gtag) {
    return;
  }

  gtag("event", eventName, params);
}

export function trackLead(formName: "employee_profile" | "employer_requirement") {
  trackEvent("generate_lead", {
    form_name: formName,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}
