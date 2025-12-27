export default function FinalCTA() {
    return (
      <section className="py-32 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <h2 className="text-3xl font-semibold">
          Start scanning smarter
        </h2>
  
        <p className="mt-4 text-[var(--text-secondary)]">
          Create your free Scanly account in seconds.
        </p>
  
        <a
          href="/register"
          className="inline-block mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
        >
          Get started free
        </a>
      </section>
    );
  }