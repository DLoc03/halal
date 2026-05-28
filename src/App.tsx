import { useEffect } from "react";
import ScrollToTopButton from "./components/common/scroll-top-button";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import AboutUs from "./components/sections/about-us";
import CertificateProcessSection from "./components/sections/certificate-process.section";
import CommitmentSection from "./components/sections/commitment.section";
import ContactSection from "./components/sections/contact.section";
import HeroSection from "./components/sections/hero.section";
import IndustriesServeSection from "./components/sections/industries-serve.section";
import IntroduceCertificateSection from "./components/sections/introduce-certificate.section";
import ServicesSection from "./components/sections/services.section";
import WhyChooseUsSection from "./components/sections/why-choose-us.section";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";

function App() {
  const { t } = useTranslation("common");
  useEffect(() => {
    document.title = t("meta");
  }, [t]);
  return (
    <>
      <Toaster position="bottom-right" />
      <Header />
      <div className="mx-auto max-w-7xl space-y-6 px-2 pt-20 lg:space-y-12 xl:px-0">
        <HeroSection />
        <AboutUs />
        <IntroduceCertificateSection />
        <ServicesSection />
        <IndustriesServeSection />
        <CertificateProcessSection />
        <WhyChooseUsSection />
        <CommitmentSection />
        <ContactSection />
      </div>
      <ScrollToTopButton />

      <Footer />
    </>
  );
}

export default App;
