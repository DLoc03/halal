import {
  Globe,
  ShieldCheck,
  BadgeCheck,
  Building2,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const cards = [
  {
    key: "card-1",
    icon: Globe,
  },
  {
    key: "card-2",
    icon: TrendingUp,
  },
  {
    key: "card-3",
    icon: ShieldCheck,
  },
  {
    key: "card-4",
    icon: BadgeCheck,
  },
  {
    key: "card-5",
    icon: Building2,
  },
];

const stats = ["stat-1", "stat-2", "stat-3"];

function IntroduceCertificateSection() {
  const { t } = useTranslation("introduceCertificate");

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden rounded-[3rem] bg-[#07111F] px-4 py-20 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="bg-primary/20 absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />

        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="bg-primary/10 text-primary border-primary/20 mb-6 rounded-full border px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-xl">
            {t("badge")}
          </div>

          {/* Title */}
          <div className="max-w-4xl space-y-6">
            <h2 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              {t("title")}
            </h2>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-primary mb-3 text-4xl font-bold">
                {t(`stats.${stat}.value`)}
              </p>

              <p className="text-lg text-gray-300">
                {t(`stats.${stat}.label`)}
              </p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.key}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                {/* Glow */}
                <div className="bg-primary/10 group-hover:bg-primary/20 absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl transition-all duration-500" />

                {/* Icon */}
                <div className="bg-primary/10 text-primary border-primary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border">
                  <Icon size={30} />
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {t(`cards.${card.key}.title`)}
                  </h3>

                  <p className="flex-1 text-sm leading-8 text-gray-300">
                    {t(`cards.${card.key}.description`)}
                  </p>
                </div>

                {/* Number */}
                <div className="absolute right-6 bottom-5 text-6xl font-bold text-white/5">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IntroduceCertificateSection;
