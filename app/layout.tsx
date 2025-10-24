import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Ubuntu } from 'next/font/google'; // 1. Import the font
import "./globals.css";
import Footer from "@/components/footer";
import NavbarMobile from "@/components/navbar/navMobile";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from "@/components/navbar/navbar";

// analytics ID
const analyticsID = process.env.NEXT_PUBLIC_GA_ID
const gtmID = process.env.NEXT_PUBLIC_GTM_ID

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

// 2. Configure the font with subsets and desired weights
const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'], // Add all the weights you need
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics gaId={analyticsID as string} />
        <GoogleTagManager gtmId={gtmID as string} />
      </head>
      <body
        className={ubuntu.className}>
        <Navbar />
        <NavbarMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
