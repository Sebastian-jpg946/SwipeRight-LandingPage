"use client";
import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const ProgressUpdates: React.FC = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch("/progress-updates.md");
        if (!response.ok) {
          throw new Error("Failed to fetch progress updates");
        }
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <motion.section
      id="progress-updates"
      className="mt-28 w-full max-w-4xl mx-auto text-left px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Progress Updates
      </h2>
      <div className="prose prose-invert lg:prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({node, ...props}) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-3xl font-semibold mt-6 mb-3" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
            p: ({node, ...props}) => <p className="mt-2 mb-4" {...props} />,
            li: ({node, ...props}) => <li className="ml-4 list-disc" {...props} />,
            ul: ({node, ...props}) => <ul className="ml-6 mt-2 mb-4" {...props} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </motion.section>
  );
};

export default ProgressUpdates;