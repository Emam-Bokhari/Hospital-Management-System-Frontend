import Container from "@/components/shared/Container";
import { Fragment } from "react";
import Image from "next/image";
import doctor from "@/assets/whyChooseUs-icons/doctor.png";
import hospital from "@/assets/whyChooseUs-icons/hospital.png";
import advancedTechnology from "@/assets/whyChooseUs-icons/advanced-technology.png";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <Fragment>
      <div>
        <Container className="my-24">
          <div className="space-y-6">
            <h2 className="text-[#415be7] font-bold text-xl">Why Choose Us</h2>

            <p className="text-3xl md:text-4xl text-[#09090B] font-bold">
              Your Health, Our <br />
              Highest Responsibility
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5">
              {/* card1 */}
              <div>
                {/* Experienced Medical Professionals */}
                <div className=" w-full h-full p-6 flex items-center  rounded-lg  shadow-sm">
                  <div className="space-y-3">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15">
                      <Image src={doctor} alt="Doctor Icon" fill priority />
                    </div>
                    <p className="text-[#09090B] text-xl font-medium  ">
                      Experienced Medical Professionals
                    </p>
                    <p className="text-zinc-900 text-base md:text-lg">
                      Our hospital is staffed by highly qualified doctors,
                      surgeons, and healthcare experts with years of experience
                      in delivering exceptional patient care.
                    </p>
                  </div>
                </div>
              </div>

              {/* card2 */}
              <div>
                {/* Experienced Medical Professionals */}
                <div className=" w-full h-full p-6 flex items-center  rounded-lg  shadow-sm">
                  <div className="space-y-3">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15">
                      <Image src={hospital} alt="Doctor Icon" fill priority />
                    </div>
                    <p className="text-[#09090B] text-xl font-medium  ">
                      Complete Health Solutions
                    </p>
                    <p className="text-zinc-900 text-base md:text-lg">
                      From emergency treatment to routine checkups, we offer a
                      wide range of medical services to meet the health needs of
                      your entire family.
                    </p>
                  </div>
                </div>
              </div>

              {/* card3 */}
              <div className="xl:row-span-2  order-2 xl:order-none ">
                <div className=" w-full h-full">
                  <div className="relative w-full h-[350px] md:h-full ">
                    <Image
                      src="https://res.cloudinary.com/dvpqm6zct/image/upload/v1746435550/pexels-tima-miroshnichenko-8376232_drwu35.jpg"
                      alt="Doctor Image"
                      fill
                      priority
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    {/* text */}
                    <div className="space-y-3 z-10 absolute bottom-6 left-6">
                      <p className="text-white text-xl font-medium">
                        Kind and Expert Care
                      </p>
                      <p className="text-[#f5f5f5] text-base md:text-lg">
                        We care for every patient with kindness and expert
                        treatment. Join thousands who trust us with their
                        health.
                      </p>
                      <Button className=" bg-[#415be7] hover:bg-[#2f44b3] text-white  cursor-pointer">
                        <CalendarCheck className="size-5" />
                        Book an Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* card4 */}
              <div className="xl:col-span-2 ">
                {/* Experienced Medical Professionals */}
                <div className=" w-full h-full p-6 flex items-center  rounded-lg  shadow-sm">
                  <div className="space-y-3">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15">
                      <Image
                        src={advancedTechnology}
                        alt="Doctor Icon"
                        fill
                        priority
                      />
                    </div>
                    <p className="text-[#09090B] text-xl font-medium  ">
                      Advanced Medical Equipment
                    </p>
                    <p className="text-zinc-900 text-base md:text-lg">
                      We use cutting-edge medical equipment and technology to
                      ensure accurate diagnosis and effective treatment,
                      providing you with the highest standard of care. Our
                      commitment to innovation helps us deliver faster results,
                      safer procedures, and a more comfortable experience for
                      every patient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
