"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: "3+", label: "Years experience" },
  { num: "20+", label: "Projects shipped" },
  { num: "10+", label: "Happy clients" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-[#111111] flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-15"
    >
      <div className="max-w-4xl w-full py-20 sm:py-24 lg:py-12 lg:mx-5.5 ">

        {/* Availability badge */}
        <div
          className={`inline-flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-full px-3.5 py-1.5 mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 shrink-0 animate-pulse" />
          <span className="text-xs text-[#888] font-sans tracking-wide">
            Available for new opportunities
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-sans font-semibold text-white leading-[1.08] tracking-[-0.03em] mb-6 transition-all duration-700 delay-100 text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Software engineer
          <br />
          who builds{" "}
          <span className="text-[#C0460A]">fast,</span>
          <br />
          ships faster.
        </h1>

        {/* Subheading */}
        <p
          className={`font-sans text-[#777] leading-relaxed max-w-lg mb-10 transition-all duration-700 delay-200 text-base sm:text-lg ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          I design and build{" "}
          <span className="text-[#aaa]">scalable web applications</span> — from
          polished frontends to robust backends. Based in Lagos, open to remote.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap items-center gap-3 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/projects"
            className="text-sm font-medium text-white bg-[#C0460A] hover:bg-[#E8652A] active:scale-95 px-6 py-3 rounded-lg transition-all duration-150"
          >
            View my work
          </Link>
          <a
            href="/cv.pdf"
            download
            className="text-sm font-medium text-[#aaa] hover:text-white border border-white/15 hover:border-white/30 active:scale-95 px-6 py-3 rounded-lg transition-all duration-150"
          >
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div
          className={`flex flex-wrap items-center gap-6 sm:gap-8 mt-16 pt-8 border-t border-white/[0.07] transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
              <div className="flex flex-col gap-0.5">
                <span className="text-xl sm:text-2xl font-semibold text-white tracking-tight font-sans">
                  {stat.num}
                </span>
                <span className="text-xs text-[#555] font-sans">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}