"use client";

import { motion } from "framer-motion";
import HeroGlow from "./HeroGlow";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-28 text-center overflow-hidden">
      <HeroGlow />
      <HeroBackground />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold tracking-tight"
      >
        Smarter{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          market scanning
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-6 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]"
      >
        Scan crypto markets, understand momentum, and do your own research —
        without signals, hype, or predictions.
        <br />
        <br />
        Trusted by independent traders who don’t follow signals.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 flex justify-center gap-4"
      >
        <motion.a
          href="/register"
          whileHover={{
            y: -2,
            boxShadow: "0 10px 30px rgba(99,102,241,0.35)",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
        >
          Get started free
        </motion.a>

        <motion.a
          href="/login"
          whileHover={{
            y: -1,
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 backdrop-blur-md"
        >
          Login
        </motion.a>
      </motion.div>
    </section>
  );
}
