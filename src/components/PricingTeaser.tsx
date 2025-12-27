export default function PricingTeaser() {
    return (
      <section className="py-28 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
            <h3 className="font-semibold text-lg">Free</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
              <li>✔ Market scanner</li>
              <li>✔ Basic metrics</li>
              <li>✔ Limited AI summaries</li>
            </ul>
          </div>
  
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/40">
            <h3 className="font-semibold text-lg">Premium</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
              <li>✔ Everything in Free</li>
              <li>✔ Unlimited AI summaries</li>
              <li>✔ Advanced filters</li>
              <li>✔ Early features</li>
            </ul>
  
            <a
              href="/register"
              className="inline-block mt-6 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
            >
              Upgrade when ready
            </a>
          </div>
        </div>
      </section>
    );
  }