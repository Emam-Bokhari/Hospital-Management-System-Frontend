import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa6";
import { HiOutlineShare } from "react-icons/hi";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function BlogSection() {
  return (
    <div>
      <Container className="my-20">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="space-y-6">
              <h2 className="text-[#415be7] font-bold text-xl">Blogs</h2>

              <p className="text-3xl md:text-4xl text-[#09090B] font-bold">
                Read Helpful Articles <br />
                on Health and Wellness
              </p>
            </div>
            <Button className="bg-[#415be7] hover:bg-[#2f44b3] text-white cursor-pointer">
              View All
              <ArrowRight className="size-5" />
            </Button>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className=" w-full h-full  rounded-lg  shadow-sm "
              >
                <div>
                  <div className="relative w-full h-60  rounded-lg">
                    <Image
                      src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Health"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3 p-6 ">
                    <p className="text-[#415be7] font-bold text-base">
                      Health Tips
                    </p>

                    <p className="text-[#09090B] text-xl font-medium  ">
                      Simple Habits to Stay Healthy Every Day
                    </p>

                    <p className="text-zinc-900 text-base md:text-lg">
                      Learn easy daily habits like drinking enough water,
                      getting enough sleep, eating balanced meals, and staying
                      active — all of which can help improve your overall health
                      and energy.
                    </p>

                    <Separator />

                    <div className="flex justify-between">
                      <div className="flex gap-5">
                        {/* calender */}
                        <div className="flex gap-3">
                          <MdOutlineCalendarToday className="size-5" />
                          <span>7 Feb 2025</span>
                        </div>
                        {/* dot */}
                        <div>
                          <BsDot className="size-5" />
                        </div>
                        {/* comments */}
                        <div className="flex gap-3">
                          <FaRegComments className="size-5" />
                          <span>56</span>
                        </div>
                      </div>
                      {/* share */}
                      <div>
                        <HiOutlineShare className="size-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
