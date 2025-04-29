import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwipeRight – Maximize Your Credit Card Rewards",
  description:
    "SwipeRight helps you track and optimize your credit card points. Discover which card to use for 5x, 3x, and 2x promos every month, personalized to you.",
  openGraph: {
    title: "SwipeRight – Maximize Your Credit Card Rewards",
    description:
      "Track rotating categories and bonus multipliers across your cards. Swipe smarter and never miss out on rewards.",
    url: "https://getswiperight.com",
    siteName: "SwipeRight",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "SwipeRight App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwipeRight – Maximize Your Credit Card Rewards",
    description:
      "Track rotating categories and bonus multipliers across your cards. Swipe smarter and never miss out on rewards.",
    images: ["/social-preview.png"],
    creator: "@swiperewardbot",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
