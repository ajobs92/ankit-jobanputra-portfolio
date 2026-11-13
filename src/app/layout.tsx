import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ankit Jobanputra — Forward Deployed Product Manager",
    template: "%s — Ankit Jobanputra"
  },
  description: "Product strategy, AI-enabled workflows and technical delivery. Portfolio of Ankit Jobanputra.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ankit Jobanputra — Forward Deployed Product Manager",
    description: "I turn complex business problems into intelligent products.",
    type: "website",
    url: siteUrl
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
