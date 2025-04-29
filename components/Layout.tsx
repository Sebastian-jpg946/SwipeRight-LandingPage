"use client";

import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      if (scrollProgress) {
        scrollProgress.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();

  return (
    <>
      <Head>
        <title>SwipeRight – Maximize Your Credit Card Rewards</title>
        <meta name="description" content="SwipeRight helps you track rotating credit card bonuses, get real-time reward alerts, and never miss a 5x multiplier again." />
        <meta property="og:title" content="SwipeRight – Maximize Your Credit Card Rewards" />
        <meta property="og:description" content="Track your card bonuses, get personalized recommendations, and join the waitlist for beta access." />
        <meta property="og:image" content="/social-preview.png" />
        <meta property="og:url" content="https://getswiperight.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SwipeRight – Maximize Your Credit Card Rewards" />
        <meta name="twitter:description" content="Get rewarded smarter. Real-time credit card tracking for max points and cashback." />
        <meta name="twitter:image" content="/social-preview.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200">
        <div
          id="scroll-progress"
          className="h-1 bg-indigo-600 origin-left transition-all duration-150 ease-out"
          style={{ width: '0%' }}
        ></div>
      </div>

      {/* Navbar */}
      <header className="w-full px-6 py-4 bg-black shadow-sm text-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">SwipeRight</a>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#feature-preview" className="hover:text-gray-300 transition">Why SwipeRight</a>
            <a href="#features" className="hover:text-gray-300 transition">Features</a>
            <a href="#value-visualization" className="hover:text-gray-300 transition">Demo</a>
            <a href="#faq" className="hover:text-gray-300 transition">FAQ</a>
            <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-16 md:py-20 text-center font-sans">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-28 w-full text-center text-sm text-white py-6 border-t bg-black">
        <p>© {new Date().getFullYear()} SwipeRight. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-6 text-white text-xs">
          <a href="/privacy-policy.html" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="/terms-of-use.html" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Terms of Use</a>
          <a href="mailto:hello@getswiperight.com" className="hover:text-gray-300">Contact</a>
          <a href="https://www.linkedin.com/in/sebastian-tabarez" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Sebastian-jpg946" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  );
};

export default Layout;