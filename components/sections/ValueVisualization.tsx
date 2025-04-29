"use client";
import { motion } from 'framer-motion';
import React from "react";

const ValueVisualization = () => {
  return (
    <motion.section
      className="mt-28 w-full max-w-4xl text-center"
      id="value-visualization"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6">See It in Action</h2>
      <p className="text-lg text-white mb-4">
        Visual demo: preview your rotating category widget.
      </p>
      <div className="w-full flex justify-center">
        <div className="relative w-[300px] md:w-[360px] rounded-[2rem] overflow-hidden shadow-xl border-[12px] border-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/animations/widget_animation_v3.mp4" type="video/mp4" />
            Visual preview of a rotating credit card reward category widget in the SwipeRight app.
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </motion.section>
  );
};

export default ValueVisualization;