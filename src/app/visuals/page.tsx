import type { Metadata } from "next";
import { VisualGallery } from "@/components/visual-gallery";

export const metadata: Metadata = {
  title: "Visual Lab",
  description: "Explore the visual product studies and interface concepts across Ankit Jobanputra's portfolio."
};

export default function VisualsPage() {
  return <main className="container-shell py-14 md:py-20">
    <VisualGallery/>
  </main>;
}
