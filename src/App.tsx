import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import AboutUs from "./components/sections/about-us";
import CommitmentSection from "./components/sections/commitment.section";
import ContactSection from "./components/sections/contact.section";
import HeroSection from "./components/sections/hero.section";
import IndustriesServeSection from "./components/sections/industries-serve.section";
import IntroduceCertificateSection from "./components/sections/introduce-certificate.section";
import ServicesSection from "./components/sections/services.section";
import WhyChooseUsSection from "./components/sections/why-choose-us.section";

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl space-y-6 px-2 pt-20 xl:px-0">
        <HeroSection />
        <AboutUs />
        <IntroduceCertificateSection />
        <ServicesSection />
        <IndustriesServeSection />
        <WhyChooseUsSection />
        <CommitmentSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
