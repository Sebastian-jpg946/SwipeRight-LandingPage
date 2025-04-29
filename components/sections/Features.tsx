"use client";
import { motion, AnimatePresence } from 'framer-motion';
import React from "react";

type Props = {
  openIndex: number | null;
  toggle: (index: number) => void;
};

const featureItems = [
  {
    title: "Best card by category (Dining, Gas, Grocery, etc.)",
    detail:
      "We match your cards to the right categories each month so you never leave rewards behind.",
  },
  {
    title: "Push notifications for new promos",
    detail:
      "Get notified right when your card updates its multipliers or limited-time bonuses.",
  },
  {
    title: "Clean dashboard and home screen widget",
    detail:
      "Glanceable design helps you know exactly what to swipe where — in real time.",
  },
  {
    title: "Auto-tracking of rotating and monthly bonuses",
    detail:
      "No manual tracking — we keep your bonus calendar updated for you.",
  },
];

export default function Features({ openIndex, toggle }: Props) {
  return (
    <motion.section
      className="mt-16 w-full max-w-3xl text-left"
      id="features"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
      <ul className="space-y-4 text-white">
        {featureItems.map((item, i) => (
          <li
            key={i}
            onClick={() => toggle(i)}
            className="cursor-pointer border border-gray-200 p-4 rounded-md hover:shadow transition relative"
            role="button"
            aria-expanded={openIndex === i}
            aria-controls={`feature-details-${i}`}
          >
            <div className="font-medium text-white">{item.title}</div>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  id={`feature-details-${i}`}
                  className="mt-2 text-sm text-white"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.detail}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
