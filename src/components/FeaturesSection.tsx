const features = [
    {
      title: "Market Scanner",
      desc: "Spot movers, volume spikes, and momentum shifts instantly.",
    },
    {
      title: "AI Market Summary",
      desc: "Plain-English explanations of what’s happening in the market.",
    },
    {
      title: "Watchlists",
      desc: "Track only what matters. Ignore the noise.",
    },
    {
      title: "Premium Insights",
      desc: "Advanced filters and deeper analysis for serious traders.",
    },
  ];
  
  export default function FeaturesSection() {
    return (
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-slate-700 transition"
            >
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }