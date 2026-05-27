import { Mail, Phone, MapPin, Globe, ChevronRight } from "lucide-react";
import Logo from "../ui/logo";
import { useTranslation } from "react-i18next";
import { DESKTOP_SECTION_IDS } from "@/constant/section-ids";

function Footer() {
  const { t, i18n } = useTranslation("common");

  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 100;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-20 overflow-hidden bg-[#07111F] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="bg-primary/20 absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />

        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Company */}
          <div className="space-y-6">
            <Logo size="80px" />

            <div className="space-y-4">
              <h3 className="max-w-md text-2xl leading-snug font-bold">
                INDONESIAN HALAL SUPREME CERTIFICATION IN VIETNAM CERTIFICATION
                AND MONITORING (VIET NAM)
              </h3>

              <p className="max-w-xl text-base leading-8 text-gray-300">
                {t("footer.description")}
              </p>
            </div>

            {/* Social */}
            {/* <div className="flex items-center gap-4">
              <button className="hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300">
                <Facebook size={20} />
              </button>

              <button className="hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300">
                <Linkedin size={20} />
              </button>
            </div> */}
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{t("footer.quickLinks")}</h3>

            <div className="grid gap-4">
              {DESKTOP_SECTION_IDS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollToSection(section.id)}
                  className="group flex items-center gap-3 text-left text-gray-300 transition-all duration-300 hover:text-white"
                >
                  <ChevronRight
                    size={18}
                    className="text-primary transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span className="font-medium">
                    {t(`footer.sections.${section.key}`)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{t("footer.contact")}</h3>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="mb-1 text-sm tracking-wide text-gray-400 uppercase">
                    Hotline
                  </p>

                  <p className="text-base text-white">+84 93 154 1339</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="mb-1 text-sm tracking-wide text-gray-400 uppercase">
                    Email
                  </p>

                  <p className="text-base text-white">audit@halalsupreme.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Globe size={20} />
                </div>

                <div>
                  <p className="mb-1 text-sm tracking-wide text-gray-400 uppercase">
                    Website
                  </p>

                  <p className="text-base text-white">www.halalsupreme.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="mb-1 text-sm tracking-wide text-gray-400 uppercase">
                    {t("footer.office")}
                  </p>

                  <p className="text-base leading-7 text-white">
                    {i18n.language === "vi"
                      ? "Tầng 8, Tòa nhà VNO, 105 Cộng Hòa, Phường Bảy Hiền, TP. Hồ Chí Minh, Việt Nam"
                      : "Floor 8, VNO Building, 105 Cong Hoa, Bay Hien Ward, Ho Chi Minh City, Vietnam"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center lg:flex-row lg:text-left">
          <p className="text-sm leading-7 text-gray-400">
            © {currentYear} HALAL SUPREME VIETNAM. {t("footer.copyright")}
          </p>

          <p className="text-sm text-gray-500">{t("footer.slogan")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
