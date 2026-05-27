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
      },
      en: {
        common: enCommon,
        heroSection: enHeroSection,
        aboutUsSection: enAboutUsSection,
        introduceCertificate: enIntroduceCertificate,
        servicesSection: viServiceSection,
      },
    },

    fallbackLng: "vi",
    lng: "vi",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
