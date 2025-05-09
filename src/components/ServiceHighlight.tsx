"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBone } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  index: number;
}

function ServiceCard({ imageSrc, title, index }: ServiceCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 * index, type: "spring" }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      <div className="relative w-full h-64 overflow-hidden">
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
          className="w-full h-full"
        >
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition={imageSrc === "images/happy-client.jpg" ? "center 30%" : "center"}
            className="rounded-t-lg"
            priority
          />
        </motion.div>
      </div>
      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 * index, duration: 0.5 }}
      >
        <p className="text-gray-700 text-center">{title}</p>
      </motion.div>
    </motion.div>
  );
}

export function ServiceHighlight() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.div
      ref={sectionRef}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            imageSrc="images/happy-client1.jpg"
            title="Our happy clients after grooming"
            index={0}
          />
          <ServiceCard
            imageSrc="images/van.jpg"
            title="Our fully equipped mobile grooming van brings the salon to your doorstep"
            index={1}
          />
          <ServiceCard
            imageSrc="images/dog1.jpg"
            title="Professional grooming with personalized attention"
            index={2}
          />
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.p
            className="text-xl text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Want to see your pet looking their best after a mobile grooming session?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-coral text-white font-medium hover:bg-opacity-90 transition-colors relative"
            >
              <span className="relative z-10">Book Your Appointment Today</span>
              <motion.span
                animate={{
                  rotate: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                }}
              >
                <FaBone className="text-white ml-2" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
