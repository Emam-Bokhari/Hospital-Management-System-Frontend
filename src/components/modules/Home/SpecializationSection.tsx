import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import cardiology from "@/assets/department-icons/cardiology.png";
import gynecology from "@/assets/department-icons/gynecology.png";
import neurology from "@/assets/department-icons/neurology.png";
import dentistry from "@/assets/department-icons/dentistry.png";
import psychiatry from "@/assets/department-icons/psychiatry.png";
import gastroenterology from "@/assets/department-icons/gastroenterology.png";
import Link from "next/link";

const specializationIcons = [
  {
    src: gynecology,
    alt: "Gynecology Icon",
    label: "Gynecology",
    className: "bg-fuchsia-100 ",
  },
  {
    src: cardiology,
    alt: "Cardiology Icon",
    label: "Cardiology",
    className: "bg-red-100 ",
  },
  {
    src: neurology,
    alt: "Neurology Icon",
    label: "Neurology",
    className: "bg-indigo-100 ",
  },
  {
    src: psychiatry,
    alt: "Psychiatry Icon",
    label: "Psychiatry",
    className: "bg-purple-100 ",
  },
  {
    src: gastroenterology,
    alt: "Gastroenterology Icon",
    label: "Gastroenterology",
    className: "bg-orange-100 ",
  },
  {
    src: dentistry,
    alt: "Dentistry Icon",
    label: "Dentistry",
    className: "bg-teal-100 ",
  },
];

export default function SpecializationSection() {
  return (
    <div>
      <Container className="my-24">
        {/* heading and action button */}
        <div className="flex justify-between items-center ">
          <h2 className="text-3xl md:text-4xl text-[#09090B] font-bold">
            Find Doctors by Specialization
          </h2>
          <Button className="bg-[#415be7] hover:bg-[#2f44b3] text-white cursor-pointer">
            View All
            <ArrowRight className="size-5" />
          </Button>
        </div>
        {/* card */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  gap-5 mt-6">
          {specializationIcons.map((specializationIcon) => (
            <Link href="#" key={specializationIcon.label}>
              <div
                className={`${specializationIcon.className} w-full  h-44  flex items-center justify-center rounded-lg transform transition duration-200 hover:scale-105`}
              >
                <div className="text-center">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 mx-auto">
                    <Image
                      src={specializationIcon.src}
                      alt={specializationIcon.alt}
                      fill
                      priority
                    />
                  </div>
                  <p className="text-[#09090B] text-xl font-medium mt-3">
                    {specializationIcon.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
