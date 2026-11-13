import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ankitjobanputra.com"),
  title: {
    default: "Ankit Jobanputra — Forward Deployed Product Manager",
    template: "%s — Ankit Jobanputra"
  },
  description: "Product strategy, AI-enabled workflows and technical delivery. Portfolio of Ankit Jobanputra.",
  openGraph: {
    title: "Ankit Jobanputra — Forward Deployed Product Manager",
    description: "I turn complex business problems into intelligent products.",
    type: "website",
    url: "https://ankitjobanputra.com"
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
