const categories = [
  {
    label: "Frontend",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    tools: [
      { name: "Next.js",    level: "Primary" },
      { name: "React",      level: "Primary" },
      { name: "TypeScript", level: "Primary" },
      { name: "Tailwind CSS", level: "Primary" },
      { name: "Framer Motion", level: "Familiar" },
    ],
  },
  {
    label: "Backend",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    tools: [
      { name: "Node.js",    level: "Primary" },
      { name: "Firebase",   level: "Primary" },
      { name: "PostgreSQL", level: "Familiar" },
      { name: "Prisma",   level: "Familiar" },
      { name: "REST APIs",  level: "Primary" },
    ],
  },
  {
    label: "Tooling",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    tools: [
      { name: "Git & GitHub", level: "Primary" },
      { name: "Vercel",       level: "Primary" },
      { name: "VS Code",      level: "Primary" },
    
    ],
  },
];

const levelStyles: Record<string, string> = {
  Primary:  "text-[#E8652A] bg-[#1e0e04] border-[#C0460A44]",
  Familiar: "text-[#aaa]   bg-white/[0.04] border-white/10",
  Learning: "text-[#555]   bg-white/[0.02] border-white/[0.06]",
};

export default function Stack() {
  return (
    <section
      id="stack"
      className="bg-[#111111] px-6 sm:px-10 md:px-16 lg:px-24 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-medium text-[#C0460A] uppercase tracking-widest mb-3">
          04 — Stack
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Tools I work with.
          </h2>

          {/* Legend */}
          <div className="flex items-center gap-4">
            {Object.entries(levelStyles).map(([level, styles]) => (
              <div key={level} className="flex items-center gap-1.5">
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${styles}`}>
                  {level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="bg-[#161616] border border-white/[0.07] rounded-xl p-6 flex flex-col gap-5"
            >
              {/* Category header */}
              <div className="flex items-center gap-2">
                <span className="text-[#C0460A]">{cat.icon}</span>
                <span className="text-sm font-medium text-white">{cat.label}</span>
              </div>

              {/* Tools list */}
              <div className="flex flex-col gap-2.5">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-sm text-[#777]">{tool.name}</span>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded border flex-shrink-0 ${levelStyles[tool.level]}`}
                    >
                      {tool.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning bar */}
        <div className="mt-6 bg-[#161616] border border-white/[0.07] rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="text-xs font-medium text-[#C0460A] uppercase tracking-widest flex-shrink-0">
            Currently exploring
          </span>
          <div className="flex flex-wrap gap-2">
            {["Docker", "AWS", "tRPC"].map((item) => (
              <span
                key={item}
                className="text-xs text-[#555] bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}