import AboutUs from "@/components/modules/Home/AboutUs";
import Banner from "@/components/modules/Home/Banner";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <Banner />
      <AboutUs />
    </Fragment>
  );
}
