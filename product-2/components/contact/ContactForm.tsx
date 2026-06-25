"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { inquiryTypes } from "@/lib/content/pages";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <div className="bg-white border border-[#CDEDE8] rounded-[18px] px-11 py-14 text-center">
        <div
          className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-[30px] mx-auto mb-5"
          style={{ background: "#E6F6F4", color: "#0E8C81" }}
          aria-hidden="true"
        >
          ✓
        </div>
        <h2 className="font-display font-semibold text-[26px] text-navy-700 mb-2.5">
          Thank you for contacting CyberPosture.
        </h2>
        <p
          className="text-[15.5px] mx-auto max-w-[440px]"
          style={{ color: "#5C7088" }}
        >
          We will review your request and follow up with the next best step.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full font-sans text-[14.5px] text-navy-700 border border-[#E4EAF3] rounded-[10px] px-[14px] py-3 focus:outline-none focus:border-teal-500 transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-surface-border rounded-[18px] p-9"
    >
      {/* Direct Contact */}
      <div className="mb-8 rounded-2xl border border-[#E4EAF3] bg-[#F8FAFC] p-5">
        <p className="text-[14px] text-[#5C7088]">
          Prefer email? Contact us directly at
          <a
            href="mailto:inquiry@cyberposture.ai"
            className="ml-1 font-medium text-[#0E7C72]"
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
      {/* Interest */}
      <div className="mb-7">
        <label className="block font-semibold text-[14px] text-navy-700 mb-[14px]">
          What are you interested in?
        </label>

        <Select
          value={form.interest}
          onValueChange={(value) =>
            setForm((f) => ({
              ...f,
              interest: value,
            }))
          }
        >
          <SelectTrigger className="h-[56px] w-full rounded-xl border border-[#E4EAF3] bg-white px-4 text-[14px] shadow-none focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select an inquiry type" />
          </SelectTrigger>

          <SelectContent className="rounded-xl border border-[#E4EAF3]">
            {inquiryTypes.map((type) => (
              <SelectItem key={type} value={type} className="cursor-pointer">
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
              style={{ color: "#4F6680" }}
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
            style={{ color: "#4F6680" }}
          >
            Selected interest
          </label>
          <input
            type="text"
            readOnly
            className="w-full font-sans text-[14.5px] font-semibold rounded-[10px] px-[14px] py-3 border focus:outline-none"
            style={{
              color: "#0E7C72",
              background: "#F3FBF9",
              borderColor: "#CDEDE8",
            }}
            value={form.interest}
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label
          className="block text-[13px] font-medium mb-1.5"
          style={{ color: "#4F6680" }}
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
        className="font-sans text-[15px] font-semibold text-white bg-navy-700 hover:bg-navy-800 disabled:opacity-60 rounded-[10px] px-7 py-[14px] transition-colors"
      >
        {status === "sending" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
