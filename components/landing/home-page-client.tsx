"use client";

import { QuoteForm } from "@/components/landing/QuoteForm";
import { SiteNav } from "@/components/landing/SiteNav";
import { useCompanyName } from "@/hooks/useCompanyName";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1632759141123-3656b788cf73?auto=format&fit=crop&w=1920&q=85";

const trustItems = [
  {
    title: "EMERGENCY 24/7 CALLS",
    description:
      "Live dispatch—not a voicemail tree. A licensed crew can be rolling to your property within the hour.",
    icon: PhoneIcon,
  },
  {
    title: "LICENSED & INSURED",
    description:
      "$2M general liability, workers' comp, and state licenses on file. We email certificates before we step on site.",
    icon: ShieldIcon,
  },
  {
    title: "A+ BBB RATING",
    description:
      "Accredited business with zero unresolved complaints in the last 36 months. Ask us for our latest score report.",
    icon: BbbIcon,
  },
];

const roofingServices = [
  {
    title: "HIGH-PITCH ROOF REPAIR",
    description:
      "Steep-slope specialists for slate, shake, and architectural shingle—tied off, photographed, warrantied.",
    icon: RoofIcon,
  },
  {
    title: "COMMERCIAL METAL ROOFING",
    description:
      "Standing-seam and concealed-fastener systems for warehouses, retail, and multi-family—flashed to spec.",
    icon: MetalIcon,
  },
  {
    title: "STORM & LEAK EMERGENCY",
    description:
      "Tarp-and-diagnose same day. Permanent repair scheduled before the next weather front moves in.",
    icon: StormIcon,
  },
];

const plumbingServices = [
  {
    title: "CLOGGED DRAIN CLEARING",
    description:
      "Hydro-jet and camera inspection—roots, grease, and main-line blockages cleared with upfront flat rates.",
    icon: PipeIcon,
  },
  {
    title: "WATER HEATER REPLACEMENT",
    description:
      "Tank and tankless installs with permit pull, haul-away, and manufacturer registration handled for you.",
    icon: HeaterIcon,
  },
  {
    title: "BURST PIPE & FLOOD RESPONSE",
    description:
      "Shut-off, extraction coordination, and code-correct repipe—available 24/7 across the tri-state.",
    icon: WrenchIcon,
  },
];

