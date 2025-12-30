"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* soft gradient fade (no hard section line) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f14]/40 to-[#0b0f14]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        {/* CTA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Make{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            clearer market decisions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-[var(--text-secondary)]"
        >
          No hype. No signals. Cancel anytime.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8"
        >
          <motion.a
            href="/register"
            whileHover={{
              y: -2,
              boxShadow: "0 12px 40px rgba(99,102,241,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
          >
            Get started free
          </motion.a>
        </motion.div>

        {/* footer links */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-left text-sm">
          {/* brand */}
          <div>
            <div className="text-lg font-semibold">Scanly</div>
            <p className="mt-2 text-slate-400 max-w-xs">
              Smarter market scanning for independent thinkers.
            </p>
          </div>

          {/* product */}
          <div>
            <div className="font-medium mb-3">Product</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Market Scanner
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  AI Summaries
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* company */}
          <div>
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-16 text-xs text-slate-500">
          © 2025 Scanly — Built for clarity, not conviction.
        </div>
      </div>
    </footer>
  );
}