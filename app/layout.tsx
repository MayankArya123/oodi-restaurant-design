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
  title: "OODI Restaurant Design",
  description: "OODI Restaurant Design is a modern and elegant restaurant design that combines functionality with aesthetics. The design features a spacious dining area with comfortable seating, a stylish bar area, and an open kitchen that allows guests to see the chefs at work. The color palette is warm and inviting, with earthy tones and natural materials used throughout the space. The lighting is carefully designed to create a cozy and intimate atmosphere, while also highlighting the architectural features of the restaurant. Overall, OODI Restaurant Design is a perfect blend of style and practicality, making it an ideal choice for any dining establishment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
