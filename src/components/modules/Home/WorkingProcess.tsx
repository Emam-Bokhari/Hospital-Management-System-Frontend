import Container from "@/components/shared/Container";
import Image from "next/image";
import { Fragment } from "react";

const workingProcessSteps = [
  {
    src: "https://res.cloudinary.com/dvpqm6zct/image/upload/v1746364535/pexels-tima-miroshnichenko-8376233_cwxcp3.jpg",
    title: " Select Expert Doctor",
    description:
      "Explore expert doctors, read reviews, and choose the right specialist for your needs",
    badgeClassName: "bg-blue-500",
    badgeNumber: "01",
  },
  {
    src: "https://res.cloudinary.com/dvpqm6zct/image/upload/v1746367052/pexels-pavel-danilyuk-6809668_tnkalz.jpg",
    title: "Make Appointment",
    description:
      "Choose your preferred time slot and book your appointment instantly",
    badgeClassName: "bg-green-500",
    badgeNumber: "02",
  },
  {
    src: "https://res.cloudinary.com/dvpqm6zct/image/upload/v1746367565/pexels-alex-green-5699431_kgouxo.jpg",
    title: "Get Consultants",
    description:
      "Connect with experienced consultants for personalized medical advice and guidance",
    badgeClassName: "bg-yellow-500",
    badgeNumber: "03",
  },
  {
    src: "https://res.cloudinary.com/dvpqm6zct/image/upload/v1746367050/pexels-karolina-grabowska-5207015_fw0g3b.jpg",
    title: "Get Care & Relief",
    description:
      "Start your recovery journey with trusted treatment and supportive care",
    badgeClassName: "bg-red-500",
    badgeNumber: "04",
  },
];

export default function WorkingProcess() {
  return (
    <Fragment>
      <div>
        <Container className="my-20">
          <div className="space-y-6">
            <h2 className="text-[#415be7] font-bold text-xl">
              Working Process
            </h2>

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
