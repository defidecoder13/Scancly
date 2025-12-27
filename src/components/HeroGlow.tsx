"use client";

import { motion } from "framer-motion";

export default function HeroGlow() {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[120px]" />
    </motion.div>
  );
}