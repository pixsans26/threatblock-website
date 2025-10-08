import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google'; // 1. Import the font
import "./globals.css";
import Footer from "@/components/footer";
import NavbarMobile from "@/components/navbar/navMobile";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from "@/components/navbar/navbar";

// 2. Configure the font with subsets and desired weights
const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'], // Add all the weights you need
});

export const metadata: Metadata = {

  title: "ThreatBlock - Cyber Security Consultancy",
  description: "The Best Cyber Security Consultant",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
