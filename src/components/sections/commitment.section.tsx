import {
  Globe2,
  TrendingUp,
  ShieldCheck,
  Leaf,
  BadgeCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";

const commitments = [
  { key: "commitment-1", icon: Globe2 },
  { key: "commitment-2", icon: TrendingUp },
  { key: "commitment-3", icon: ShieldCheck },
  { key: "commitment-4", icon: Leaf },
  { key: "commitment-5", icon: BadgeCheck },
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

// Quote block — fade + scale lên nhẹ
const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

// Commitment cards — stagger
const cardsContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

// ─────────────────────────────────────────────────────────────────────────────

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
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            className="bg-primary/10 text-primary border-primary/20 mb-6 rounded-full border px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-xl"
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
              className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
            >
              {t("title")}
            </motion.h2>

            <motion.p
              className="text-base leading-8 text-gray-300 sm:text-lg"
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

        {/* ── Quote ───────────────────────────────────────────────────────── */}
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-8 py-14 text-center backdrop-blur-xl"
          variants={fadeScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <div className="bg-primary/10 absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <motion.p
              className="text-primary mb-6 text-sm font-semibold tracking-[0.3em] uppercase"
              variants={fadeDown}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
            >
              Global Halal Vision
            </motion.p>

            <motion.h3
              className="text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.25}
            >
              "{t("quote")}"
            </motion.h3>
          </div>
        </motion.div>

        {/* ── Commitment Cards ────────────────────────────────────────────── */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-5"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {commitments.map((commitment) => {
            const Icon = commitment.icon;

            return (
              <motion.div
                key={commitment.key}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                variants={cardItem}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default CommitmentSection;
