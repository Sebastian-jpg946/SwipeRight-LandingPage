"use client";
import { motion } from 'framer-motion';
import React from "react";
import dynamic from "next/dynamic";

interface Step {
  animation: any;
  headline: string;
  subtext: string;
}

interface TimelineProps {
  steps: Step[];
}

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  return (
    <motion.section
      id="timeline"
      className="w-full max-w-3xl mx-auto mt-28 text-left space-y-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-white text-center mb-8">How SwipeRight Works</h2>
      {steps.map((step, index) => {
        const DynamicClientLottie = dynamic(() => import("@/components/ClientLottie"), { ssr: false });
        return (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={`w-full md:w-1/2 flex justify-center ${index === 0 ? "relative -mt-10 z-0" : ""}`}>
              <DynamicClientLottie animationData={step.animation} className="w-full h-auto max-h-[300px]" />
            </div>
            <div className="w-full md:w-1/2 text-white text-lg">
              <h3 className="text-xl font-semibold mb-2">{step.headline}</h3>
              <p>{step.subtext}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.section>
  );
}

export default Timeline;