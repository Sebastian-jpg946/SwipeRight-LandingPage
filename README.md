# SwipeRight

SwipeRight is an upcoming app designed to help users maximize their credit card rewards by delivering monthly and quarterly promotion updates directly to their lock screens through a personalized widget experience.

This repository contains the pre-launch modular landing page for SwipeRight, built to capture early user interest and showcase the vision behind the app.

## Project Overview

SwipeRight enables users to:

- Create an account and select the credit cards they own
- Receive dynamic monthly or quarterly promotion updates based on their specific cards
- Display personalized rewards widgets on their lock screens, with a roladex-style scrollable interface
- Flip cards within the widget to view hidden perks, benefits, and features associated with their cards beyond points or cashback
- Ask banking and rewards-related questions to an integrated chatbot (e.g., "What qualifies as dining for American Express?") and receive immediate, AI-powered answers

The main app will provide a seamless, proactive way for users to stay informed about maximizing their financial rewards.

## Future Roadmap

**MVP 1:**
- User account creation and card selection
- Lock screen widget with roladex-style card browsing
- Promotion and points update notifications
- AI chatbot integration for card benefit FAQs

**MVP 2:**
- Smart location tracking to surface nearby card perks
- Browser activity detection to provide real-time perk reminders
- Enhanced personalization and proactive reward alerts

## Landing Page Features (This Repository)

- Fully modular React component structure
- Smooth Framer Motion scroll-based animations
- Responsive mobile-first design with TailwindCSS
- Dynamic timeline visualization
- FAQ and feature accordion sections with animated expand/collapse
- Waitlist signup form integrated with Supabase, storing user signups in a live database
- Survey form for capturing user interest, responses also stored in Supabase
- Automated confirmation email system for beta waitlist signups using Resend
- Markdown-powered progress updates section
- Clean SEO meta setup and responsive favicon
- Deployed through Vercel for fast, reliable global delivery

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Supabase
- Vercel Deployment

## Getting Started (Landing Page)

To run SwipeRight Landing Page locally:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## License

This project is open-source for educational and portfolio demonstration purposes.
