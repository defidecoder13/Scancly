"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white flex items-start justify-center">
      <div className="w-half max-w-md px-4 pt-32">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold">
            Create your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Scanly account
            </span>
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Start scanning markets and building conviction in minutes.
          </p>
          <br />
          <br />
        </div>

        {/* Register Card */}
        <div className="rounded-2xl border border-slate-800 bg-[#0e131b]/80 p-8">
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-[#0b0f14] border border-slate-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-[#0b0f14] border border-slate-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
            />

            {error && <p className="text-xs text-red-400">{error}</p>}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                y: -2,
                boxShadow: "0 12px 30px rgba(99,102,241,0.35)",
              }}
              whileTap={{ scale: 0.97, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`
    mt-4 w-full rounded-xl py-3 text-sm font-medium text-white
    bg-gradient-to-r from-blue-500 to-purple-500
    focus:outline-none
    disabled:opacity-60 disabled:cursor-not-allowed
  `}
            >
              {loading ? "Creating account..." : "create account"}
            </motion.button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
