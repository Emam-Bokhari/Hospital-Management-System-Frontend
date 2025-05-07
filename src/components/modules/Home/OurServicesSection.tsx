import Container from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import admission from "@/assets/services-icons/admission.png";
import ambulance from "@/assets/services-icons/ambulance.png";
import bloodBank from "@/assets/services-icons/blood-bank.png";
import doctors from "@/assets/services-icons/doctors.png";
import emergency from "@/assets/services-icons/emergency.png";
import pharmacy from "@/assets/services-icons/pharmacy.png";
import test from "@/assets/services-icons/test.png";
import homeCare from "@/assets/services-icons/home-care.png";

const services = [
  {
    src: emergency,
    title: "Emergency",
    description: "24/7 emergency support and rapid care",
  },
  {
    src: ambulance,
    title: "Ambulance",
    description: "Fast and reliable ambulance service at your doorstep",
  },
  {
    src: doctors,
    title: "Doctors",
    description: "Experienced specialists for every medical need",
  },
  {
    src: admission,
    title: "Patient Admission",
    description: "Smooth and quick admission process for patients",
  },
  {
    src: test,
    title: "Diagnostic Tests",
    description: "Accurate lab tests for faster diagnosis and treatment",
  },
  {
    src: pharmacy,
    title: "Medicine Shop",
    description: "All essential medicines available in one place",
  },
  {
    src: bloodBank,
    title: "Blood Bank",
    description: "Safe and ready blood supply for critical situations",
  },
  {
    src: homeCare,
    title: "Home Care",
    description: "Professional medical support in the comfort of your home",
  },
];

export default function OurServicesSection() {
  return (
    <Fragment>
      <div>
        <Container className="my-24">
          <div className="space-y-6">
            <h2 className="text-[#415be7] font-bold text-xl">Our Services</h2>

            <p className="text-3xl md:text-4xl text-[#09090B] font-bold">
              Your Journey to Better <br />
              Health Starts Here
            </p>
            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 mt-6">
              {services.map((service) => (
                <Link key={service.title} href="#">
                  <div className="group w-full h-48 md:h-52 px-6 flex items-center justify-center rounded-lg duration-200  shadow-sm transform transition hover:scale-105">
                    <div className="text-center space-y-3">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 mx-auto">
                        <Image
                          src={service.src}
                          alt={`${service.title} Icon`}
                          fill
                          priority
                        />
                      </div>
                      <p className="text-[#09090B] text-xl font-medium group-hover:text-[#415be7] ">
                        {service.title}
                      </p>
                      <p className="text-zinc-900 text-base md:text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
