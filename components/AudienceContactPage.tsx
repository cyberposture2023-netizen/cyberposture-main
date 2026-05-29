"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

type AudienceContactConfig = {
  audience: "Business" | "Personal";
  eyebrow: string;
  title: string;
  copy: string;
  formTitle: string;
  successTitle: string;
  successCopy: string;
  emailLabel: string;
  emailPlaceholder: string;
  orgLabel: string;
  orgPlaceholder: string;
  intentLabel: string;
  intentOptions: string[];
  messagePlaceholder: string;
  submitLabel: string;
  sideTitle: string;
  sideCopy: string;
  highlights: Array<[string, string]>;
  phoneLabel?: string;
  phonePlaceholder?: string;
  phoneContacts?: Array<[string, string, string]>;
  alternateHref: string;
  alternateLabel: string;
};

export function AudienceContactPage({ config }: { config: AudienceContactConfig }) {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute right-[-220px] top-[-160px] h-[520px] w-[520px] rounded-full bg-tertiary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[8%] left-[-240px] h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />

      <SiteHeader />

      <main className="relative z-10 flex-grow px-6 pb-24 pt-32 md:px-8">
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              {config.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-on-surface md:text-7xl">
              {config.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-on-surface-variant md:text-lg">
              {config.copy}
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-outline-variant/25 bg-surface-container-low p-5 shadow-[0_22px_70px_rgba(0,0,0,0.25)] md:p-7"
            >
              <div className="flex items-center justify-between gap-4 border-b border-outline-variant/20 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                    {config.audience} contact
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-on-surface">
                    {config.formTitle}
                  </h2>
                </div>
                <span className="material-symbols-outlined rounded-lg border border-tertiary/25 bg-tertiary/10 p-3 text-2xl text-tertiary">
                  {config.audience === "Business" ? "corporate_fare" : "family_restroom"}
                </span>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="rounded-lg border border-tertiary/25 bg-tertiary/10 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-tertiary">
                          check_circle
                        </span>
                        <div>
                          <p className="font-semibold text-tertiary">
                            {config.successTitle}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                            {config.successCopy}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                      onSubmit={(event) => {
                        event.preventDefault();
                        setSent(true);
                      }}
                    >
                      <div className="grid gap-4 md:grid-cols-2">
                        <Field id="firstName" label="First Name" placeholder="Alex" />
                        <Field id="lastName" label="Last Name" placeholder="Morgan" />
                      </div>

                      <Field
                        id="email"
                        type="email"
                        label={config.emailLabel}
                        placeholder={config.emailPlaceholder}
                        required
                      />
                      <Field
                        id="organization"
                        label={config.orgLabel}
                        placeholder={config.orgPlaceholder}
                      />
                      {config.phoneLabel && config.phonePlaceholder && (
                        <Field
                          id="phone"
                          type="tel"
                          label={config.phoneLabel}
                          placeholder={config.phonePlaceholder}
                        />
                      )}

                      <div className="flex flex-col gap-2">
                        <label
                          className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant"
                          htmlFor="intent"
                        >
                          {config.intentLabel}
                        </label>
                        <div className="relative">
                          <select
                            id="intent"
                            className="ghost-input w-full appearance-none rounded-lg p-3"
                          >
                            {config.intentOptions.map((option) => (
                              <option key={option}>{option}</option>
                            ))}
                          </select>
                          <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                            expand_more
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder={config.messagePlaceholder}
                          className="ghost-input w-full resize-none rounded-lg p-3"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-gold inline-flex w-full justify-center rounded-lg px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] md:w-auto"
                      >
                        {config.submitLabel}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.aside variants={stagger} className="space-y-5">
              <motion.div
                variants={fadeUp}
                className="rounded-xl border border-outline-variant/25 bg-surface-container-low p-6"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-tertiary">
                  What happens next
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-on-surface">
                  {config.sideTitle}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {config.sideCopy}
                </p>
              </motion.div>

              <div className="grid gap-3">
                {config.phoneContacts?.map(([title, number, href]) => (
                  <motion.a
                    key={title}
                    variants={fadeUp}
                    href={href}
                    className="rounded-lg border border-tertiary/25 bg-tertiary/10 p-4 transition-colors hover:bg-tertiary/15"
                  >
                    <p className="text-sm font-semibold text-on-surface">{title}</p>
                    <p className="mt-2 text-lg font-semibold text-tertiary">
                      {number}
                    </p>
                  </motion.a>
                ))}
                {config.highlights.map(([title, copy]) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="rounded-lg border border-outline-variant/25 bg-background/45 p-4"
                  >
                    <p className="text-sm font-semibold text-on-surface">{title}</p>
                    <p className="mt-2 text-xs leading-6 text-on-surface-variant">
                      {copy}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                className="rounded-xl border border-tertiary/25 bg-tertiary/10 p-5"
              >
                <p className="text-sm leading-7 text-on-surface-variant">
                  Need the other contact path?
                </p>
                <Link
                  href={config.alternateHref}
                  className="mt-4 inline-flex rounded-lg border border-tertiary/35 px-5 py-3 text-sm font-bold text-tertiary transition-colors hover:bg-tertiary/10"
                >
                  {config.alternateLabel}
                </Link>
              </motion.div>
            </motion.aside>
          </div>
        </motion.section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="ghost-input w-full rounded-lg p-3"
      />
    </div>
  );
}
