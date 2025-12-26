import "./globals.css";

export const metadata = {
  title: "Scanly — Smarter market scanning",
  description: "Scanly helps you scan crypto markets and understand momentum without noise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}