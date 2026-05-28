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
import { motion, type Variants } from "framer-motion";

const steps = [
  { key: "step-1", icon: MessagesSquare },
  { key: "step-2", icon: SearchCheck },
  { key: "step-3", icon: FileText },
  { key: "step-4", icon: Factory },
  { key: "step-5", icon: Send },
  { key: "step-6", icon: ClipboardCheck },
  { key: "step-7", icon: BadgeCheck },
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
  hidden: { opacity: 0, x: -24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE, delay },
  }),
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE, delay },
  }),
};

// Timeline line — scaleY từ 0 → 1 theo chiều dọc
const timelineLine: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: EASE, delay: 0.2 },
  },
};

// ─────────────────────────────────────────────────────────────────────────────

function CertificateProcessSection() {
  const { t } = useTranslation("certificateProcess");

  return (
    <section id="certificate-process" className="relative">
      {/* Background */}
      <div className="bg-primary/10 absolute top-20 right-0 h-72 w-72 rounded-full blur-3xl" />

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

        {/* ── Timeline ────────────────────────────────────────────────────── */}
        <div className="relative">
          {/* Vertical Line — animate vẽ xuống */}
          <motion.div
            className="from-primary/40 via-primary/20 absolute top-0 left-6 hidden h-full w-[2px] bg-gradient-to-b to-transparent lg:block"
            variants={timelineLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                // Mỗi step card — whileInView riêng, đủ cao để tự trigger
                <motion.div
                  key={step.key}
                  className="group relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-[100px_1fr]"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={0}
                >
                  {/* Left — icon + number, fade từ trái */}
                  <motion.div
                    className="relative flex flex-col items-start"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.12}
                  >
                    {/* Circle */}
                    <div className="bg-primary relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg">
                      <Icon size={26} />
                    </div>

                    {/* Number */}
                    <div className="mt-5 text-5xl font-bold text-gray-100">
                      0{index + 1}
                    </div>
                  </motion.div>

                  {/* Right — title + desc, fade từ phải */}
                  <motion.div
                    className="space-y-4"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.18}
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t(`steps.${step.key}.title`)}
                    </h3>

                    <p className="max-w-3xl text-base leading-8 text-gray-600">
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </motion.div>

                  {/* Glow */}
                  <div className="bg-primary/5 absolute top-0 right-0 h-40 w-40 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateProcessSection;
