import Container from "@/components/shared/Container";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import dna from "@/assets/dna.svg";
import heartOrgan from "@/assets/heart-organ.svg";
import bloodDrop from "@/assets/blood-drop.svg";
import stethoscope from "@/assets/stethoscope.svg";

const keyPoints = [
  {
    text: "Experienced and caring doctors",
  },
  { text: "Wide range of diagnostic tests available" },
  { text: "24/7 ambulance support" },
  { text: "Affordable treatment options for all" },
  { text: "Clean and hygienic environment" },
];

const icons = [
  {
    src: dna,
    alt: "DNA Icon",
    className: "top-5 left-5 hidden md:block",
  },
  {
    src: heartOrgan,
    alt: "Heart Organ Icon",
    className: "top-1/2 2xl:top-3/4 left-40 hidden 2xl:block",
  },
  {
    src: bloodDrop,
    alt: "Blood Drop Icon",
    className: "top-1/2 2xl:left-20 left-0 hidden xl:block",
  },
  {
    src: stethoscope,
    alt: "Stethoscope  Icon",
    className: "top-25 right-20 hidden md:block",
  },
];

export default function AboutUs() {
  return (
    <div className=" relative">
      {/* icon */}
      <div>
        {icons.map((icon) => (
          <div key={icon.alt} className={`absolute ${icon.className}`}>
            <div className="relative w-16 h-16 ">
              <Image
                src={icon.src}
                alt={icon.alt}
                fill
                priority
                className="opacity-10"
              />
            </div>
          </div>
        ))}
      </div>
      <Container className="my-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
          {/* image */}

          <div className="relative w-full h-[300px] md:h-[400px] lg:h-full order-last lg:order-first">
            <Image
              fill
              priority
              className="object-cover rounded-lg"
              src="https://res.cloudinary.com/dvpqm6zct/image/upload/v1746293858/ngydaaio6vvlqylcf8t8.jpg"
              alt="About us doctors image in ot"
            />
          </div>

          {/* text */}
          <div className="space-y-6 ">
            <h2 className="text-[#415be7] font-bold text-xl">About Us</h2>
            <p className="text-3xl md:text-4xl text-[#09090B] font-bold">
              Built on Trust <br />
              Guided by Care
            </p>
            <p className="text-base md:text-lg text-zinc-900">
              Our hospital is committed to delivering compassionate and
              high-quality healthcare services. With a team of skilled
              professionals and modern infrastructure, we ensure a safe and
              comfortable experience for every patient.
            </p>
            {/* key points */}
            <div className="space-y-3">
              {keyPoints.map((keyPoint) => (
                <div key={keyPoint.text} className="flex gap-3">
                  <div className="bg-[#415be7] flex justify-center items-center w-5 h-5 md:w-6 md:h-6 rounded-full">
                    <FaCheck className="size-3 text-white" />
                  </div>
                  <p className="text-base md:text-lg text-zinc-900">
                    {keyPoint.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
