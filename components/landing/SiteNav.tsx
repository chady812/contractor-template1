"use client";

import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#trust", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
];

const ctaClass =
  "btn-physical-gold hidden rounded-md border border-accent/30 bg-accent px-5 py-3 text-xs font-black uppercase tracking-wider text-accent-foreground transition-all hover:translate-y-0.5 active:translate-y-1 sm:inline-flex sm:items-center sm:justify-center";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-slate-black/95 backdrop-blur-md animate-fade-in">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="font-[family-name:var(--font-barlow)] text-lg font-black uppercase tracking-tight text-foreground sm:text-xl"
        >
          Tri-State <span className="text-accent">Pro</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#quote" className={ctaClass}>
            Request a Free Estimate
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-charcoal text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-border bg-charcoal md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#quote"
              className="btn-physical-gold mt-2 block rounded-md bg-accent px-5 py-4 text-center text-xs font-black uppercase tracking-wider text-accent-foreground"
              onClick={() => setOpen(false)}
            >
              Request a Free Estimate
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
