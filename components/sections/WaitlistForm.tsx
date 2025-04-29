"use client";

import { motion } from 'framer-motion';
import React, { useState } from "react";
import confetti from "canvas-confetti";
import { supabase } from "../../lib/supabaseClient";

const WaitlistForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("✅ Submission started");
    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      contact_ok: (form.elements.namedItem('contact_ok') as HTMLInputElement).checked,
    };
    console.log("✅ Form data collected", data);

    const { error } = await supabase.from('waitlist_signups').insert([data]);
    if (!error) {
      console.log("✅ Data inserted into Supabase");

      try {
        console.log("📤 Sending confirmation email");
        await fetch("/api/send-confirmation-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: data.name, email: data.email }),
        });
        console.log("✅ Email function call successful");
      } catch (err) {
        console.error("❌ Email sending error", err);
      }

      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(() => setSubmitted(false), 4000);
      form.reset();
      console.log("✅ Form reset and submission state updated");
    } else {
      alert('Something went wrong. Please try again.');
      console.error("❌ Supabase insert error", error);
    }
  };

  return (
    <motion.section
      className="pt-28 mt-28 w-full max-w-3xl text-left"
      id="waitlist-form"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Join the Waitlist</h2>
      <p className="text-white mb-6">Let us know your email and the cards you use — we’ll notify you when SwipeRight launches and may follow up for your input.</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" className="w-full px-4 py-2 border rounded placeholder-gray-300 text-white" />
        <input type="email" name="email" required placeholder="Your email" className="w-full px-4 py-2 border rounded placeholder-gray-300 text-white" />
        <label className="flex items-center space-x-2 text-sm text-white">
          <input type="checkbox" name="contact_ok" className="border-gray-300" />
          <span>Okay to contact me for feedback?</span>
        </label>
        <p className="text-xs text-gray-400 mt-1">We’ll never spam you. Used only to personalize your experience.</p>
        <button
          type="submit"
          className="px-6 py-3 bg-white text-black rounded-full font-semibold transition-transform duration-300 ease-in-out hover:bg-purple-500 hover:text-white hover:shadow-lg hover:scale-105 min-w-[150px] min-h-[48px] mt-4"
          aria-label="Submit your email to join SwipeRight waitlist"
        >
          Submit
        </button>
      </form>
      {submitted && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
          🎉 You're on the waitlist! We'll let you know when SwipeRight is ready.
        </div>
      )}
    </motion.section>
  );
};

export default WaitlistForm;