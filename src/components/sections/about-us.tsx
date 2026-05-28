import { ShieldCheck, Globe, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import image_1 from "@assets/about_us/about_us_1.jpg";
import image_2 from "@assets/about_us/about_us_2.jpg";

const cards = [
  { key: "card-1", icon: ShieldCheck },
  { key: "card-2", icon: FileCheck },
  { key: "card-3", icon: Globe },
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

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay },
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

// Cards stagger container
const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

// ─────────────────────────────────────────────────────────────────────────────

function AboutUsSection() {
  const { t } = useTranslation("aboutUsSection");

  return (
    <section id="about-us" className="relative lg:px-0">
      {/* Background */}
      <div className="bg-primary/10 absolute top-10 right-0 h-72 w-72 rounded-full blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        {/* ── Images (left col) ──────────────────────────────────────────── */}
        <div className="relative">
          {/* Main image */}
          <motion.div
            className="relative overflow-hidden rounded-[2rem] shadow-2xl"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <img
              src={image_1}
              alt="about-us"
              className="h-[520px] w-full object-cover"
            />
          </motion.div>

          {/* Floating Image */}
          <motion.div
            className="absolute -right-6 -bottom-10 hidden w-56 overflow-hidden rounded-3xl border-8 border-white shadow-2xl lg:block"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.25}
          >
            <img
              src={image_2}
              alt="team"
              className="h-72 w-full object-cover"
            />
          </motion.div>

          {/* Floating Card */}
          <motion.div
            className="absolute top-6 left-6 rounded-2xl border border-white/30 bg-white/80 p-5 shadow-xl backdrop-blur-xl"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.35}
          >
            <p className="text-primary text-3xl font-bold">100+</p>
            <p className="text-sm text-gray-600">Halal Compliance Projects</p>
          </motion.div>
        </div>

        {/* ── Content (right col) ───────────────────────────────────────── */}
        <div className="space-y-6">
          {/* Badge */}
          <motion.div
            className="text-primary bg-primary/10 inline-flex rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase"
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            {t("badge")}
          </motion.div>

          {/* Heading */}
          <div className="space-y-5">
            <motion.h2
              className="text-4xl leading-tight font-bold text-gray-900 lg:text-5xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
            >
              {t("title")}
            </motion.h2>

            <motion.div
              className="space-y-3 text-base leading-8 text-gray-600"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <p>{t("description")}</p>
            </motion.div>
          </div>

          {/* Cards — stagger */}
          <motion.div
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.key}
                  className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  variants={cardItem}
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
