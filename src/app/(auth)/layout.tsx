export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className="bg-[#0b0f14]">
          {children}
        </body>
      </html>
    );
  }