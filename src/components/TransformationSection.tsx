"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TransformationSlider } from "./TransformationSlider";

const transformations = [
  {
    id: 1,
    beforeImage: "/images/transformations/dog1-before.jpg",
    afterImage: "/images/transformations/dog1-after.jpg",
    description: "Straight out the shelter smelling fresh",
    dogName: "Turk",
    isCombinedImage: false,
    orientation: "horizontal" as const
  },
  {
    id: 2,
    beforeImage: "/images/transformations/dog2-before.jpg",
    afterImage: "/images/transformations/dog2-after.jpg",
    description: "Stella's Fresh Summer bath",
    dogName: "Stella",
    isCombinedImage: true,
    orientation: "horizontal" as const
  },
  {
    id: 3,
    beforeImage: "/images/transformations/dog3-before.jpg",
    afterImage: "/images/transformations/dog3-after.jpg",
    description: "Sanders' First Professional Grooming",
    dogName: "Sanders",
    isCombinedImage: true,
    orientation: "horizontal" as const
  }
];

export const TransformationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTransformation = transformations[currentIndex];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 30 }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    })
  };

  const [direction, setDirection] = useState(0);

  const prevWithDirection = () => {
    setDirection(1);
    handlePrev();
  };

  const nextWithDirection = () => {
    setDirection(-1);
    handleNext();
  };

  return (
    <section className="py-16 bg-gray-50 min-h-[650px]" ref={sectionRef}>
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-pacifico text-[#46aebe] mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Transformation
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              See the amazing results of our professional grooming services. Slide to reveal the before and after transformation!
            </motion.p>
          </motion.div>

          <div className="flex flex-col">
            <motion.div variants={itemVariants} className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <TransformationSlider
                    beforeImage={currentTransformation.beforeImage}
                    afterImage={currentTransformation.afterImage}
                    altText={currentTransformation.description}
                    isCombinedImage={currentTransformation.isCombinedImage}
                    orientation={currentTransformation.orientation}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div className="mt-8 text-center" variants={itemVariants}>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`name-${currentTransformation.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl sm:text-2xl font-pacifico text-[#46aebe] mb-2"
                >
                  {currentTransformation.dogName}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentTransformation.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-base sm:text-lg text-gray-600 mb-6"
                >
                  {currentTransformation.description}
                </motion.p>
              </AnimatePresence>

              <motion.div className="flex justify-center gap-4 mt-4" variants={itemVariants}>
                <motion.button
                  onClick={prevWithDirection}
                  className="px-4 py-2 bg-[#46aebe] text-white rounded-full hover:bg-[#3a8d9c] transition-colors text-sm sm:text-base"
                  aria-label="Previous transformation"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  ← Previous
                </motion.button>
                <motion.button
                  onClick={nextWithDirection}
                  className="px-4 py-2 bg-[#f9a280] text-white rounded-full hover:bg-[#e88f6d] transition-colors text-sm sm:text-base"
                  aria-label="Next transformation"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Next →
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
