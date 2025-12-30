"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Market Scanner",
    desc: "Spot movers, volume spikes, and momentum shifts instantly.",
    featured: true,
  },
  {
    title: "AI Market Summary",
    desc: "Plain-English explanations of what’s happening in the market.",
  },
  {
    title: "Watchlists",
    desc: "Track only what matters. Ignore the noise.",
  },
  {
    title: "Premium Insights",
    desc: "Advanced filters and deeper analysis for serious operators.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Built for
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            thinking traders
          </span>
        </h2>
        <p className="mt-6 text-lg text-slate-400">
          Every feature exists to reduce noise and increase conviction.
        </p>
      </div>

      {/* Feature grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <motion.div
          
            key={i}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`relative rounded-2xl p-[1px] ${
              f.featured
                ? "bg-gradient-to-br from-blue-500/80 to-purple-600/80"
                : "bg-white/5"
            }`}
          >
            <div
              className={`rounded-2xl h-full p-8 ${
                f.featured
                  ? "bg-[#0b0f14]"
                  : "bg-[#0e131b]/80"
              }`}
            >
              {/* Accent bar */}
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mb-6" />

              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-slate-400">{f.desc}</p>

              {f.featured && (
                <span className="absolute top-6 right-6 text-xs rounded-full bg-blue-500/10 px-3 py-1 text-blue-400">
                  Core feature
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}