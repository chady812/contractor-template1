import { QuoteForm } from "@/components/landing/QuoteForm";
import { SiteNav } from "@/components/landing/SiteNav";

const services = [
  {
    title: "Roofing & Exterior",
    description:
      "Storm-ready repairs, full replacements, and curb-appeal upgrades—done right the first time.",
    icon: "01",
  },
  {
    title: "HVAC & Climate",
    description:
      "Same-week installs, seasonal tune-ups, and 24/7 emergency response when comfort can't wait.",
    icon: "02",
  },
  {
    title: "Plumbing & Water",
    description:
      "Leak detection, repipes, and water heater swaps with transparent pricing before we start.",
    icon: "03",
  },
];

const steps = [
  {
    step: "01",
    title: "Book Your Free Inspection",
    description:
      "Tell us what's going on. We confirm your window and show up on time—no vague arrival windows.",
  },
  {
    step: "02",
    title: "Get a Clear, Fixed Quote",
    description:
      "We walk the job with you, explain options in plain English, and deliver a written price before work begins.",
  },
  {
    step: "03",
    title: "We Execute. You Approve.",
    description:
      "Licensed crews, daily updates, and a final walkthrough. Pay when you're satisfied—not a day sooner.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Northside",
    quote:
      "They quoted Tuesday morning and finished by Thursday. Crew was professional, yard was cleaner than when they arrived.",
    service: "Roof Replacement",
  },
  {
    name: "David K.",
    location: "Westbrook",
    quote:
      "No upsells, no surprises. The inspection video alone sold me—they showed exactly what was wrong and why.",
    service: "HVAC Repair",
  },
  {
    name: "Elena R.",
    location: "Maple Grove",
    quote:
      "Called at 9pm with a burst pipe. Someone was here in 45 minutes. Lifesavers—and the invoice matched the estimate.",
    service: "Emergency Plumbing",
  },
];

const partnerLogos = ["HOMEBASE", "CRAFTCO", "TRUSTLY", "LOCAL+", "BUILDR"];

function StarRating() {
  return (
    <div className="flex gap-0.5 text-accent" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden border-b border-border"
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--color-accent-muted),transparent)]"
            aria-hidden
          />
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground">
                ⚡ Failsafe Guarantee
              </span>

              <h1
                id="hero-heading"
                className="animate-fade-up stagger-1 mt-6 font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Your home fixed{" "}
                <span className="text-accent">fast</span>—without the runaround.
              </h1>

              <p className="animate-fade-up stagger-2 mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                Licensed local crews. Same-week scheduling. On-time arrivals and
                clear pricing—because reliability shouldn&apos;t be a premium add-on.
              </p>

              <div className="animate-fade-up stagger-3 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Free Inspection
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center rounded-full border-2 border-foreground px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section
          className="border-b border-border bg-surface"
          aria-label="Social proof"
        >
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="animate-fade-up text-center text-sm font-semibold uppercase tracking-widest text-muted">
              Trusted by 500+ Local Homeowners
            </p>
            <ul className="animate-fade-up stagger-1 mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {partnerLogos.map((logo) => (
                <li
                  key={logo}
                  className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-widest text-foreground/30 sm:text-base"
                >
                  {logo}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-20 border-b border-border py-16 sm:py-24"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Core Services
              </p>
              <h2
                id="services-heading"
                className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-extrabold tracking-tight sm:text-4xl"
              >
                Everything your home needs—under one trusted roof.
              </h2>
              <p className="mt-4 text-muted">
                Swap service titles and copy for your client&apos;s specialties.
                Each card links to your booking flow or service detail pages.
              </p>
            </div>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <li
                  key={service.title}
                  className={[
                    "group animate-fade-up rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-elevated hover:shadow-[0_20px_50px_-12px_rgba(200,255,0,0.08)]",
                    ["stagger-1", "stagger-2", "stagger-3"][index],
                  ].join(" ")}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-accent bg-accent-muted font-[family-name:var(--font-syne)] text-sm font-bold text-accent">
                    {service.icon}
                  </span>
                  <h3 className="mt-6 font-[family-name:var(--font-syne)] text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="scroll-mt-20 border-b border-border bg-surface py-16 sm:py-24"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                How It Works
              </p>
              <h2
                id="process-heading"
                className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-extrabold tracking-tight sm:text-4xl"
              >
                Three steps. Zero guesswork.
              </h2>
            </div>

            <ol className="relative mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
              <div
                className="absolute left-8 top-0 hidden h-full w-px bg-border lg:left-[calc(16.67%-1px)] lg:block"
                aria-hidden
              />
              {steps.map((item, index) => (
                <li
                  key={item.step}
                  className={[
                    "relative animate-fade-up",
                    ["stagger-2", "stagger-3", "stagger-4"][index],
                  ].join(" ")}
                >
                  <div className="flex gap-6 lg:flex-col lg:gap-0">
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-accent bg-background font-[family-name:var(--font-syne)] text-xl font-extrabold text-accent">
                      {item.step}
                    </div>
                    <div className="lg:mt-8">
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className="mt-8 h-px w-full bg-border lg:hidden"
                      aria-hidden
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="reviews"
          className="scroll-mt-20 border-b border-border py-16 sm:py-24"
          aria-labelledby="reviews-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Testimonials
                </p>
                <h2
                  id="reviews-heading"
                  className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-extrabold tracking-tight sm:text-4xl"
                >
                  Neighbors who chose speed—and stayed for quality.
                </h2>
              </div>

              <div
                className="inline-flex items-center gap-3 rounded-2xl border-2 border-foreground bg-foreground px-5 py-3 text-background"
                aria-label="4.9 out of 5 stars from 500+ reviews"
              >
                <StarRating />
                <div>
                  <p className="text-sm font-bold leading-none">4.9 / 5.0</p>
                  <p className="mt-1 text-xs text-background/70">500+ verified reviews</p>
                </div>
              </div>
            </div>

            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <li
                  key={item.name}
                  className={[
                    "animate-fade-up flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8",
                    ["stagger-1", "stagger-2", "stagger-3"][index],
                  ].join(" ")}
                >
                  <StarRating />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6 border-t border-border pt-6">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-muted">
                      {item.location} · {item.service}
                    </p>
                  </footer>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="quote"
          className="scroll-mt-20 py-16 sm:py-24"
          aria-labelledby="quote-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="animate-fade-up">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Get Started
                </p>
                <h2
                  id="quote-heading"
                  className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-extrabold tracking-tight sm:text-4xl"
                >
                  Ready for a quote that actually means something?
                </h2>
                <p className="mt-4 max-w-md text-muted">
                  Leave your details below. We&apos;ll call within one business day
                  with availability for your free inspection—no pressure, no spam.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-muted">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    Licensed &amp; insured in your service area
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    Written estimates before any work starts
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    Failsafe Guarantee on every completed job
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10">
                <h3 id="quote-form-heading" className="sr-only">
                  Request a quote
                </h3>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} Contractor CC. All rights reserved.
          </p>
          <p>Licensed · Bonded · Insured · [Your City, ST]</p>
        </div>
      </footer>
    </>
  );
}
