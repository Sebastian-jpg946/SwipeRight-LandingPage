"use client";

import { motion } from 'framer-motion';
import React from "react";

type MidPageCTAProps = {
  animatedCount: number;
};

const MidPageCTA: React.FC<MidPageCTAProps> = ({ animatedCount }) => {
  return (
    <motion.section
      className="text-center mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="text-2xl font-bold mb-4">Ready to swipe smarter?</h3>
      <a
        href="#waitlist-form"
        className="inline-block px-6 py-3 bg-white text-black rounded-full font-semibold transition-transform duration-300 ease-in-out hover:bg-purple-500 hover:text-white hover:shadow-lg hover:scale-105"
        aria-label="Join SwipeRight early access waitlist"
      >
        Join the Waitlist
      </a>
      <p className="text-sm text-white mt-2">
        🚀{" "}
        <span id="waitlist-count">
          {animatedCount > 0 ? `${animatedCount}+ people` : "Loading..."}
        </span>{" "}
        have already joined!
      </p>
    </motion.section>
  );
};

export default MidPageCTA;