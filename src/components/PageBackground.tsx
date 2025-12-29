"use client";

import { motion } from "framer-motion";

export default function PageBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      
      {/* Base color */}
      <div className="absolute inset-0 bg-[#0b0f14]" />

      {/* Soft ambient gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% 25%, rgba(99,102,241,0.22), transparent 60%)," +
            "radial-gradient(1000px 500px at 70% 55%, rgba(168,85,247,0.22), transparent 65%)",
        }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}