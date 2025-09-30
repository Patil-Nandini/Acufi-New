import Header from "@/pages/acuview/Header";
import HeroSection from "@/pages/acuview/HeroSection";
import IntroducingTheFirst from "@/pages/acuview/Introducingthefirst";
import ExploringLenderNetwork from "@/pages/acuview/ExploringLenderNetwork";
import WhoisAcuViewBuiltFor from "@/pages/acuview/WhoisAcuviewBuiltFor";
import LenderNetworkEffect from "@/pages/acuview/LenderNetworkAction";
import HiddenCrisisSection from "@/pages/acuview/HiddenCrysis";
import DontFundBlind from "@/pages/acuview/DontFundBlind";
import LendersResult from "@/pages/acuview/LendersResult";
import StatsSection from "@/pages/acuview/Impact";
import FoundingBenefits from "@/pages/acuview/FoundingMember";
import FlexibleIntegrationOptions from "@/pages/acuview/FlexibleIntegration";
import ComparisonSection from "@/pages/acuview/ComparisionSection";
import SetupSteps from "@/pages/acuview/SetupSteps";
import TheEarlyBird from "@/pages/acuview/TheEarlyBird";
import ThirtyDaysFree from "@/pages/acuview/30DaysFree";
import Testimonials from "@/pages/acuview/Testimonial";
import AcuviewBanner from "@/pages/acuview/AcuView";
import FaqSection from "@/pages/acuview/FAQS";
import LendingBanner from "@/pages/acuview/JoinFoundingLenders";
import Footer from "@/pages/acuview/Footer";

export default function Home() {
  return (
    <main className="bg-white flex justify-center font-sarabun">
      <div className="w-full ">
        <Header />
        <HeroSection />
        <IntroducingTheFirst />
        <ExploringLenderNetwork />
        <StatsSection />
        <LenderNetworkEffect />
        <HiddenCrisisSection />
        <DontFundBlind />
        <LendersResult />
        <WhoisAcuViewBuiltFor />
        <FoundingBenefits />
        <FlexibleIntegrationOptions />
        <ComparisonSection />
        <SetupSteps />
        <TheEarlyBird />
        <ThirtyDaysFree />
        <Testimonials />
        <AcuviewBanner />
        <FaqSection />
        <LendingBanner />
        <Footer />
      </div>
    </main>
  );
}
