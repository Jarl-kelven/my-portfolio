"use client";

import { useState } from "react";

const socials = [
  {
    label: "GitHub",
    href:  "https://github.com/Jarl-kelven",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href:  "https://www.linkedin.com/in/agholor-kelvin-0889481b3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href:  "https://x.com/Jarl_kelven",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

type FormState = { name: string; email: string; message: string };
type Status    = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm]     = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError]   = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const inputClass = `w-full bg-[#161616] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#333] focus:outline-none focus:border-white/25 transition-colors duration-150`;

  return (
    <section
      id="contact"
      className="bg-[#111111] px-6 sm:px-10 md:px-16 lg:px-24 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-medium text-[#C0460A] uppercase tracking-widest mb-3">
          05 — Contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — heading + socials */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug mb-4">
                Let&apos;s work<br />together.
              </h2>
              <p className="text-sm text-[#555] leading-relaxed max-w-sm">
                I&apos;m currently open to new opportunities — freelance, contract, or full-time.
                If you have a project in mind or just want to say hi, my inbox is always open.
              </p>
            </div>

            {/* Direct email */}
            <div className="flex flex-col gap-2">
              <p className="text-xs text-[#444] uppercase tracking-widest">Email me directly</p>
              <a
                href="mailto:aghkelvin@gmail.com"
                className="text-sm text-[#aaa] hover:text-[#E8652A] transition-colors duration-150 flex items-center gap-2 group"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#444] group-hover:text-[#C0460A] transition-colors">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                aghkelvin@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <p className="text-xs text-[#444] uppercase tracking-widest">Find me on</p>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                <a  
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] flex gap-2 p-3 font-medium text-[#555] bg-white/4 border border-white/[0.07] max-w-fit px-2.5 py-1 rounded-md"
                  >
                    <span className="text-[#333] group-hover:text-[#C0460A] transition-colors">
                      {s.icon}
                    </span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              <div className="bg-[#161616] border border-white/[0.07] rounded-xl p-8 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Message sent!</p>
                  <p className="text-sm text-[#555]">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs text-[#555] hover:text-[#aaa] transition-colors mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#444] uppercase tracking-widest">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#444] uppercase tracking-widest">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#444] uppercase tracking-widest">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    required
                    rows={6}
                    className={`${inputClass} resize-none leading-relaxed`}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="text-sm font-medium text-white bg-[#C0460A] hover:bg-[#E8652A] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 px-6 py-3 rounded-lg transition-all duration-150 w-full sm:w-auto"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}