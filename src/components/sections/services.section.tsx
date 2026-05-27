import {
  ShieldCheck,
  Boxes,
  Factory,
  FileText,
  GraduationCap,
  Check,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const services = [
  {
    key: "service-1",
    icon: ShieldCheck,
  },
  {
    key: "service-2",
    icon: Boxes,
  },
  {
    key: "service-3",
    icon: Factory,
  },
  {
    key: "service-4",
    icon: FileText,
  },
  {
    key: "service-5",
    icon: GraduationCap,
  },
];

function ServicesSection() {
  const { t } = useTranslation("servicesSection");

  return (
    <section id="services" className="relative">
      {/* Background */}
      <div className="bg-primary/10 absolute top-20 left-0 h-72 w-72 rounded-full blur-3xl" />

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

        {/* Services */}
        <div className="flex flex-col gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.key}
                className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Glow */}
                <div className="bg-primary/5 group-hover:bg-primary/10 absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl transition-all duration-500" />

                <div className="relative grid gap-10 lg:grid-cols-[220px_1fr]">
                  {/* Left */}
                  <div className="space-y-6">
                    {/* Number */}
                    <div className="text-7xl font-bold text-gray-100">
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <div className="bg-primary/10 text-primary flex h-16 w-16 items-center justify-center rounded-2xl">
                      <Icon size={30} />
                    </div>
                  </div>

                  {/* Right */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-gray-900">
                        {t(`services.${service.key}.title`)}
                      </h3>

                      <p className="max-w-3xl text-base leading-8 text-gray-600">
                        {t(`services.${service.key}.description`)}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      {(
                        t(`services.${service.key}.highlights`, {
                          returnObjects: true,
                        }) as string[]
                      ).map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-3 rounded-2xl bg-gray-50 px-4 py-4"
                        >
                          <div className="bg-primary/10 text-primary mt-0.5 flex h-6 w-6 items-center justify-center rounded-full">
                            <Check size={14} />
                          </div>

                          <p className="text-sm leading-7 text-gray-700">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
