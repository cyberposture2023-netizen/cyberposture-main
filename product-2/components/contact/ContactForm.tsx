"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { inquiryTypes } from "@/lib/content/pages";

interface FormState {
  name: string;
  email: string;
  company: string;
  role: string;
  size: string;
  interest: string;
  message: string;
  honeypot: string; // hidden field for spam filtering
}

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  size: "",
  interest: "",
  message: "",
  honeypot: "",
};

export default function ContactForm() {
  const params = useSearchParams();
  const [form, setForm] = useState<FormState>({
    ...INITIAL,
    interest: params.get("i") ?? "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  useEffect(() => {
    const i = params.get("i");
    if (i) setForm((f) => ({ ...f, interest: decodeURIComponent(i) }));
  }, [params]);

  function field(key: keyof FormState) {
    return {
      value: form[key],
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => setForm((f) => ({ ...f, [key]: e.target.value })),
    };
  }

  const [isOpen, setIsOpen] = useState(false);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.honeypot) return; // silent drop
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-card border border-surface-border2 rounded-[18px] px-11 py-14 text-center">
        <div
          className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-[30px] mx-auto mb-5"
          style={{ background: "rgba(0, 184, 217, 0.14)", color: "#039fc0" }}
          aria-hidden="true"
        >
          ✓
        </div>
        <h2 className="font-display font-semibold text-[26px] text-navy-700 mb-2.5">
          Thank you for contacting CyberPosture.
        </h2>
        <p
          className="text-[15.5px] mx-auto max-w-[440px]"
          style={{ color: "#7a90b0" }}
        >
          We will review your request and follow up with the next best step.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full font-sans text-[14.5px] text-navy-700 border border-surface-border2 rounded-[10px] px-[14px] py-3 focus:outline-none focus:border-teal-500 transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-card border border-surface-border rounded-[18px] p-9"
    >
      <div
        className="mb-8 rounded-lg border-[1.5px] p-5"
        style={{
          background: "#102040",
          borderColor: "rgba(0, 184, 217, 0.18)",
        }}
      >
        <p className="text-[13px] font-medium" style={{ color: "#7a90b0" }}>
          Prefer email? Contact us directly at
          <a
            href="mailto:inquiry@cyberposture.ai"
            className="ml-1 transition-all hover:opacity-80 hover:underline underline-offset-4"
            style={{ color: "#00b8d9" }}
          >
            inquiry@cyberposture.ai
          </a>
        </p>
      </div>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="sr-only"
        {...field("honeypot")}
      />

      <div className="mb-7">
        <div className="font-semibold text-[14px] text-navy-700 mb-[14px]">
          What are you interested in?
        </div>

        {/* Dropdown Container */}
        <div className="relative w-full sm:w-72">
          {/* Dropdown Trigger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between text-[13px] font-medium rounded-lg px-4 py-[9px] border-[1.5px] transition-colors cursor-pointer text-left"
            style={{
              borderColor:
                isOpen || form.interest ? "#00b8d9" : "rgba(0, 184, 217, 0.18)",
              background: isOpen ? "rgba(0, 184, 217, 0.05)" : "#102040",
              color: form.interest ? "#00b8d9" : "#7a90b0",
            }}
          >
            {form.interest || "Select an option..."}

            {/* Dropdown Arrow Icon */}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu Options */}
          {isOpen && (
            <div
              className="absolute z-10 w-full mt-2 rounded-lg border-[1.5px] shadow-xl overflow-hidden"
              style={{
                borderColor: "rgba(0, 184, 217, 0.18)",
                background: "#102040",
              }}
            >
              {inquiryTypes.map((t) => {
                const active = form.interest === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setForm((f) => ({ ...f, interest: t }));
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-4 py-[9px] text-[13px] font-medium transition-colors cursor-pointer"
                    style={{
                      background: active
                        ? "rgba(0, 184, 217, 0.14)"
                        : "transparent",
                      color: active ? "#00b8d9" : "#7a90b0",
                    }}
                    // Simulating hover state via inline styles to keep CSS centralized with your variables
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background =
                          "rgba(0, 184, 217, 0.08)";
                        e.currentTarget.style.color = "#00b8d9";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#7a90b0";
                      }
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Fields grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {(
          [
            { key: "name" as const, label: "Name", placeholder: "Your name" },
            {
              key: "email" as const,
              label: "Work email",
              placeholder: "you@company.com",
              type: "email",
            },
            {
              key: "company" as const,
              label: "Company",
              placeholder: "Company name",
            },
            { key: "role" as const, label: "Role", placeholder: "Your role" },
            {
              key: "size" as const,
              label: "Company size",
              placeholder: "e.g. 200–1,000",
            },
          ] as const
        ).map(({ key, label, placeholder, ...rest }) => (
          <div key={key}>
            <label
              className="block text-[13px] font-medium mb-1.5"
              style={{ color: "#8fa2bd" }}
            >
              {label}
            </label>
            <input
              type={"type" in rest ? (rest as { type: string }).type : "text"}
              placeholder={placeholder}
              required={key === "email" || key === "name"}
              className={inputCls}
              {...field(key)}
            />
          </div>
        ))}

        {/* Selected interest (read-only display) */}
        <div>
          <label
            className="block text-[13px] font-medium mb-1.5"
            style={{ color: "#8fa2bd" }}
          >
            Selected interest
          </label>
          <input
            type="text"
            readOnly
            className="w-full font-sans text-[14.5px] font-semibold rounded-[10px] px-[14px] py-3 border focus:outline-none"
            style={{
              color: "#00b8d9",
              background: "#102040",
              borderColor: "rgba(0, 184, 217, 0.22)",
            }}
            value={form.interest}
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label
          className="block text-[13px] font-medium mb-1.5"
          style={{ color: "#8fa2bd" }}
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Tell us a bit more…"
          className={inputCls + " resize-y"}
          {...field("message")}
        />
      </div>

      {status === "error" && (
        <p className="text-[13.5px] text-risk-critical mb-4">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-sans text-[15px] font-medium rounded-lg px-7 py-[14px] transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 border-[1.5px]"
        style={{
          background: "rgba(0, 184, 217, 0.14)",
          borderColor: "#00b8d9",
          color: "#00b8d9",
        }}
      >
        {status === "sending" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
