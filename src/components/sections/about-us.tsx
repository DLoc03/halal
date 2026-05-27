import { ShieldCheck, Globe, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const cards = [
  {
    key: "card-1",
    icon: ShieldCheck,
  },
  {
    key: "card-2",
    icon: FileCheck,
  },
  {
    key: "card-3",
    icon: Globe,
  },
];

function AboutUsSection() {
  const { t } = useTranslation("aboutUsSection");

  return (
    <section id="about-us" className="relative lg:px-0">
      {/* Background */}
      <div className="bg-primary/10 absolute top-10 right-0 h-72 w-72 rounded-full blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        {/* Images */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop"
              alt="about-us"
              className="h-[520px] w-full object-cover"
            />
          </div>

          {/* Floating Image */}
          <div className="absolute -right-6 -bottom-10 hidden w-56 overflow-hidden rounded-3xl border-8 border-white shadow-2xl lg:block">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="team"
              className="h-72 w-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute top-6 left-6 rounded-2xl border border-white/30 bg-white/80 p-5 shadow-xl backdrop-blur-xl">
            <p className="text-primary text-3xl font-bold">100+</p>
            <p className="text-sm text-gray-600">Halal Compliance Projects</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="text-primary bg-primary/10 inline-flex rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase">
            {t("badge")}
          </div>

          {/* Heading */}
          <div className="space-y-5">
            <h2 className="text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
              {t("title")}
            </h2>

            <div className="space-y-3 text-base leading-8 text-gray-600">
              <p>{t("description")}</p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.key}
                  className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="bg-primary/10 text-primary mb-5 flex h-14 w-14 items-center justify-center rounded-2xl">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {t(`cards.${card.key}.title`)}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600">
                    {t(`cards.${card.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
