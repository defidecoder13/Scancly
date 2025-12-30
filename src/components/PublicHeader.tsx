"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PublicHeader() {
  return (
    
    <header className="z-50 bg-[#0b0f14]/80 backdrop-blur py-1">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/Scanly svg.svg"
            alt="Scanly logo"
            width={200}
            height={50}
            priority
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          
          {/* Login */}
          <motion.div
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
            className="group"
          >
            <Link
              href="/login"
              className="relative text-slate-400 hover:text-white transition-colors"
            >
              Login
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full" />
            </Link>
          </motion.div>

          {/* Primary CTA */}
          <motion.a
            href="/register"
            whileHover={{
              y: -2,
              boxShadow: "0 10px 30px rgba(99,102,241,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
          >
            Register
          </motion.a>

        </nav>
      </div>
    </header>
  );
}