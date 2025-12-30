"use client";

import { motion } from "framer-motion";

export default function PricingTeaser() {
  return (
    <section id="pricing" className="py-20 md:py-32 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold">
        Pricing that grows with your
        <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          conviction
        </span>
      </h2>

      <p className="mt-6 max-w-xl mx-auto text-lg text-slate-400">
        Start free. Upgrade only when clarity demands it.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {/* Observer */}
        <div className="rounded-2xl border border-slate-800 bg-[#0e131b]/80 p-8 text-left">
          <h3 className="text-xl font-semibold">Observer</h3>
          <p className="mt-2 text-slate-400">Explore the market</p>

          <div className="mt-6 text-4xl font-bold">$0</div>

          <ul className="mt-8 space-y-3 text-slate-300">
            <li>✓ Market scanner</li>
            <li>✓ Basic metrics</li>
            <li>✓ Limited AI summaries</li>
            <li>✓ Basic watchlist</li>
          </ul>

          <button className="mt-10 w-full rounded-xl border border-slate-700 py-3 text-slate-300 hover:bg-white/5 transition">
            Start observing
          </button>
        </div>

        {/* Analyst (Featured) */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500 to-purple-600"
        >
          <div className="rounded-2xl bg-[#0b0f14] p-8 text-left h-full">
            <span className="inline-block mb-4 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
              Best value
            </span>

            <h3 className="text-xl font-semibold">Analyst</h3>
            <p className="mt-2 text-slate-400">Deeper understanding</p>

            <div className="mt-6 text-4xl font-bold">
              $5 <span className="text-base text-slate-400">/ month</span>
            </div>

            <ul className="mt-8 space-y-3 text-slate-200">
              <li>✓ Everything in Observer</li>
              <li>✓ More AI summaries</li>
              <li>✓ Advanced filters</li>
              <li>✓ Saved scans</li>
            </ul>

            <motion.button
              whileHover={{
                y: -2,
                boxShadow: "0 10px 30px rgba(99,102,241,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-3 font-medium text-white"
            >
              Upgrade to Analyst
            </motion.button>
          </div>
        </motion.div>

        {/* Operator */}
        <div className="rounded-2xl border border-purple-500/30 bg-[#0e131b]/80 p-8 text-left">
          <h3 className="text-xl font-semibold">Operator</h3>
          <p className="mt-2 text-slate-400">Serious market scanning</p>

          <div className="mt-6 text-4xl font-bold">
            $15 <span className="text-base text-slate-400">/ month</span>
          </div>

          <ul className="mt-8 space-y-3 text-slate-300">
            <li>✓ Everything in Analyst</li>
            <li>✓ Unlimited AI insights</li>
            <li>✓ Early features</li>
            <li>✓ Priority processing</li>
          </ul>

          <button className="mt-10 w-full rounded-xl border border-purple-500/40 py-3 text-purple-300 hover:bg-purple-500/10 transition">
            Become an Operator
          </button>
        </div>
      </div>

      <p className="mt-14 text-sm text-slate-500">
        No hype. No signals. Cancel anytime.
      </p>
    </section>
  );
}