import Container from "@/components/shared/Container";
import Image from "next/image";
import { Fragment } from "react";

const workingProcessSteps = [
  {
    src: "https://res.cloudinary.com/dvpqm6zct/image/upload/v1746364535/pexels-tima-miroshnichenko-8376233_cwxcp3.jpg",
    title: "Choose the Right Doctor",
    description:
      "Browse profiles, read reviews, and select the ideal doctor for your needs",
    badgeClassName: "bg-blue-500",
    badgeNumber: "01",
  },
  {
    src: "https://res.cloudinary.com/dvpqm6zct/image/upload/v1746367052/pexels-pavel-danilyuk-6809668_tnkalz.jpg",
    title: "Book Your Appointment",
    description:
      "Select a convenient time and book your appointment in just a few clicks",
    badgeClassName: "bg-green-500",
    badgeNumber: "02",
  },
  {
    src: "https://res.cloudinary.com/dvpqm6zct/image/upload/v1746367565/pexels-alex-green-5699431_kgouxo.jpg",
    title: "Consult with Specialists",
    description:
      "Connect with experienced specialists for expert medical guidance",
    badgeClassName: "bg-yellow-500",
    badgeNumber: "03",
  },
  {
    src: "https://res.cloudinary.com/dvpqm6zct/image/upload/v1746367050/pexels-karolina-grabowska-5207015_fw0g3b.jpg",
    title: "Receive Care and Support",
    description:
      "Begin your treatment journey with trusted care and ongoing support",
    badgeClassName: "bg-red-500",
    badgeNumber: "04",
  },
];

export default function HowItWorks() {
  return (
    <Fragment>
      <div>
        <Container className="my-24">
          <div className="space-y-6">
            <h2 className="text-[#415be7] font-bold text-xl">How It Works</h2>

            <p className="text-3xl md:text-4xl text-[#09090B] font-bold">
              A Clear Path to <br />
              Quality Healthcare
            </p>
            {/* info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 bg-[#eaf7ff] p-6 rounded-lg ">
              {workingProcessSteps.map((workingProcess) => (
                <div key={workingProcess.title} className="space-y-3 ">
                  {/* image */}
                  <div className="relative w-50 h-50 mx-auto">
                    {/* badges */}
                    <div
                      className={`${workingProcess.badgeClassName} w-10 h-10 rounded-full flex justify-center items-center absolute top-6 left-42 z-10`}
                    >
                      <p className="text-base text-white font-bold">
                        {workingProcess.badgeNumber}
                      </p>
                    </div>

                    <Image
                      src={workingProcess.src}
                      alt={`${workingProcess.title} Image`}
                      fill
                      priority
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className="text-xl font-bold text-[#415be7] text-center">
                    {workingProcess.title}
                  </p>
                  <p className="text-zinc-900 text-base md:text-lg text-center">
                    {workingProcess.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
