export default function Footer() {
    return (
      <footer className="border-t border-[var(--border)] py-10 text-center text-sm text-[var(--text-muted)]">
        © {new Date().getFullYear()} Scanly · Smarter market scanning
      </footer>
    );
  }