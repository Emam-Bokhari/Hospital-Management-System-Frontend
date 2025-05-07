import Container from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight, CalendarCheck, Eye } from "lucide-react";
import Image from "next/image";

export default function DoctorSection() {
  return (
    <div>
      <Container className="my-24">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="space-y-6">
              <h2 className="text-[#415be7] font-bold text-xl">Doctors</h2>

              <p className="text-3xl md:text-4xl text-[#09090B] font-bold">
                Meet the Specialists Committed <br />
                to Your Well-being
              </p>
            </div>
            <Button className="bg-[#415be7] hover:bg-[#2f44b3] text-white cursor-pointer">
              View All
              <ArrowRight className="size-5" />
            </Button>
          </div>
          {/* card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {Array.from({ length: 12 }).map((_, index) => (
              <Card key={index}>
                <CardTitle className="sr-only">Doctor Card</CardTitle>
                <CardContent>
                  <div className="relative w-30 h-30 rounded-full  mx-auto">
                    <Image
                      src="https://thumbs.dreamstime.com/b/young-male-doctor-close-up-happy-looking-camera-56751540.jpg"
                      alt="Doctor"
                      fill
                      priority
                      className="rounded-full object-cover"
                    />
                  </div>
                  {/* text */}
                  <div className="space-y-3 mt-3 text-center">
                    <p className="text-xl font-bold text-[#09090B]">
                      Dr.Jahangir Alom
                    </p>
                    <Badge className="bg-blue-100 text-[#415be7] text-sm font-bold">
                      Cardiologist
                    </Badge>
                    <p className="text-zinc-900 text-base md:text-lg">
                      MBBS, FCPS (Cardiology)
                    </p>
                    <p className="text-zinc-900 text-base md:text-lg">
                      Mon–Thu, 10AM–1PM
                    </p>

                    <div className="flex justify-between">
                      <Button variant="outline" className="  cursor-pointer">
                        <Eye className="size-5" />
                        Details
                      </Button>
                      <Button className="bg-[#415be7] hover:bg-[#2f44b3] text-white  cursor-pointer">
                        <CalendarCheck className="size-5" />
                        Appointment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
