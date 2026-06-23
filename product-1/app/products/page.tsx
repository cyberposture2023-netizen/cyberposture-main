import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import ThreatSimulationSection from "@/components/ThreatSimulationSection";
import B2CHVISection from "@/components/B2CHVISection";
import EnterpriseSection from "@/components/EnterpriseSection";
import EvidenceSection from "@/components/EvidenceSection";
import TimelineSection from "@/components/TimelineSection";
import HVIAssessmentSection from "@/components/HVIAssessmentSection";
import ChoosePathSection from "@/components/ChoosePathSection";

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow">
        <ThreatSimulationSection />

        <ChoosePathSection />

        <B2CHVISection />

        <EnterpriseSection />

        <EvidenceSection />

        <TimelineSection />

        <div id="assessment">
          <HVIAssessmentSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}