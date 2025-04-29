// ==================== Core Libraries ====================
"use client";
import React, { useEffect, useState } from "react";

// ==================== Third-party Libraries ====================
import confetti from 'canvas-confetti';

import Typewriter from 'typewriter-effect';
import Head from 'next/head';
import { motion } from 'framer-motion';

// ==================== Supabase Client ====================
import { supabase } from '../lib/supabaseClient';

// ==================== Data ====================
import cardOptions from './data/cards';

// ==================== Components (Sections) ====================
import ProgressUpdates from "../components/ProgressUpdates";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import MidPageCTA from "@/components/sections/MidPageCTA";
import FeaturePreview from "@/components/sections/FeaturePreview";
import Features from "@/components/sections/Features";
import ValueVisualization from "../components/sections/ValueVisualization";
import Differentiators from "@/components/sections/Differentiators";
import SecurityPrivacy from "@/components/sections/SecurityPrivacy";
import FAQ from "@/components/sections/FAQ";
import WaitlistForm from "@/components/sections/WaitlistForm";
import SurveyForm from "@/components/sections/SurveyForm";
import FounderNote from "@/components/sections/FoundersNote";
import FoundersNote from "@/components/sections/FoundersNote";
import timelineSteps from "@/components/sections/TimelineSteps";

// ==================== Dynamic-only Imports ====================
import dynamic from 'next/dynamic';
const ClientLottie = dynamic(() => import('../components/ClientLottie'), {
  ssr: false,
});



