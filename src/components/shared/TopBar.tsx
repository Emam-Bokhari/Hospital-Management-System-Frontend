import Container from "@/components/shared/Container";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-[#2f44b3] py-2 hidden md:block">
      <Container className=" flex items-center justify-center xl:justify-between">
        {/* contact info */}
        <div className=" flex flex-wrap items-center gap-5">
          {/* phone */}
          <div className="hidden sm:flex items-center gap-2 text-[#f5f5f5]">
            <FiPhone className="size-5" />
            <p>+1-2345-3455-33</p>
          </div>
          {/* email */}
          <div className="flex items-center gap-2 text-[#f5f5f5]">
            <MdOutlineMail className="size-5" />
            <p>contact@dreamscare.com</p>
          </div>
          {/* location */}
          <div className="flex items-center gap-2 text-[#f5f5f5]">
            <SlLocationPin className="size-5" />
            <p>Gulshan-02, Dhaka, Bangladesh</p>
          </div>
        </div>
        {/* follows on */}
        <div className="xl:flex hidden items-center gap-5">
          <Link href="#" className="inline-block">
            <FaFacebookF className="size-5 text-[#f5f5f5]  hover:text-[#1877F2] transition-colors" />
          </Link>
          <Link href="#" className="inline-block">
            <GrLinkedinOption className="size-5 text-[#f5f5f5] hover:text-[#0A66C2] transition-colors" />
          </Link>
          <Link href="#" className="inline-block">
            <RiTwitterXLine className="size-5 text-[#f5f5f5] hover:text-[#1DA1F2] transition-colors" />
          </Link>
          <Link href="#" className="inline-block">
            <FaPinterestP className="size-5 text-[#f5f5f5] hover:text-[#E1306C] transition-colors" />
          </Link>
          <Link href="#" className="inline-block">
            <BsInstagram className="size-5 text-[#f5f5f5] hover:text-[#E60023] transition-colors" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
