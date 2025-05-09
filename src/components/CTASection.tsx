"use client";

import Link from "next/link";
import { FaBone } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="py-16 bg-light-blue" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-pacifico text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Ready to Give Your Pet the Royal Treatment?
          </motion.h2>
          <motion.p
            className="text-xl text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Schedule your mobile grooming appointment today and let us bring the salon to your doorstep!
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
              delay: 0.5
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-8 py-4 bg-bone hover:bg-opacity-90 text-[#46aebe] font-bold rounded-full transition-all"
              >
                <motion.span
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1
                  }}
                  className="mr-2"
                >
                  <FaBone className="text-[#46aebe]" />
                </motion.span>
                <span>Book Your Appointment</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            className="mt-6 text-white text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Or call us at{" "}
            <motion.a
              href="tel:+18567250059"
              className="font-bold hover:underline"
              whileHover={{ scale: 1.1, color: "#FFD700" }}
              whileTap={{ scale: 0.95 }}
            >
              (856) 725-0059
            </motion.a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
