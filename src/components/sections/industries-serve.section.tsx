import {
  UtensilsCrossed,
  Fish,
  Hotel,
  Sparkles,
  Pill,
  Factory,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";

const industries = [
  {
    key: "industry-1",
    icon: UtensilsCrossed,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  },
  {
    key: "industry-2",
    icon: Fish,
    image:
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?q=80&w=1200&auto=format&fit=crop",
  },
  {
    key: "industry-3",
    icon: Hotel,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    key: "industry-4",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    key: "industry-5",
    icon: Pill,
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    key: "industry-6",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
  },
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

// Grid stagger — trigger khi grid vào viewport
const gridContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

// ─────────────────────────────────────────────────────────────────────────────

function IndustriesServeSection() {
  const { t } = useTranslation("industriesSection");

  return (
    <section id="industries-serve" className="relative">
      {/* Background */}
      <div className="bg-primary/10 absolute right-0 bottom-0 h-72 w-72 rounded-full blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14">
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

        {/* ── Industries Grid ──────────────────────────────────────────────── */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.key}
                className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                variants={gridItem}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.key}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Icon */}
                  <div className="bg-primary/90 absolute top-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg backdrop-blur-xl">
                    <Icon size={28} />
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={20} />
                  </div>

                  {/* Title */}
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {t(`industries.${industry.key}.title`)}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm leading-8 text-gray-600">
                    {t(`industries.${industry.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default IndustriesServeSection;
