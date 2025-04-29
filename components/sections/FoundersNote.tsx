import { motion } from 'framer-motion';
import React from "react";

const FounderNote: React.FC = () => {
  return (
    <motion.section
      className="mt-28 w-full max-w-3xl text-left"
      id="founder-note"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">From the Founder</h2>
      <p className="text-white">
        Hi, I’m Sebastian, I built SwipeRight because I was tired of missing out on card rewards I should’ve earned. This app is about making everyday purchases smarter without adding friction. Thanks for checking it out. I’d love your feedback.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
        <img
          src="/founder-headshot.jpg"
          alt="Founder Sebastian Tabarez"
          className="w-32 h-32 rounded-full border object-cover"
          loading="eager"
          decoding="async"
        />
        <p className="text-white">
          I'm a builder, points optimizer, and someone who got tired of spreadsheets. I made SwipeRight to simplify things. Let me know how it can improve.
        </p>
      </div>
    </motion.section>
  );
};

export default FounderNote;
