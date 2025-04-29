"use client";

import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("success");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-12 font-sans">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-center text-gray-300 mb-10">Have a question, idea, or just want to say hi? Send a message below!</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-900 p-8 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="px-4 py-3 rounded-md bg-black border border-gray-700 focus:outline-none focus:border-pink-500 placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="px-4 py-3 rounded-md bg-black border border-gray-700 focus:outline-none focus:border-pink-500 placeholder-gray-400"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="px-4 py-3 rounded-md bg-black border border-gray-700 focus:outline-none focus:border-pink-500 placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Send Message
          </button>
          {formStatus === "success" && (
            <p className="text-green-400 text-center mt-4">Thank you for your message! 🚀</p>
          )}
        </form>
      </div>
    </main>
  );
};

export default ContactPage;