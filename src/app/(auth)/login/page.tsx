"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { supabase } from "../../../lib/supabase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const { data } = await supabase.auth.getSession();
    console.log("SESSION AFTER LOGIN:", data.session);

    setLoading(false);

    if (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log("SESSION:", data.session);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-half max-w-lg"
      >
        <div className="rounded-2xl bg-[#0f141b] border border-white/10 p-8">
          <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
          <p className="mt-1 text-sm text-slate-400">
            Log in to continue scanning markets.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl bg-[#0b0f14] border border-white/10 px-4 py-3 text-sm text-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl bg-[#0b0f14] border border-white/10 px-4 py-3 text-sm text-white"
            />

            {error && <p className="text-sm text-red-400">{error}</p>}

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-3 text-sm font-medium text-white disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-400 hover:underline">
              Create one
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
