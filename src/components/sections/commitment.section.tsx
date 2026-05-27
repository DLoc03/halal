import {
  Globe2,
  TrendingUp,
  ShieldCheck,
  Leaf,
  BadgeCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const commitments = [
  {
    key: "commitment-1",
    icon: Globe2,
  },
  {
    key: "commitment-2",
    icon: TrendingUp,
  },
  {
    key: "commitment-3",
    icon: ShieldCheck,
  },
  {
    key: "commitment-4",
    icon: Leaf,
  },
  {
    key: "commitment-5",
    icon: BadgeCheck,
  },
];

function CommitmentSection() {
  const { t } = useTranslation("commitmentSection");

  return (
    <section
      id="commitment"
      className="relative rounded-[3rem] bg-[#07111F] px-4 py-20 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="bg-primary/20 absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />

        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16">
        {/* Header */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="bg-primary/10 text-primary border-primary/20 mb-6 rounded-full border px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-xl">
            {t("badge")}
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              {t("title")}
            </h2>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-8 py-14 text-center backdrop-blur-xl">
          <div className="bg-primary/10 absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-primary mb-6 text-sm font-semibold tracking-[0.3em] uppercase">
              Global Halal Vision
            </p>

            <h3 className="text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
              “{t("quote")}”
            </h3>
          </div>
        </div>

        {/* Commitment Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {commitments.map((commitment) => {
            const Icon = commitment.icon;

            return (
              <div
                key={commitment.key}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                {/* Glow */}
                <div className="bg-primary/10 group-hover:bg-primary/20 absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl transition-all duration-500" />

                {/* Icon */}
                <div className="bg-primary/10 text-primary border-primary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl leading-snug font-semibold text-white">
                    {t(`commitments.${commitment.key}.title`)}
                  </h3>

                  <p className="text-sm leading-8 text-gray-300">
                    {t(`commitments.${commitment.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CommitmentSection;
