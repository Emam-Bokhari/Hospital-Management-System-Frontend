import Image from "next/image";
import logo from "@/assets/Logo.png";
import Container from "./Container";
import NavigationLink from "./NavigationLink";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { CiWarning } from "react-icons/ci";
import { Button } from "../ui/button";

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
          <Button className="bg-[#415be7]  hover:bg-[#2f44b3] text-white cursor-pointer  focus-visible:ring-[#2f44b3]">
            <span className="flex items-center gap-2">
              <IoNotificationsOutline className="size-5" /> Notice Board
            </span>
          </Button>
          <Button className="bg-[#415be7]  hover:bg-[#2f44b3] text-white cursor-pointer  focus-visible:ring-[#2f44b3]">
            <span className="flex items-center gap-2">
              <CiWarning className="size-5" /> Complaint
            </span>
          </Button>
          <Button
            variant="outline"
            className="  cursor-pointer text-[#09090B] "
          >
            <span className="flex items-center gap-2">
              <IoMdLogIn className="size-5" /> Login
            </span>
          </Button>
        </div>
      </div>
    </Container>
  );
}
