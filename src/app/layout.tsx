import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "To-do List",
  description: "A simple to-do list app built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
