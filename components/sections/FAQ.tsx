import { motion, AnimatePresence } from 'framer-motion';
import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  openIndex: number | null;
  toggle: (index: number) => void;
}

const faqItems: FAQItem[] = [
  {
    question: "Do I have to link my credit cards?",
    answer: "No, the app only asks which cards you own. No sensitive data required.",
  },
  {
    question: "How does it know what categories are active?",
    answer: "Our system tracks and updates promo categories from major issuers monthly.",
  },
  {
    question: "Does this app cost anything?",
    answer: "It’s free for beta users who join the waitlist.",
  },
];

const FAQ: React.FC<FAQProps> = ({ openIndex, toggle }) => {
  return (
    <div className="faq-wrapper">
      <motion.section
        className="mt-28 w-full max-w-4xl text-left min-h-[600px]"
        id="faq"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        layout
      >
        <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <motion.ul
          className="space-y-4 text-white"
          layout
          initial={false}
        >
          {faqItems.map((item, i) => (
            <motion.li
              key={i}
              onClick={() => toggle(i)}
              className="cursor-pointer border border-gray-200 p-4 rounded-md hover:shadow transition relative"
              layout
              initial={false}
              transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
            >
              <div className="font-semibold text-white flex justify-between items-center">
                {item.question}
                <span
                  className={`transition-transform duration-200 transform ${
                    openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="mt-2 text-white overflow-y-auto max-h-48 pr-2"
                    initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{ opacity: 1, height: "auto", paddingTop: 8, paddingBottom: 8 }}
                    exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </div>
  );
};

export default FAQ;