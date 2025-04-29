"use client";
import { motion } from 'framer-motion';
import React from "react";

const FeaturePreview: React.FC = () => {
  return (
    <motion.section
      className="mt-28 w-full max-w-3xl text-left"
      id="feature-preview"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl font-semibold text-white mb-4">Why This App?</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li className="hover:bg-white/10 hover:shadow-md transition duration-200 rounded px-4 py-2">
          Never forget rotating categories or card bonuses again.
        </li>
        <li className="hover:bg-white/10 hover:shadow-md transition duration-200 rounded px-4 py-2">
          Personalized recommendations based on your cards.
        </li>
        <li className="hover:bg-white/10 hover:shadow-md transition duration-200 rounded px-4 py-2">
          Get notified when promo categories change.
        </li>
        <li className="hover:bg-white/10 hover:shadow-md transition duration-200 rounded px-4 py-2">
          Widget for real-time recommendations right on your phone.
        </li>
      </ul>
    </motion.section>
  );
};

export default FeaturePreview;

<section className="mt-28 w-full max-w-3xl text-left" id="feature-preview" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-white mb-4">Why This App?</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li className="hover:bg-white/10 hover:shadow-md transition duration-200 rounded px-4 py-2">Never forget rotating categories or card bonuses again.</li>
          <li className="hover:bg-white/10 hover:shadow-md transition duration-200 rounded px-4 py-2">Personalized recommendations based on your cards.</li>
          <li className="hover:bg-white/10 hover:shadow-md transition duration-200 rounded px-4 py-2">Get notified when promo categories change.</li>
          <li className="hover:bg-white/10 hover:shadow-md transition duration-200 rounded px-4 py-2">Widget for real-time recommendations right on your phone.</li>
        </ul>
      </section>
