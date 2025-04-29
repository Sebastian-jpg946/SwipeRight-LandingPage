'use client';

import React from 'react';

export default function DowntimePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 space-y-8 font-sans text-center">
      <div className="animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">We’re polishing things up!</h1>
        <p className="mt-4 text-lg sm:text-xl">SwipeRight is undergoing scheduled maintenance. We’ll be back shortly!</p>
        <p className="text-md mt-6">For urgent matters, email us at <a href="mailto:hello@getswiperight.com" className="underline hover:text-gray-300">hello@getswiperight.com</a>.</p>
      </div>
    </main>
  );
}