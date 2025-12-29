"use client";

import { motion } from "framer-motion";

export default function FreeVsPremium() {
  return (
    <section className="py-40">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold">
          What you get for free —
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            and why people upgrade
          </span>
        </h2>
        <p className="mt-6 text-lg text-slate-400">
          Start without friction. Upgrade only when clarity demands more.
        </p>
      </div>

      {/* Comparison cards */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Free */}
        <div className="rounded-2xl border border-slate-800 bg-[#0e131b]/80 p-8">
          <h3 className="text-xl font-semibold">Observer (Free)</h3>
          <p className="mt-2 text-slate-400">
            Everything you need to explore the market
          </p>

          <ul className="mt-8 space-y-4 text-slate-300">
            <li>✓ Market scanner access</li>
            <li>✓ Core metrics & momentum</li>
            <li>✓ Limited AI market summaries</li>
            <li>✓ Basic watchlists</li>
          </ul>

          <p className="mt-8 text-sm text-slate-500">
            Perfect for learning how Scanly works and understanding market structure.
          </p>
        </div>

        {/* Premium */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500 to-purple-600"
        >
          <div className="rounded-2xl bg-[#0b0f14] p-8 h-full">
            <h3 className="text-xl font-semibold">Why users upgrade</h3>
            <p className="mt-2 text-slate-400">
              When clarity becomes a requirement
            </p>

            <ul className="mt-8 space-y-4 text-slate-200">
              <li>✓ More & deeper AI explanations</li>
              <li>✓ Advanced filters to remove noise</li>
              <li>✓ Saved scans & watchlists</li>
              <li>✓ Faster insight into market shifts</li>
              <li>✓ Access to premium scanners</li>
            </ul>

            <p className="mt-8 text-sm text-slate-400">
              Most users upgrade once they start relying on Scanly for daily decisions.
            </p>

            <motion.a
              href="/pricing"
              whileHover={{
                y: -2,
                boxShadow: "0 10px 30px rgba(99,102,241,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 inline-block w-full text-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-3 font-medium text-white"
            >
              See pricing
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}