import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nacruw's Portfolio",
  description: "Portfolio website of Marwane Birrou (Nacruw)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Nacruw, Ryuko, Portfolio, Front-end, Game dev, Developer, Web developer, Indie developer, Marwane Birrou, React, Nextjs, Marwane" />
        <meta name="author" content="Marwane Birrou" />
        <meta name="description" content="Portfolio website of Marwane Birrou (Nacruw), a front-end and game developer." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
