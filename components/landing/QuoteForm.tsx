"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Roofing & Exterior",
  "HVAC & Climate",
  "Plumbing & Water",
  "Electrical",
  "General Repair",
  "Other / Not Sure",
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border-2 border-accent bg-accent-muted p-8 text-center animate-fade-up"
        role="status"
      >
        <p className="font-[family-name:var(--font-syne)] text-xl font-bold text-foreground">
          Request received
        </p>
        <p className="mt-2 text-sm text-muted">
          A team member will call you within one business day. Swap this
          message for your CRM or webhook integration.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 animate-fade-up stagger-2"
      aria-labelledby="quote-form-heading"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Homeowner"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(555) 123-4567"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div>
        <label
          htmlFor="project-type"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Project Type
        </label>
        <select
          id="project-type"
          name="projectType"
          required
          defaultValue=""
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        >
          <option value="" disabled>
            Select a service area
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-accent py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        Request Free Quote
      </button>
    </form>
  );
}
