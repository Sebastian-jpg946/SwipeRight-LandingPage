import React from "react";
import { motion } from "framer-motion";

const SecurityPrivacy: React.FC = () => {
  return (
    <motion.section
      className="mt-28 w-full max-w-3xl text-left"
      id="security"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Security & Privacy</h2>
      <p className="text-white mb-4">
        SwipeRight is designed with your privacy in mind. We don’t collect or store any credit card numbers or sensitive financial data. Instead, we only ask for your name, email, and the cards you own, so we can personalize your reward recommendations.
      </p>
      <p className="text-white mb-4">
        All data is protected with <strong>TLS/HTTPS encryption</strong>, meaning it’s securely wrapped when it travels between your device and our servers — the same technology used by banks and other secure apps.
      </p>
      <p className="text-white">
        The backend will be hosted on encrypted cloud infrastructure like AWS or Supabase, ensuring strong protection at every level. We're building this app with simplicity and safety at its core.
      </p>
    </motion.section>
  );
};

export default SecurityPrivacy;