import Image from "next/image";
import logo from "@/assets/Logo.png";
import Container from "./Container";
import NavigationLink from "./NavigationLink";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { CiWarning } from "react-icons/ci";
import { Button } from "../ui/button";
import {
  FiMenu,
  FiHome,
  FiInfo,
  FiUsers,
  FiGrid,
  FiActivity,
  FiPhone,
  FiBell,
  FiLogIn,
  FiAlertTriangle,
} from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const mobileMenuItems = [
  {
    icon: (
      <FiHome className="mr-2  group-data-[highlighted]:text-[#415be7] group-focus:text-[#415be7] text-[#09090B]" />
    ),
    label: "Home",
    href: "#",
  },
  {
    icon: (
      <FiInfo className="mr-2 group-data-[highlighted]:text-[#415be7] group-focus:text-[#415be7] text-[#09090B]" />
    ),
    label: "About Us",
    href: "#",
  },
  {
    icon: (
      <FiUsers className="mr-2 group-data-[highlighted]:text-[#415be7] group-focus:text-[#415be7] text-[#09090B]" />
    ),
    label: "Doctors",
    href: "#",
  },
  {
    icon: (
      <FiGrid className="mr-2 group-data-[highlighted]:text-[#415be7] group-focus:text-[#415be7] text-[#09090B]" />
    ),
    label: "Departments",
    href: "#",
  },
  {
    icon: (
      <FiActivity className="mr-2 group-data-[highlighted]:text-[#415be7] group-focus:text-[#415be7] text-[#09090B]" />
    ),
    label: "Services",
    href: "#",
  },
  {
    icon: (
      <FiPhone className="mr-2 group-data-[highlighted]:text-[#415be7] group-focus:text-[#415be7] text-[#09090B]" />
    ),
    label: "Contact Us",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <Container>
      <div className="border-2 border-red-500 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* logo */}
          <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]">
            <Image
              fill
              priority
              src={logo}
              alt="Dreams Care Logo"
              className="border-2 border-blue-500"
            />
          </div>
          {/* nav link */}
          <ul className="hidden lg:flex gap-10 ">
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
        <div className="hidden xl:flex items-center gap-5">
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
        {/* mobile view nav link */}
        <div className="block xl:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FiMenu className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Explore</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {mobileMenuItems.map((item) => (
                <DropdownMenuItem
                  key={item.label}
                  className="group data-[highlighted]:bg-blue-100 data-[highlighted]:text-[#415be7] focus:bg-blue-100 focus:text-[#415be7]"
                >
                  {item.icon}
                  <span className="text-[#09090B]">{item.label}</span>
                </DropdownMenuItem>
              ))}

              <DropdownMenuSeparator />
              <DropdownMenuItem className="group data-[highlighted]:bg-blue-100 data-[highlighted]:text-[#415be7] focus:bg-blue-100 focus:text-[#415be7] text-[#09090B]">
                <FiBell className="mr-2 group-data-[highlighted]:text-[#415be7] group-focus:text-[#415be7] text-[#09090B]" />
                Notice
              </DropdownMenuItem>
              <DropdownMenuItem className="group data-[highlighted]:bg-blue-100 data-[highlighted]:text-[#415be7] focus:bg-blue-100 focus:text-[#415be7] text-[#09090B]">
                <FiAlertTriangle className="mr-2 group-data-[highlighted]:text-[#415be7] group-focus:text-[#415be7] text-[#09090B]" />
                Complaint
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="group data-[highlighted]:bg-blue-100 data-[highlighted]:text-[#415be7] focus:bg-blue-100 focus:text-[#415be7] text-[#09090B]">
                <FiLogIn className="mr-2 group-data-[highlighted]:text-[#415be7] group-focus:text-[#415be7] text-[#09090B]" />
                LogIn
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </Container>
  );
}
