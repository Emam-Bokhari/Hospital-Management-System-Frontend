import AboutUsSection from "@/components/modules/Home/AboutUsSection";
import Banner from "@/components/modules/Home/Banner";

import DoctorSection from "@/components/modules/Home/DoctorSection";
import OurServicesSection from "@/components/modules/Home/OurServicesSection";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import { Fragment } from "react";
import WhyChooseUsSection from "@/components/modules/Home/WhyChooseUsSection";
import SpecializationSection from "@/components/modules/Home/SpecializationSection";
import TestimonialSection from "@/components/modules/Home/TestimonialSection";
import BlogSection from "@/components/modules/Home/BlogSection";
import FaqSection from "@/components/modules/Home/FaqSection";
import ScrollToTop from "@/components/modules/Home/ScrollToTop";

export default function HomePage() {
  return (
    <Fragment>
      <Banner />
      <AboutUsSection />
      <OurServicesSection />
      <SpecializationSection />
      <DoctorSection />
      <HowItWorks />
      <WhyChooseUsSection />
      <TestimonialSection />
      <BlogSection />
      <FaqSection />
      <ScrollToTop />
    </Fragment>
  );
}
