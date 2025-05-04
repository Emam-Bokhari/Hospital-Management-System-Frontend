import AboutUsSection from "@/components/modules/Home/AboutUsSection";
import Banner from "@/components/modules/Home/Banner";
import DepartmentSection from "@/components/modules/Home/DepartmentSection";
import DoctorSection from "@/components/modules/Home/DoctorSection";
import OurServicesSection from "@/components/modules/Home/OurServicesSection";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <Banner />
      <AboutUsSection />
      <OurServicesSection />
      <DepartmentSection />
      <DoctorSection />
      <HowItWorks />
    </Fragment>
  );
}
