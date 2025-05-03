import TopBar from "@/components/shared/TopBar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Fragment, ReactNode } from "react";

interface CommonLayoutProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <Fragment>
      <TopBar />
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </Fragment>
  );
}
