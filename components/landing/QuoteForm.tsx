"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "High-Pitch Roof Repair",
  "Metal Roof Installation",
  "Storm Damage / Leak",
  "Clogged Drain Clearing",
  "Water Heater Replacement",
  "Emergency Plumbing",
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
        className="rounded-md border-2 border-accent bg-accent-muted p-8 text-center animate-fade-up"
        role="status"
      >
        <p className="font-[family-name:var(--font-barlow)] text-xl font-black uppercase tracking-tight text-foreground">
          Request received
        </p>
        <p className="mt-2 text-sm text-muted">
          A licensed estimator will call you within one business hour during
          business days—or sooner for emergencies.
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
        <label htmlFor="name" className="mb-2 block text-sm font-semibold uppercase tracking-wide text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Homeowner"
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold uppercase tracking-wide text-foreground">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(555) 123-4567"
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div>
        <label
          htmlFor="project-type"
          className="mb-2 block text-sm font-semibold uppercase tracking-wide text-foreground"
        >
          Service Needed
        </label>
        <select
          id="project-type"
          name="projectType"
          required
          defaultValue=""
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        >
          <option value="" disabled>
            Select a service
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
        className="btn-physical-gold w-full rounded-md border border-accent/30 bg-accent py-4 text-sm font-black uppercase tracking-wider text-accent-foreground transition-all hover:translate-y-0.5 active:translate-y-1"
      >
        Request a Free Estimate
      </button>
    </form>
  );
}
