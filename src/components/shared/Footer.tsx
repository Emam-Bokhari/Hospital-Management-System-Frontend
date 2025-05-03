import Image from "next/image";
import Container from "./Container";
import logo from "@/assets/Logo_Footer.png";
import { Button } from "../ui/button";
import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Doctors", href: "#" },
  { label: "Departments", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact Us", href: "#" },
];

const startTimes = [
  { label: " Sat-09:00 am to 10:00 pm" },
  { label: " Sun-09:00 am to 10:00 pm" },
  { label: " Mon-09:00 am to 10:00 pm" },
  { label: " Tue-09:00 am to 10:00 pm" },
  { label: " Wed-09:00 am to 10:00 pm" },
  { label: " Thu-09:00 am to 10:00 pm" },
  { label: " Fri-09:00 am to 10:00 pm" },
];

const getInTouches = [
  {
    icon: <MapPin className="size-7 text-white" />,
    label: "Location",
    details: ["Gulshan-2, 1212", "Dhaka, Bangladesh"],
  },
  {
    icon: <Phone className="size-7 text-white" />,
    label: "Phone",
    details: ["+1-2345-3455-33", "+880 131 557 3424"],
  },
  {
    icon: <Mail className="size-7 text-white" />,
    label: "E-mail",
    details: [" contact@dreamscare.com", "support@dreamscare.com"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#09090B]  pt-20 ">
      <Container>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {/* logo */}
          <div className="  space-y-6 ">
            <Image src={logo} alt="Logo" width={100} height={100} />
            <p className="text-[#f5f5f5] text-base">
              At Dreams Care Hospital, we heal with heart because every patient
              deserves the best care, compassion, and commitment to their
              well-being.
            </p>
            <Button className="bg-[#415be7] hover:bg-[#2f44b3] text-white cursor-pointer">
              <CalendarCheck className="size-5" />
              Appointment
            </Button>
          </div>
          {/* quick links */}
          <div className="space-y-6">
            <p className="text-white text-2xl font-bold">Quick Links</p>
            <div className="space-y-4">
              {quickLinks.map((quickLink) => (
                <div key={quickLink.label}>
                  <Link
                    href={quickLink.href}
                    className="text-lg text-[#f5f5f5] hover:underline transition-all"
                  >
                    {quickLink.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* start time */}
          <div className="space-y-6">
            <p className="text-white text-2xl font-bold">Start Time</p>
            <div className="space-y-4">
              {startTimes.map((startTime) => (
                <p key={startTime.label} className="text-lg text-[#f5f5f5]">
                  {startTime.label}
                </p>
              ))}
            </div>
          </div>
          {/* get in touch */}
          <div className="space-y-6">
            <p className="text-white text-2xl font-bold">Get In Touch</p>
            <div className="space-y-4">
              {getInTouches.map((getInTouch) => (
                <div key={getInTouch.label} className="flex gap-2 items-center">
                  <div className="bg-[#415be7] flex items-center justify-center w-10 h-10 rounded-full">
                    {getInTouch.icon}
                  </div>
                  <div>
                    {getInTouch.details.map((item) => (
                      <p key={item} className="text-lg text-[#f5f5f5]">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="mt-20">
          <Separator className="border-1 border-[#c2c2c2]" />
          <p className="text-sm text-[#f5f5f5] text-center py-6  ">
            © {new Date().getFullYear()} Dreams Care Hospital. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
