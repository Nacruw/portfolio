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
        
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTQ8C6TJ');</script>
<!-- End Google Tag Manager -->

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Nacruw, Ryuko, Portfolio, Front-end, Game dev, Developer, Web developer, Indie developer, Marwane Birrou, React, Nextjs, Marwane" />
        <meta name="author" content="Marwane Birrou" />
        <meta name="description" content="Portfolio website of Marwane Birrou (Nacruw), a front-end and game developer." />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MTQ8C6TJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        {children}
      </body>
    </html>
  );
}