// === Section: Main Home Page Component ===
const Home: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [showOtherCardInput, setShowOtherCardInput] = useState(false);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // --- useEffect: Roladex Animation and Scroll Progress Bar ---
  useEffect(() => {
    // --- Roladex Card Animation ---
    // Animates card previews on scroll in the rolodex container (if present).
    const handleScroll = () => {
      const container = document.querySelector('#roladex-container');
      if (!container) return;
      const cards = container.querySelectorAll('.card-preview');
      const scrollTop = container.scrollTop;

      cards.forEach((card, idx) => {
        const cardHeight = 300;
        const offset = idx * cardHeight;
        const progress = Math.min(Math.max((scrollTop - offset) / cardHeight, 0), 1);
        const rotateX = progress * 90; // Positive flip on scroll down
        const translateY = progress * 30;
        const opacity = 1 - progress;

        (card as HTMLElement).style.transform = `rotateX(${rotateX}deg) translateY(${translateY}px)`;
        (card as HTMLElement).style.opacity = `${opacity}`;
        (card as HTMLElement).style.zIndex = `${cards.length - idx}`;
      });
    };
    // --- End Roladex Card Animation ---

    // --- Smooth Scroll Progress Bar ---
    // Animates the progress bar at the top based on window scroll position.
    const progressBar = document.getElementById('scroll-progress');
    let latestScrollTop = 0;
    let currentProgress = 0;

    const updateProgressBar = () => {
      if (progressBar) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetProgress = (window.scrollY / scrollHeight) * 100;
        currentProgress += (targetProgress - currentProgress) * 0.1; // smoothing factor
        progressBar.style.width = `${currentProgress}%`;
      }
      requestAnimationFrame(updateProgressBar);
    };

    updateProgressBar();
    // --- End Smooth Scroll Progress Bar ---

    const scrollBox = document.getElementById('roladex-container');
    scrollBox?.addEventListener('scroll', handleScroll);
    return () => {
      scrollBox?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- useEffect: Fetch Waitlist Signup Count and Animate ---
  useEffect(() => {
    const fetchWaitlistCount = async () => {
      const { count, error } = await supabase
        .from('waitlist_signups')
        .select('*', { count: 'exact', head: true });
      
      if (!error && typeof count === 'number') {
        setWaitlistCount(count);

        // Animate toward the count
        let current = 0;
        const increment = Math.ceil(count / 50);
        const interval = setInterval(() => {
          current += increment;
          if (current >= count) {
            current = count;
            clearInterval(interval);
          }
          setAnimatedCount(current);
        }, 20);
      } else {
        console.error("❌ Failed to fetch waitlist count", error, count);
      }
    };

    fetchWaitlistCount();
  }, []);

  return (
    <>
      {/* === Section: Head (SEO & meta tags) === */}
      <Head>
        <title>SwipeRight – Credit Card Reward Tracker & Bonus Alerts App</title>
        <meta name="keywords" content="credit card rewards, rotating categories, cashback bonuses, card perks, points optimization, credit card promo tracking, reward multipliers" />
        <meta name="description" content="SwipeRight helps you track rotating credit card bonuses, get real-time reward alerts, and never miss a 5x multiplier again." />
        <meta property="og:title" content="SwipeRight – Maximize Your Credit Card Rewards" />
        <meta property="og:description" content="Track your card bonuses, get personalized recommendations, and join the waitlist for beta access." />
        <meta property="og:image" content="/social-preview.png" />
        <meta property="og:url" content="https://getswiperight.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SwipeRight – Maximize Your Credit Card Rewards" />
        <meta name="twitter:description" content="Get rewarded smarter. Real-time credit card tracking for max points and cashback." />
        <meta name="twitter:image" content="/social-preview.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      {/* === Section: Header === */}
      <header className="w-full px-6 py-4 bg-black shadow-sm text-white">
        <div className="max-w-6xl mx-auto flex justify-start">
          <h1 className="text-2xl font-bold text-white font-sans">SwipeRight</h1>
        </div>
      </header>
      {/* === Section: Navigation Bar === */}
      <nav className="sticky top-0 z-50 w-full bg-black shadow-sm text-white">
        <div className="max-w-6xl mx-auto flex justify-center gap-10 py-3 text-sm font-medium text-white">
          <a href="#feature-preview" className="hover:text-gray-300 transition" aria-label="Navigate to Why SwipeRight section">Why SwipeRight</a>
          <a href="#features" className="hover:text-gray-300 transition" aria-label="Navigate to Features section">Features</a>
          <a href="#value-visualization" className="hover:text-gray-300 transition" aria-label="Navigate to Demo section">Demo</a>
          <a href="#faq" className="hover:text-gray-300 transition" aria-label="Navigate to FAQ section">FAQ</a>
          <a href="/contact" className="hover:text-gray-300 transition" aria-label="Navigate to Contact section">Contact</a>
        </div>
        <div className="h-1 bg-gray-200 w-full">
          <div
            id="scroll-progress"
            className="h-1 bg-indigo-600 origin-left transition-all duration-150 ease-out"
            style={{ width: '0%' }}
          ></div>
        </div>
      </nav>
      {/* === Section: Contact Modal === */}
      {contactModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white text-black rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <form action="mailto:hello@getswiperight.com" method="POST" encType="text/plain">
              <textarea name="message" placeholder="Your message..." className="w-full p-2 border rounded mb-4" rows={5} required></textarea>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setContactModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-transform duration-300 hover:scale-105"
                  aria-label="Cancel sending a message"
                >Cancel</button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-transform duration-300 hover:scale-105"
                  aria-label="Send a message to SwipeRight founder"
                >Send</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* === Section: Main Content (Main Landing Page) === */}
      <motion.main
        className="flex flex-col items-center min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-16 md:py-20 text-center font-sans"
        layout
        initial={false}
      >

        {/* === Section: Hero === */}
        <Hero />

        {/* === Section: Timeline (Roladex) === */}
        <Timeline steps={timelineSteps} />

        {/* === Section: Mid-page CTA === */}
        <MidPageCTA animatedCount={animatedCount} />

        {/* === Section: Feature Preview === */}
        <FeaturePreview />

        {/* === Section: Features (Accordion) === */}
        <Features openIndex={openIndex} toggle={toggle} />

        {/* === Section: Value Visualization (Video) === */}
        <ValueVisualization />

        {/* === Section: Differentiators === */}
        <Differentiators />

        {/* === Section: Security and Privacy === */}
        <SecurityPrivacy />

        {/* === Section: FAQ === */}
        <FAQ openIndex={openIndex} toggle={toggle} />

        {/* === Section: Waitlist Form === */}
        <WaitlistForm />

        {/* === Section: Optional Beta Survey === */}
        <SurveyForm />

        {/* === Section: Progress Updates === */}
        <section className="mt-28 w-full max-w-3xl text-left" id="updates" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white mb-4">SwipeRight Progress Updates</h2>
          <p className="text-white mb-4">Follow our journey as we build SwipeRight in public. Here’s what we’re working on:</p>
          <div className="prose prose-invert max-w-none">
            <ProgressUpdates />
          </div>
        </section>

        {/* === Section: Founder Note === */}
        <FoundersNote />

        {/* === Section: Footer === */}
      <footer className="mt-28 w-full text-center text-sm text-white py-6 border-t bg-black">
        <p>© {new Date().getFullYear()} SwipeRight. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 md:gap-8">
          <a href="https://github.com/Sebastian-jpg946" target="_blank" rel="noopener noreferrer" aria-label="Visit SwipeRight GitHub profile" className="hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-6 w-6">
              <path d="M12 .5C5.5.5.5 5.6.5 12.2c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2.2c-3.4.7-4-1.5-4-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1 .1 1.5-.6 1.7-.9.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.4.1-2.8 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0C18 5.7 19 6 19 6c.6 1.4.2 2.5.1 2.8.7.8 1.2 1.8 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.3.7.9.7 1.8v2.7c0 .3.2.7.8.6 4.8-1.6 8.2-6 8.2-11.2C23.5 5.6 18.5.5 12 .5z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sebastian-tabarez" target="_blank" rel="noopener noreferrer" aria-label="Visit SwipeRight LinkedIn profile">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6 hover:opacity-75 transition-opacity" />
          </a>
          <a href="mailto:hello@getswiperight.com" aria-label="Send an email to SwipeRight team" className="hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-6 w-6">
              <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-8 8.99-8-8.99V20h16V6.41z"/>
            </svg>
          </a>
        </div>
        <p className="mt-4 text-white text-sm">
          Want to reach out? <a href="/contact" className="underline hover:text-purple-400" aria-label="Navigate to SwipeRight Contact page">Contact me</a>.
        </p>
      </footer>
      </motion.main>
    </>
  );
} 
export default Home;