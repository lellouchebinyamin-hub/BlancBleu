"use client";

import { ArrowRightIcon, CheckIcon, Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

import { submitContact, type ContactState, type ContactValues } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Dictionary } from "@/content";
import { localizedPath, routes, type Locale } from "@/lib/i18n";

const initialState: ContactState = { status: "idle" };

function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor} className="justify-between text-[0.9375rem]">
        {label}
        {hint ? <span className="font-normal text-muted-foreground">{hint}</span> : null}
      </Label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** The contact form. Validation happens on the server, in the visitor's language. */
export function ContactForm({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary["finalCta"]["form"];
}) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="flex min-h-[26rem] flex-col items-start justify-center gap-5">
        <span className="grid size-14 place-items-center rounded-full bg-navy text-paper">
          <CheckIcon strokeWidth={1.75} className="size-7" />
        </span>
        <h3 className="font-serif text-[2rem] leading-tight font-normal">{copy.success.title}</h3>
        <p className="text-lg text-muted-foreground">{copy.success.text}</p>
      </div>
    );
  }

  const values: Partial<ContactValues> =
    state.status === "invalid" || state.status === "error" ? state.values : {};
  const invalid = state.status === "invalid" ? state.fields : [];

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <input type="hidden" name="locale" value={locale} />
      <div aria-hidden className="absolute -start-[9999px] size-0 overflow-hidden opacity-0">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field
        label={copy.name}
        htmlFor="contact-name"
        error={invalid.includes("name") ? copy.invalidName : undefined}
      >
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          defaultValue={values.name}
          aria-invalid={invalid.includes("name") || undefined}
          aria-describedby={invalid.includes("name") ? "contact-name-error" : undefined}
        />
      </Field>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label={copy.phone} hint={copy.optional} htmlFor="contact-phone">
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            defaultValue={values.phone}
            className="text-start"
          />
        </Field>
        <Field
          label={copy.email}
          htmlFor="contact-email"
          error={invalid.includes("email") ? copy.invalidEmail : undefined}
        >
          <Input
            id="contact-email"
            name="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            required
            defaultValue={values.email}
            className="text-start"
            aria-invalid={invalid.includes("email") || undefined}
            aria-describedby={invalid.includes("email") ? "contact-email-error" : undefined}
          />
        </Field>
      </div>

      <Field label={copy.message} hint={copy.optional} htmlFor="contact-message">
        <Textarea id="contact-message" name="message" defaultValue={values.message} />
      </Field>

      {state.status === "error" ? (
        <p role="alert" className="rounded-xl bg-danger/10 px-4 py-3 text-[0.9375rem] text-danger">
          {copy.error}
        </p>
      ) : null}

      <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="chip"
          disabled={pending}
          className="w-full justify-between sm:w-auto sm:min-w-44"
        >
          {pending ? copy.sending : copy.submit}
          <span className="grid size-10 place-items-center rounded-full bg-white text-navy">
            {pending ? (
              <Loader2Icon strokeWidth={1.75} className="animate-spin" />
            ) : (
              <ArrowRightIcon
                strokeWidth={1.75}
                className="transition-transform duration-500 ease-brand group-hover/button:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/button:-translate-x-0.5"
              />
            )}
          </span>
        </Button>

        <p className="max-w-[20rem] text-sm leading-relaxed text-muted-foreground">
          {copy.consent}{" "}
          <Link
            href={localizedPath(locale, routes.privacy)}
            className="underline underline-offset-4 hover:text-foreground"
          >
            {copy.privacy}
          </Link>
        </p>
      </div>
    </form>
  );
}
