"use server";

export type ContactField = "name" | "email";

export type ContactValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "invalid"; fields: ContactField[]; values: ContactValues }
  | { status: "error"; values: ContactValues };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function read(formData: FormData, key: string, max: number) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

/**
 * Validates a contact request and hands it to the webhook in CONTACT_WEBHOOK_URL
 * (Formspree, Make, Zapier, n8n or any endpoint that accepts JSON).
 * Without that variable nothing is delivered, so it answers with an error rather than
 * pretending to succeed.
 */
export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: people never see this field, so anything in it is a bot.
  if (read(formData, "company", 200) !== "") return { status: "success" };

  const values: ContactValues = {
    name: read(formData, "name", 120),
    phone: read(formData, "phone", 40),
    email: read(formData, "email", 200),
    message: read(formData, "message", 2000),
  };
  const locale = formData.get("locale") === "fr" ? "fr" : "he";

  const fields: ContactField[] = [];
  if (values.name.length < 2) fields.push("name");
  if (!emailPattern.test(values.email)) fields.push("email");
  if (fields.length > 0) return { status: "invalid", fields, values };

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    console.error("CONTACT_WEBHOOK_URL is not set, so a contact request was not delivered.");
    return { status: "error", values };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...values, locale, source: "blancbleu.org" }),
      signal: AbortSignal.timeout(8000),
    });
    return response.ok ? { status: "success" } : { status: "error", values };
  } catch {
    return { status: "error", values };
  }
}
