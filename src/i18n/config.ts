import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import viCommon from "./messages/vi/common.json";
import enCommon from "./messages/en/common.json";

import viHeroSection from "./messages/vi/hero-section.json";
import enHeroSection from "./messages/en/hero-section.json";

import viAboutUsSection from "./messages/vi/about-us-section.json";
import enAboutUsSection from "./messages/en/about-us-section.json";

import viIntroduceCertificate from "./messages/vi/introduce-certificate.json";
import enIntroduceCertificate from "./messages/en/introduce-certificate.json";

import viServiceSection from "./messages/vi/service-section.json";
import enServiceSection from "./messages/en/service-section.json";

import viIndustriesSection from "./messages/vi/industries-server.json";
import enIndustriesSection from "./messages/en/industries-server.json";

import viCertificateSection from "./messages/vi/certificate-process.json";
import enCertificateSection from "./messages/en/certificate-process.json";

import viWhyChooseUsSection from "./messages/vi/why-choose-us.json";
import enWhyChooseUsSection from "./messages/en/why-choose-us.json";

import viCommitmentSection from "./messages/vi/commitment-section.json";
import enCommitmentSection from "./messages/en/commitment-section.json";

import viContactSection from "./messages/vi/contact-section.json";
import enContactSection from "./messages/en/contact-section.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        common: viCommon,
        heroSection: viHeroSection,
        aboutUsSection: viAboutUsSection,
        introduceCertificate: viIntroduceCertificate,
        servicesSection: viServiceSection,
        industriesSection: viIndustriesSection,
        certificateProcess: viCertificateSection,
        whyChooseUs: viWhyChooseUsSection,
        commitmentSection: viCommitmentSection,
        contactSection: viContactSection,
      },
      en: {
        common: enCommon,
        heroSection: enHeroSection,
        aboutUsSection: enAboutUsSection,
        introduceCertificate: enIntroduceCertificate,
        servicesSection: enServiceSection,
        industriesSection: enIndustriesSection,
        certificateProcess: enCertificateSection,
        whyChooseUs: enWhyChooseUsSection,
        commitmentSection: enCommitmentSection,
        contactSection: enContactSection,
      },
    },

    fallbackLng: "vi",
    lng: "vi",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
