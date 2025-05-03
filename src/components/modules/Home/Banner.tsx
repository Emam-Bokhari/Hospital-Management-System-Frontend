import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[87vh]">
      <Image
        src="https://res.cloudinary.com/dvpqm6zct/image/upload/v1746266475/uaosndovjquuaahc8xus.jpg"
        alt="Banner image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Text container */}
      <Container>
        <div className="absolute top-[40%]   z-10">
          <div className="space-y-10">
            <h1 className="text-7xl font-bold text-white">
              We want to heal the <br />
              patient with services.
            </h1>
            <p className="text-xl text-[#f5f5f5]">
              We offer personalized services designed to support and enhance
              <br />
              your path to optimal wellness.
            </p>
            {/* buttons */}
            <div className="flex gap-5">
              <Button
                size="lg"
                className="bg-[#415be7] hover:bg-[#2f44b3] text-white text-lg cursor-pointer"
              >
                Learn More
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-[#09090B] text-lg cursor-pointer"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
