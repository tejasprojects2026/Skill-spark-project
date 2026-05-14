const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "c89f55b5-9200-466d-95f2-a06e998e352d";

type Web3FormValue = string | Blob | null | undefined;

type SubmitWeb3FormOptions = {
  data: FormData | Record<string, Web3FormValue>;
  formSource: string;
  subject: string;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: {
    message?: string;
  };
};

export async function submitWeb3Form({ data, formSource, subject }: SubmitWeb3FormOptions) {
  const body = data instanceof FormData ? data : new FormData();

  if (!(data instanceof FormData)) {
    Object.entries(data).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        body.set(key, value);
      }
    });
  }

  body.set("access_key", WEB3FORMS_ACCESS_KEY);
  body.set("subject", subject);
  body.set("from_name", "Skill Spark Website");
  body.set("Form Source", formSource);
  body.set("Submitted Page", typeof window !== "undefined" ? window.location.href : "");
  body.set("Submitted At", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
  body.set("botcheck", "");

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body,
  });

  const result = (await response.json().catch(() => null)) as Web3FormsResponse | null;

  if (!response.ok || !result?.success) {
    throw new Error(
      result?.message ||
        result?.body?.message ||
        "We couldn't send your enquiry. Please try again in a moment.",
    );
  }

  return result;
}
