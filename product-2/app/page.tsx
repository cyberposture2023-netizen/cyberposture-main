import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatStrip from "@/components/home/StatStrip";
import PlatformCards from "@/components/home/PlatformCards";
import WhyCards from "@/components/home/WhyCards";
import ArchitectureDiagram from "@/components/home/ArchitectureDiagram";
import ChooseYourPath from "@/components/home/ChooseYourPath";
import Sources from "@/components/home/Sources";

export const metadata: Metadata = {
  title: "CyberPosture — Human & AI Cyber Risk Intelligence",
  description:
    "Measure behavior-driven human cyber risk with the Human Vulnerability Index. Discover, assess, and govern enterprise AI usage with confidence.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <PlatformCards />
      <WhyCards />
      <ArchitectureDiagram />
      <ChooseYourPath />
      <Sources />
    </>
  );
}
