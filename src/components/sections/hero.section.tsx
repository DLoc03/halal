import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import image_1 from "@assets/hero_section/hero_1.jpg";
import image_2 from "@assets/hero_section/hero_2.jpg";
import image_3 from "@assets/hero_section/hero_3.jpg";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const banners = [
  {
    key: "slide-1",
    image: image_1,
  },
  {
    key: "slide-2",
    image: image_2,
  },
  {
    key: "slide-3",
    image: image_3,
  },
];

// ─── Shared variants ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
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

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

// Slide content — dùng AnimatePresence để animate khi đổi slide
const slideContentVariants: Variants = {
  enter: { opacity: 0, y: 20 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, staggerChildren: 0.08 },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const slideChildVariants: Variants = {
  enter: { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// ────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  const { t } = useTranslation(["heroSection", "common"]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      {/* Background Blur */}
      <div className="bg-primary/10 absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-3">
        {/* ── Content ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            className="border-primary/20 text-primary mb-5 rounded-full border bg-white/80 px-5 py-2 text-[10px] font-semibold tracking-[0.25em] uppercase shadow-lg backdrop-blur-xl sm:text-xs"
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            {t("common:meta")}
          </motion.div>

          {/* Heading */}
          <div className="max-w-5xl space-y-3">
            <motion.h1
              className="text-4xl leading-[1.1] font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
            >
              {t("title")}
            </motion.h1>

            <motion.h2
              className="text-primary mx-auto max-w-3xl text-lg leading-relaxed font-medium sm:text-xl lg:text-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              {t("subtitle")}
            </motion.h2>
          </div>

          {/* Description */}
          <motion.div
            className="max-w-3xl rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.32}
          >
            <p className="text-sm leading-8 font-light text-gray-700 sm:text-base">
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* ── Slider ──────────────────────────────────────────────────────── */}
        <motion.div
          className="relative h-80 overflow-hidden rounded-4xl lg:h-100"
          variants={fadeScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.45}
        >
          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-1000 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {banners.map((banner, index) => (
              <div
                key={banner.key}
                className="relative h-full min-w-full overflow-hidden"
              >
                {/* Image */}
                <img
                  src={banner.image}
                  alt={banner.key}
                  className="h-full w-full scale-105 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/10" />

                {/* Slide Content — animated on slide change */}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full px-6 pt-6 pb-12 sm:p-10 lg:p-16">
                    <AnimatePresence mode="wait">
                      {currentSlide === index && (
                        <motion.div
                          key={`content-${banner.key}`}
                          className="max-w-3xl space-y-5 text-white"
                          variants={slideContentVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                        >
                          <motion.div
                            className="bg-primary/90 inline-flex rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md"
                            variants={slideChildVariants}
                          >
                            Indonesian Halal Certification
                          </motion.div>

                          <motion.h3
                            className="text-3xl leading-tight font-bold sm:text-5xl lg:text-6xl"
                            variants={slideChildVariants}
                          >
                            {t(`slides.${banner.key}.title`)}
                          </motion.h3>

                          <motion.p
                            className="max-w-2xl text-sm leading-7 text-gray-100 sm:text-lg"
                            variants={slideChildVariants}
                          >
                            {t(`slides.${banner.key}.description`)}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl sm:bottom-8">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? "h-1.5 w-10 bg-white lg:h-3"
                    : "h-1.5 w-1.5 bg-white/60 hover:bg-white lg:h-3 lg:w-3"
                }`}
              />
            ))}
          </div>

          {/* Floating Card */}
          <motion.div
            className="absolute top-6 right-6 hidden rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-xl backdrop-blur-xl lg:block"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.65}
          >
            <p className="text-3xl font-bold">100+</p>
            <p className="text-sm text-gray-200">Certified Businesses</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
