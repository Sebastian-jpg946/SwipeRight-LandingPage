import { motion } from 'framer-motion';
import React from "react";

const Differentiators: React.FC = () => {
  return (
    <motion.section
      className="mt-28 w-full max-w-4xl text-left"
      id="what-makes-us-different"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6">What Makes SwipeRight Different?</h2>
      <ul className="list-disc list-inside text-white space-y-4">
        <li><strong>More Than Cashback:</strong> Discover perks like travel insurance, purchase protection, and cardholder deals, not just points.</li>
        <li><strong>Privacy Focused:</strong> No account linking or sensitive data collection. Safe, simple tracking.</li>
        <li><strong>Clean and Easy to Use:</strong> Simple layout, real-time alerts, no cluttered dashboards.</li>
        <li><strong>Smarter Rewards Tracking:</strong> Get bonus alerts, spending tips, and category updates to maximize every swipe.</li>
      </ul>
    </motion.section>
  );
};

export default Differentiators;