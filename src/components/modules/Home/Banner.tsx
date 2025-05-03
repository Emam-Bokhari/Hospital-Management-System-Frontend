import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[88vh] lg:h-[80vh] 2xl:h-[86vh]">
      <Image
        src="https://res.cloudinary.com/dvpqm6zct/image/upload/v1746266475/uaosndovjquuaahc8xus.jpg"
        alt="Banner image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <Container>
        <div className="absolute 2xl:top-[40%] xl:top-[30%] top-[35%]     z-10">
          <div className="lg:space-y-10 space-y-6">
            <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold text-white">
              We want to heal the <br />
              patient with services.
            </h1>
            <p className="xl:text-xl text-lg text-[#f5f5f5]">
              We offer personalized services designed to support and enhance
              <br />
              your path to optimal wellness.
            </p>
            {/* buttons */}
            <div className="flex gap-5">
              <Button className="bg-[#415be7] hover:bg-[#2f44b3] text-white  lg:px-8 lg:py-[18px] xl:px-10 xl:py-[22px] text-base md:text-lg cursor-pointer">
                <CalendarCheck className="size-5" />
                Appointment
              </Button>
              <Button
                variant="outline"
                className="text-[#09090B]  lg:px-8 lg:py-4 xl:px-10 xl:py-5 text-base md:text-lg cursor-pointer"
              >
                <Phone className="size-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
