import Image from "next/image";
import logo from "@/assets/Logo.png";
import Container from "./Container";
import NavigationLink from "./NavigationLink";
import CustomButton from "../ui/CustomButton";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { CiWarning } from "react-icons/ci";

export default function Navbar() {
  return (
    <Container>
      <div className="border-2 border-red-500 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* logo */}
          <Image
            width={100}
            height={100}
            src={logo}
            alt="Dreams Care Logo"
            className="border-2 border-blue-500"
          />
          {/* nav link */}
          <ul className="flex gap-10">
            <li>
              <NavigationLink path="/" route="Home" />
            </li>
            <li>
              <NavigationLink path="/about-us" route="About Us" />
            </li>
            <li>
              <NavigationLink path="/doctors" route="Doctors" />
            </li>
            <li>
              <NavigationLink path="/departments" route="Departments" />
            </li>
            <li>
              <NavigationLink path="/services" route="Services" />
            </li>
            <li>
              <NavigationLink path="/contact-us" route="Contact Us" />
            </li>
          </ul>
        </div>

        {/* action buttons */}
        <div className="flex items-center gap-5">
          <CustomButton>
            <span className="flex items-center gap-2">
              Notice Board <IoNotificationsOutline className="size-5" />
            </span>
          </CustomButton>
          <CustomButton>
            <span className="flex items-center gap-2">
              Complaint <CiWarning className="size-5" />
            </span>
          </CustomButton>
          <CustomButton>
            <span className="flex items-center gap-2">
              Login <IoMdLogIn className="size-5" />
            </span>
          </CustomButton>
        </div>
      </div>
    </Container>
  );
}