const steps = [
  {
    step: "01",
    title: "CALL OR REQUEST ONLINE",
    description:
      "Speak with a real estimator—not a call center overseas. We log your issue and dispatch the right trade.",
  },
  {
    step: "02",
    title: "ON-SITE ASSESSMENT & QUOTE",
    description:
      "We document damage with photos and video, explain options in plain language, and leave a written price on site.",
  },
  {
    step: "03",
    title: "LICENSED CREW. FINAL WALKTHROUGH.",
    description:
      "Uniformed technicians, pull permits when required, and clean the work area. You sign off before final invoice.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Fairfield County, CT",
    quote:
      "Water was pouring through our ridge vent at 2am. They tarped before sunrise and had the metal section replaced by Friday.",
    service: "Emergency Roofing",
  },
  {
    name: "David K.",
    location: "Westchester, NY",
    quote:
      "Upfront quote matched the invoice. Crew showed license and insurance cards at the door—exactly what I needed to feel safe.",
    service: "Metal Roof Install",
  },
  {
    name: "Elena R.",
    location: "Bergen County, NJ",
    quote:
      "Main line backed up on a Sunday. Plumber was here in 40 minutes, cleared it with a camera, and didn't push services we didn't need.",
    service: "Drain Clearing",
  },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 3v6c0 5-3.5 9-8 9s-8-4-8-9V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BbbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16v10H4V7z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M8 11h2v4H8v-4zm4 0h2a2 2 0 012 2v0a2 2 0 01-2 2h-2v-4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RoofIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 12l9-8 9 8M5 11v9h14v-9"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MetalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8h16M4 12h16M4 16h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StormIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 14l-2 4h9l-2-4M13 4l4 8H9l4-8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PipeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8h6v2H6v6H4V8zm10 0h6v6h-2v-4h-4V8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 10h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function HeaterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 9v6M12 8v8M15 10v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 4a5 5 0 00-5.2 7.6L4 16.4 7.6 20l5.8-4.8A5 5 0 1014 4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarRating({ className = "text-accent" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const btnGold =
  "btn-physical-gold inline-flex items-center justify-center rounded-md border border-accent/40 bg-accent px-8 py-5 text-sm font-black uppercase tracking-wider text-accent-foreground transition-all hover:translate-y-0.5 active:translate-y-1 sm:text-base";

const btnSky =
  "btn-physical-sky inline-flex items-center justify-center rounded-md border border-plumbing-sky/40 bg-plumbing-sky px-8 py-5 text-sm font-black uppercase tracking-wider text-slate-black transition-all hover:translate-y-0.5 active:translate-y-1 sm:text-base";

type HomePageClientProps = {
  initialCompanyName: string;
};

export function HomePageClient({ initialCompanyName }: HomePageClientProps) {
  const companyName = useCompanyName(initialCompanyName);

  return (
    <>
      <SiteNav companyName={companyName} />

      <main>
        {/* Hero */}
        <section
          className="relative min-h-[85vh] overflow-hidden border-b border-border"
          aria-labelledby="hero-heading"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
            role="img"
            aria-label="Commercial metal roofing installation on a large building"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-black via-slate-black/90 to-slate-black/55"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-black via-slate-black/40 to-charcoal/30"
            aria-hidden
          />

          <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-3xl">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-md border border-accent/40 bg-charcoal/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
                Licensed · Insured · A+ BBB
              </span>

              <h1
                id="hero-heading"
                className="animate-fade-up stagger-1 mt-6 font-[family-name:var(--font-barlow)] text-4xl font-black uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                <span className="text-accent">{companyName}</span>
                {" — "}Roof leaking?{" "}
                <span className="text-accent">Get the best in the tri-state.</span>
              </h1>

              <p className="animate-fade-up stagger-2 mt-6 max-w-xl text-lg font-medium leading-relaxed text-foreground/85 sm:text-xl">
                Commercial-grade metal roofing and emergency plumbing—same crews
                your property manager would call. No subcontractors. No surprise
                change orders.
              </p>

              <div className="animate-fade-up stagger-3 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch">
                <a href="#quote" className={btnGold}>
                  Request a Free Estimate
                </a>
                <a href="#plumbing" className={btnSky}>
                  Get Local Plumbing Service
                </a>
              </div>

              <p className="animate-fade-up stagger-4 mt-8 text-sm font-semibold uppercase tracking-widest text-muted">
                24/7 dispatch · Tri-State NY · NJ · CT
              </p>
            </div>
          </div>
        </section>

        {/* Local trust */}
        <section
          id="trust"
          className="scroll-mt-20 border-b border-border bg-charcoal py-14 sm:py-20"
          aria-labelledby="trust-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 id="trust-heading" className="sr-only">
              Why homeowners trust us
            </h2>
            <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
              {trustItems.map((item, index) => (
                <li
                  key={item.title}
                  className={[
                    "animate-fade-up flex flex-col items-center rounded-md border border-border bg-surface p-8 text-center md:items-start md:text-left",
                    ["stagger-1", "stagger-2", "stagger-3"][index],
                  ].join(" ")}
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-md border-2 border-accent bg-accent-muted text-accent">
                    <item.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-[family-name:var(--font-barlow)] text-xl font-black uppercase tracking-tight text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Core Trades
              </p>
              <h2
                id="services-heading"
                className="mt-3 font-[family-name:var(--font-barlow)] text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              >
                Roofing &amp; plumbing—done by the pros who show up.
              </h2>
            </div>

            <div className="mt-14">
              <h3 className="font-[family-name:var(--font-barlow)] text-lg font-black uppercase tracking-widest text-accent">
                Roofing · Slate &amp; Gold
              </h3>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {roofingServices.map((service, index) => (
                  <li
                    key={service.title}
                    className={[
                      "group animate-fade-up rounded-md border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/50 hover:bg-surface-elevated",
                      ["stagger-1", "stagger-2", "stagger-3"][index],
                    ].join(" ")}
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-md border-2 border-accent bg-accent-muted text-accent">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <h4 className="mt-6 font-[family-name:var(--font-barlow)] text-lg font-black uppercase tracking-tight text-foreground">
                      {service.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div id="plumbing" className="mt-16 scroll-mt-24">
              <h3 className="font-[family-name:var(--font-barlow)] text-lg font-black uppercase tracking-widest text-plumbing-sky">
                Plumbing · Sky &amp; White
              </h3>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {plumbingServices.map((service, index) => (
                  <li
                    key={service.title}
                    className={[
                      "group animate-fade-up rounded-md border border-plumbing-sky/30 bg-plumbing-white p-8 text-slate-black transition-all duration-300 hover:border-plumbing-sky hover:shadow-[0_12px_40px_-12px_rgba(14,165,233,0.35)]",
                      ["stagger-1", "stagger-2", "stagger-3"][index],
                    ].join(" ")}
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-md border-2 border-plumbing-sky bg-plumbing-sky-muted text-plumbing-sky-dark">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <h4 className="mt-6 font-[family-name:var(--font-barlow)] text-lg font-black uppercase tracking-tight">
                      {service.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="scroll-mt-20 border-b border-border bg-charcoal py-16 sm:py-24"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                How It Works
              </p>
              <h2
                id="process-heading"
                className="mt-3 font-[family-name:var(--font-barlow)] text-3xl font-black uppercase tracking-tight sm:text-4xl"
              >
                Three steps. Zero runaround.
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
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-md border-2 border-accent bg-slate-black font-[family-name:var(--font-barlow)] text-xl font-black text-accent">
                      {item.step}
                    </div>
                    <div className="lg:mt-8">
                      <h3 className="font-[family-name:var(--font-barlow)] text-lg font-black uppercase tracking-tight">
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
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                  Homeowner Reviews
                </p>
                <h2
                  id="reviews-heading"
                  className="mt-3 font-[family-name:var(--font-barlow)] text-3xl font-black uppercase tracking-tight sm:text-4xl"
                >
                  Trusted across the tri-state.
                </h2>
              </div>

              <div
                className="inline-flex items-center gap-3 rounded-md border-2 border-accent bg-charcoal px-5 py-3"
                aria-label="4.9 out of 5 stars, A+ BBB rated"
              >
                <StarRating />
                <div>
                  <p className="text-sm font-black uppercase leading-none text-foreground">
                    4.9 / 5.0
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
                    A+ BBB · 800+ jobs
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <li
                  key={item.name}
                  className={[
                    "animate-fade-up flex flex-col rounded-md border border-border bg-surface p-6 sm:p-8",
                    ["stagger-1", "stagger-2", "stagger-3"][index],
                  ].join(" ")}
                >
                  <StarRating />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6 border-t border-border pt-6">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted">
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
          className="scroll-mt-20 bg-charcoal py-16 sm:py-24"
          aria-labelledby="quote-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="animate-fade-up">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                  Get Started Now
                </p>
                <h2
                  id="quote-heading"
                  className="mt-3 font-[family-name:var(--font-barlow)] text-3xl font-black uppercase tracking-tight sm:text-4xl"
                >
                  Don&apos;t wait for the next storm—or the next drip.
                </h2>
                <p className="mt-4 max-w-md text-muted">
                  Submit your details. A licensed estimator calls back fast with
                  availability for your free on-site assessment.
                </p>
                <ul className="mt-8 space-y-3 text-sm font-medium text-muted">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-sm bg-accent" aria-hidden />
                    Emergency 24/7 dispatch for active leaks
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-sm bg-plumbing-sky" aria-hidden />
                    Written quotes before any work begins
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-sm bg-accent" aria-hidden />
                    Licensed, insured, A+ BBB accredited
                  </li>
                </ul>
                <a href="#quote" className={`${btnGold} mt-10`}>
                  Request a Free Estimate
                </a>
              </div>

              <div className="rounded-md border border-border bg-surface p-6 sm:p-8 lg:p-10">
                <h3 id="quote-form-heading" className="font-[family-name:var(--font-barlow)] text-lg font-black uppercase tracking-tight text-foreground">
                  Free on-site estimate
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Roofing or plumbing—we route you to the right licensed crew.
                </p>
                <div className="mt-6">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-slate-black py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="font-semibold uppercase tracking-wide">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <p className="font-medium uppercase tracking-wider">
            Licensed · Bonded · Insured · A+ BBB · NY · NJ · CT
          </p>
        </div>
      </footer>
    </>
  );
}

