import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "RetroLoop Archive | Vintage & Select",
  description: "Timeless Pieces for Modern Souls. Curated Vintage Archive in Hong Kong.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased min-h-screen flex flex-col bg-retro-beige text-retro-black`}
      >
        {children}
      </body>
    </html>
  );
}
