import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adriansyah | Programmer & UI/UX Designer",
  description: "Programmer dan UI/UX Designer yang berfokus pada pengembangan aplikasi web dan mobile yang efisien, terstruktur, dan user-friendly.",
  keywords: "Adriansyah, Web Developer, UI/UX Designer, Laravel, Next.js, Pekanbaru, Freelance",
  authors: [{ name: "Adriansyah" }],
  openGraph: {
    title: "Adriansyah | Programmer & UI/UX Designer",
    description: "Programmer dan UI/UX Designer berpengalaman dalam membangun sistem digital.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
