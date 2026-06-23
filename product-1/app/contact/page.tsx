"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function ContactPage() {
  const [audience, setAudience] = useState<"b2c" | "b2b" | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Contact Us
            </p>

            <h1 className="mt-4 font-display text-5xl text-on-surface md:text-7xl">
              How Can We Help You Today?
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
              Choose the option that best matches your needs and we'll route
              your request to the right team.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <button
              onClick={() => setAudience("b2c")}
              className="rounded-3xl border border-tertiary/25 bg-tertiary/10 p-8 text-left transition-all hover:-translate-y-1"
              type="button"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-on-surface">
                Individual Customer
              </h2>

              <ul className="mt-6 space-y-3 text-on-surface-variant">
                <li>• HVI Assessment Questions</li>
                <li>• Account Assistance</li>
                <li>• General Inquiries</li>
                <li>• General Inquiries</li>
                <li>• Support Requests</li>
              </ul>
            </button>

            <button
              onClick={() => setAudience("b2b")}
              className="rounded-3xl border border-primary/25 bg-primary-container/10 p-8 text-left transition-all hover:-translate-y-1"
              type="button"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Business / Organization
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-on-surface">
                Enterprise Inquiry
              </h2>

              <ul className="mt-6 space-y-3 text-on-surface-variant">
                <li>• Enterprise HVI</li>
                <li>• Demo Requests</li>
                <li>• Pricing</li>
                <li>• Partnerships</li>
              </ul>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {audience === "b2c" && (
              <motion.div
                key="b2c"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 rounded-3xl border border-outline-variant/20 p-8"
                exit={{ opacity: 0, y: 20 }}
              >
                <h3 className="text-3xl font-semibold">Contact</h3>
                <p className="mt-4 text-lg leading-8 text-on-surface-variant">
                  Questions about your Human Vulnerability Index (HVI)
                  assessment?
                </p>

                <form className="mt-8 grid gap-5">
                  <input className="ghost-input p-4" placeholder="Full Name" />
                  <input
                    className="ghost-input p-4"
                    placeholder="Email Address"
                  />
                  <input
                    className="ghost-input p-4"
                    placeholder="Phone Number"
                  />
                  <input className="ghost-input p-4" placeholder="Country" />
                  <input className="ghost-input p-4" placeholder="City" />
                  <textarea
                    rows={6}
                    className="ghost-input resize-none p-4"
                    placeholder="How can we help?"
                  />

                  <button className="btn-gold rounded-xl px-8 py-4">
                    Submit
                  </button>
                </form>
              </motion.div>
            )}

            {audience === "b2b" && (
              <motion.div
                key="b2b"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 rounded-3xl border border-outline-variant/20 p-8"
                exit={{ opacity: 0, y: 20 }}
              >
                <h3 className="text-3xl font-semibold">
                  Enterprise Consultation
                </h3>

                <form className="mt-8 grid gap-5">
                  <input className="ghost-input p-4" placeholder="Full Name" />
                  <input
                    className="ghost-input p-4"
                    placeholder="Corporate Email"
                  />
                  <input
                    className="ghost-input p-4"
                    placeholder="Company Name"
                  />
                  <input
                    className="ghost-input p-4"
                    placeholder="Contact Number"
                  />
                  <select className="ghost-input p-4">
                    <option>Employee Count</option>
                    <option>1–50</option>
                    <option>51–200</option>
                    <option>201–500</option>
                    <option>501–1000</option>
                    <option>1000+</option>
                  </select>

                  <textarea
                    rows={6}
                    className="ghost-input resize-none p-4"
                    placeholder="Tell us about your challenge"
                  />

                  <button className="btn-gold rounded-xl px-8 py-4">
                    Submit
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
