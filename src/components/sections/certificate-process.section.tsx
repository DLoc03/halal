import {
  MessagesSquare,
  SearchCheck,
  FileText,
  Factory,
  Send,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const steps = [
  {
    key: "step-1",
    icon: MessagesSquare,
  },
  {
    key: "step-2",
    icon: SearchCheck,
  },
  {
    key: "step-3",
    icon: FileText,
  },
  {
    key: "step-4",
    icon: Factory,
  },
  {
    key: "step-5",
    icon: Send,
  },
  {
    key: "step-6",
    icon: ClipboardCheck,
  },
  {
    key: "step-7",
    icon: BadgeCheck,
  },
];

function CertificateProcessSection() {
  const { t } = useTranslation("certificateProcess");

  return (
    <section id="certificate-process" className="relative">
      {/* Background */}
      <div className="bg-primary/10 absolute top-20 right-0 h-72 w-72 rounded-full blur-3xl" />

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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="from-primary/40 via-primary/20 absolute top-0 left-6 hidden h-full w-[2px] bg-gradient-to-b to-transparent lg:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.key}
                  className="group relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-[100px_1fr]"
                >
                  {/* Left */}
                  <div className="relative flex flex-col items-start">
                    {/* Circle */}
                    <div className="bg-primary relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg">
                      <Icon size={26} />
                    </div>

                    {/* Number */}
                    <div className="mt-5 text-5xl font-bold text-gray-100">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t(`steps.${step.key}.title`)}
                    </h3>

                    <p className="max-w-3xl text-base leading-8 text-gray-600">
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </div>

                  {/* Glow */}
                  <div className="bg-primary/5 absolute top-0 right-0 h-40 w-40 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateProcessSection;
