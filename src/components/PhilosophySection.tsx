"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Brain, BarChart3 } from "lucide-react";

const items = [
  {
    title: "No signals",
    desc: "We never tell you what to buy or sell.",
    icon: ShieldCheck,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "No predictions",
    desc: "No crystal balls. Just real market data.",
    icon: BarChart3,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Built for DYOR",
    desc: "Tools that help you think, not follow.",
    icon: Brain,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-32 border-t border-[var(--border)]">
      {/* TAGLINE */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Clarity{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            before conviction
          </span>
        </h2>

        <p className="mt-4 text-[var(--text-secondary)]">
          Everything in Scanly is designed to help you understand the market —
          not follow it blindly.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover="hover"
              className="relative group"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity`}
              />

              {/* Card */}
              <motion.div
                variants={{
                  hover: { y: -6 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-center"
              >
                <motion.div
                  variants={{
                    hover: { rotate: -5, scale: 1.05 },
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10"
                >
                  <Icon className="w-6 h-6 text-white/80" />
                </motion.div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}