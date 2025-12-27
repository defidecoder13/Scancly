"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0f14]/80 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


        <div className="text-xl font-semibold tracking-tight">Scanly</div>

        <nav className="flex items-center gap-6 text-sm">
          <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
            <Link
              href="/login"
              className="relative text-sm text-slate-400 hover:text-white transition-colors"
            >
              Login
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full" />
            </Link>
          </motion.div>
          <Link
            href="/register"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
          >
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}



