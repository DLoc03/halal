import {
  ShieldCheck,
  Boxes,
  Factory,
  FileText,
  GraduationCap,
  Check,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";

const services = [
  { key: "service-1", icon: ShieldCheck },
  { key: "service-2", icon: Boxes },
  { key: "service-3", icon: Factory },
  { key: "service-4", icon: FileText },
  { key: "service-5", icon: GraduationCap },
];

// ─── Constants ───────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ─── Variants ────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

// Highlight items — stagger bên trong mỗi card
const highlightsContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.25 },
  },
};

const highlightItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

// ─────────────────────────────────────────────────────────────────────────────

function ServicesSection() {
  const { t } = useTranslation("servicesSection");

  return (
    <section id="services" className="relative">
      {/* Background */}
      <div className="bg-primary/10 absolute top-20 left-0 h-72 w-72 rounded-full blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16">
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            className="text-primary bg-primary/10 mb-6 rounded-full px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase"
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            {t("badge")}
          </motion.div>

          <div className="space-y-6">
            <motion.h2
              className="text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
            >
              {t("title")}
            </motion.h2>

            <motion.p
              className="text-base leading-8 text-gray-600 sm:text-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              {t("description")}
            </motion.p>
          </div>
        </div>

        {/* ── Services ────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              // Card — mỗi card to nên whileInView riêng, không cần stagger container
              <motion.div
                key={service.key}
                className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0}
              >
                {/* Glow */}
                <div className="bg-primary/5 group-hover:bg-primary/10 absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl transition-all duration-500" />

                <div className="relative grid gap-10 lg:grid-cols-[220px_1fr]">
                  {/* Left — fade từ trái */}
                  <motion.div
                    className="space-y-6"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.1}
                  >
                    {/* Number */}
                    <div className="text-7xl font-bold text-gray-100">
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <div className="bg-primary/10 text-primary flex h-16 w-16 items-center justify-center rounded-2xl">
                      <Icon size={30} />
                    </div>
                  </motion.div>

                  {/* Right — fade từ phải */}
                  <div className="space-y-6">
                    <motion.div
                      className="space-y-4"
                      variants={fadeRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={0.15}
                    >
                      <h3 className="text-3xl font-bold text-gray-900">
                        {t(`services.${service.key}.title`)}
                      </h3>

                      <p className="max-w-3xl text-base leading-8 text-gray-600">
                        {t(`services.${service.key}.description`)}
                      </p>
                    </motion.div>

                    {/* Highlights — stagger từng item */}
                    <motion.div
                      className="grid gap-4 sm:grid-cols-2"
                      variants={highlightsContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {(
                        t(`services.${service.key}.highlights`, {
                          returnObjects: true,
                        }) as string[]
                      ).map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex items-start gap-3 rounded-2xl bg-gray-50 px-4 py-4"
                          variants={highlightItem}
                        >
                          <div className="bg-primary/10 text-primary mt-0.5 flex h-6 w-6 items-center justify-center rounded-full">
                            <Check size={14} />
                          </div>

                          <p className="text-sm leading-7 text-gray-700">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
