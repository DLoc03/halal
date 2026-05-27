import {
  ShieldCheck,
  Sparkles,
  TimerReset,
  Settings2,
  Handshake,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const reasons = [
  {
    key: "reason-1",
    icon: ShieldCheck,
  },
  {
    key: "reason-2",
    icon: Sparkles,
  },
  {
    key: "reason-3",
    icon: TimerReset,
  },
  {
    key: "reason-4",
    icon: Settings2,
  },
  {
    key: "reason-5",
    icon: Handshake,
  },
];

function WhyChooseUsSection() {
  const { t } = useTranslation("whyChooseUs");

  return (
    <section id="why-choose-us" className="relative">
      {/* Background */}
      <div className="bg-primary/10 absolute top-0 left-0 h-72 w-72 rounded-full blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16">
        {/* Header */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="text-primary bg-primary/10 mb-6 rounded-full px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase">
            {t("badge")}
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              {t("title")}
            </h2>

            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Side */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.key}
                  className={`group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-7 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                >
                  {/* Glow */}
                  <div className="bg-primary/5 group-hover:bg-primary/10 absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl transition-all duration-500" />

                  {/* Icon */}
                  <div className="bg-primary/10 text-primary mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                    <Icon size={30} />
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t(`reasons.${reason.key}.title`)}
                    </h3>

                    <p className="text-sm leading-8 text-gray-600">
                      {t(`reasons.${reason.key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
              alt="why-choose-us"
              className="h-[700px] w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Floating Card */}
            <div className="absolute right-6 bottom-6 left-6 rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <p className="mb-2 text-sm tracking-[0.2em] text-white/70 uppercase">
                Halal Compliance Partner
              </p>

              <h3 className="text-3xl leading-tight font-bold text-white">
                Supporting Vietnamese Businesses For Global Halal Expansion
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
