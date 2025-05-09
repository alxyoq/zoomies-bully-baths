"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasMounted, setHasMounted] = useState(false);

  // Delay animation until hydration completes (prevents flicker)
  useEffect(() => {
    const timeout = setTimeout(() => setHasMounted(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const animateIfReady = hasMounted && isInView;

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] overflow-visible md:overflow-hidden bg-light-blue"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.svg
          initial={{ y: 50, opacity: 0 }}
          animate={animateIfReady ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: "133%", height: 50 }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </motion.svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={animateIfReady ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={animateIfReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-6xl font-pacifico text-white mb-6"
          >
            Premium Mobile Pet Grooming
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={animateIfReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg md:text-2xl text-white mb-8"
          >
            We bring professional grooming services directly to your doorstep
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animateIfReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-coral hover:bg-opacity-90 text-white px-8 py-3 font-semibold transition-all"
              >
                Book Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.6 }}
                >
                  <FaArrowRight className="ml-2" />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="tel:+18567250059"
                className="inline-flex items-center rounded-full bg-white bg-opacity-30 hover:bg-opacity-40 text-white border border-white px-8 py-3 font-semibold transition-all"
              >
                Call (856) 725-0059
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 w-full relative"
          initial={{ opacity: 0, x: 50 }}
          animate={animateIfReady ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={animateIfReady ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full h-[260px] sm:h-[300px] md:h-[400px] relative rounded-full overflow-hidden"
          >
            <Image
              src="images/home-pic.jpg"
              alt="Happy dog after grooming"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="/images/home-pic.jpg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            animate={animateIfReady ? { opacity: 1, x: 0, rotate: 12 } : {}}
            transition={{ duration: 0.7, delay: 0.8, type: "spring" }}
            className="absolute -bottom-10 -left-6 sm:-left-10 w-28 h-28 sm:w-32 sm:h-32 bg-coral rounded-full flex items-center justify-center transform"
          >
            <p className="text-white font-pacifico text-xs sm:text-sm text-center">
              Stress-Free Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            animate={animateIfReady ? { opacity: 1, x: 0, rotate: -12 } : {}}
            transition={{ duration: 0.7, delay: 1, type: "spring" }}
            className="absolute -top-5 -right-4 sm:-right-5 w-24 h-24 sm:w-28 sm:h-28 bg-pale-green rounded-full flex items-center justify-center transform"
          >
            <p className="text-white font-pacifico text-xs sm:text-sm text-center">
              We Come&nbsp;to&nbsp;You!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
