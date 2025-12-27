"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Gradient layer */}
      <motion.div
        className="absolute inset-[-20%] bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="absolute inset-0 noise pointer-events-none" />
    </div>
  );
}