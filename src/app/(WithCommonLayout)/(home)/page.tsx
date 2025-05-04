import AboutUsSection from "@/components/modules/Home/AboutUsSection";
import Banner from "@/components/modules/Home/Banner";
import DepartmentSection from "@/components/modules/Home/DepartmentSection";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <Banner />
      <AboutUsSection />
      <DepartmentSection />
    </Fragment>
  );
}
