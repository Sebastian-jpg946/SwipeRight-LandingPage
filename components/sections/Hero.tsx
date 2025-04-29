"use client";
import { motion } from 'framer-motion';
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <motion.section
      className="relative w-full max-w-3xl text-center mb-20 px-4"
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-snug tracking-tight mb-6 whitespace-pre-line text-left w-full min-h-[220px] pl-6">
            <div className="min-h-[180px] h-[180px] w-full text-left pl-6">
              <Typewriter
                options={{
                  strings: ['Never Miss\na 5x\nReward again'],
                  autoStart: true,
                  loop: false,
                  delay: 50,
                }}
              />
            </div>
          </h1>
          <p className="text-xl text-white mb-8">
            We track the promos. You get the points.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;