import AboutUsSection from "@/components/modules/Home/AboutUsSection";
import Banner from "@/components/modules/Home/Banner";
import DepartmentSection from "@/components/modules/Home/DepartmentSection";
import DoctorSection from "@/components/modules/Home/DoctorSection";
import WorkingProcess from "@/components/modules/Home/WorkingProcess";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <Banner />
      <AboutUsSection />
      <DepartmentSection />
      <DoctorSection />
      <WorkingProcess />
    </Fragment>
  );
}
