import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { Bayon } from "next/font/google";
import "./globals.css";
import React from "react";

const bayon = Bayon({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Khaled Elsakka | Personal Trainer - Achieve Your Fitness Goals",
  description:
    "Achieve your fitness goals with personalized training. We create custom workout plans for weight loss, muscle building, and overall health. Start your journey today!",
  keywords: [
    "personal trainer gym",
    "fitness training",
    "custom workout plans",
    "weight loss",
    "muscle building",
    "certified personal trainers",
    "egypt cairo gym",
    "health and wellness",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bayon.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
