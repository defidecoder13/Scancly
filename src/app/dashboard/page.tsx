"use client";

import { useAuth } from "../../context/AuthContext";
import { logout } from "../../lib/logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  // Redirect if unauthenticated (NO UI FLASH)
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  // Block render until auth is resolved
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Checking session…
      </div>
    );
  }

  // IMPORTANT: never render "Not authenticated"
  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      {/* Top bar */}
      <header className="h-16 px-6 flex items-center justify-between border-b border-slate-800">
        <div className="font-semibold">Scanly Dashboard</div>

        <button
          onClick={() => logout(router)}
          className="text-sm text-red-400 hover:text-red-300 transition"
        >
          Logout
        </button>
      </header>

      {/* Content */}
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Welcome 👋</h1>
        <p className="mt-2 text-slate-400">
          Logged in as{" "}
          <span className="text-white font-medium">{user.email}</span>
        </p>

        <div className="mt-6 rounded-xl border border-slate-800 p-4 bg-[#0f141b]">
          <p className="text-sm text-slate-300">
            This is a demo dashboard. Its only purpose is to verify auth state
            and logout behavior.
          </p>
        </div>
      </main>
    </div>
  );
}