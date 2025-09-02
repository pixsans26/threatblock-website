import TrustedBadges from "@/components/badges";
import Hero from "@/components/hero";
import ServiceSlide from "@/components/service_slide";
import AboutHome from "@/components/about";
import ClientSlider from "@/components/clients";
import Reviews from "@/components/reviews";
import Blogs from "@/components/blogs";
import Industries from "@/components/industries";
import WorkProcess from "@/components/work_process";



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
      <Blogs />
    </>
  );
}
