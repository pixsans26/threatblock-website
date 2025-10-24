
import TrustedBadges from "@/components/badges";
import Hero from "@/components/hero";
import ServiceSlide from "@/components/service_slide";
import AboutHome from "@/components/about";
import ClientSlider from "@/components/clients";
import Reviews from "@/components/reviews";
import Blogs from "@/components/blogs";
import Industries from "@/components/industries";
import WorkProcess from "@/components/work_process";
import RecognisationSlider from "@/components/recognisation";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Expert Cybersecurity Services & Solutions | ThreatBlock',
  description: 'Protect your business with ThreatBlock\'s complete cybersecurity solutions. We offer 24/7 monitoring, pentesting, and compliance. Get a free consultation.',
  keywords: ['cybersecurity', 'cybersecurity services', 'managed security', 'penetration testing', 'data protection', 'network security', 'cybersecurity company']
};

export default function Home() {


  return (
    <>
      <Hero />
      <TrustedBadges />
      <ServiceSlide />
      <AboutHome />
      <WorkProcess />
      <Industries />
      <ClientSlider />
      <Reviews />
      <RecognisationSlider />
      <Blogs />
    </>
  );
}
