"use client";

import { FaClock, FaHome, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  delay: number;
}

function FeatureCard({ icon, title, description, bgColor, delay }: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
      className={`${bgColor} p-6 rounded-[50%] shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center aspect-square`}
    >
      <motion.div
        className="mb-3 text-white text-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 2,
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-pacifico text-center text-white mb-2">{title}</h3>
      <p className="text-white text-center text-sm">{description}</p>
    </motion.div>
  );
}

export function WhyChooseMobile() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true });

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-pacifico text-[#46aebe] mb-4"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose Mobile Grooming?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Zoomies Bully Baths, we bring the salon experience to your doorstep,
            eliminating travel stress for your pets and saving you valuable time.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            key="stress-free"
            icon={<FaSmile />}
            title="Stress-Free Experience"
            description="No more stressful car rides or waiting in cages. Your pet is groomed in a familiar environment."
            bgColor="bg-coral"
            delay={0.2}
          />

          <FeatureCard
            key="one-on-one"
            icon={<FaHome />}
            title="One-on-One Attention"
            description="Each pet receives dedicated, personalized care throughout their grooming session."
            bgColor="bg-light-blue"
            delay={0.4}
          />

          <FeatureCard
            key="convenient"
            icon={<FaClock />}
            title="Convenient Scheduling"
            description="We work around your schedule, making pet grooming fit seamlessly into your busy life."
            bgColor="bg-pale-green"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
