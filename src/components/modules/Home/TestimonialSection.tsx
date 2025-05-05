"use client";
import Container from "@/components/shared/Container";
import Image from "next/image";
import Masonry from "react-masonry-css";

const testimonials = [
  {
    id: 1,
    src: "https://thumbs.dreamstime.com/b/young-male-doctor-close-up-happy-looking-camera-56751540.jpg",
    userName: "Dr. Mahmud Hasan",
    feedback:
      "The care I received was truly exceptional. The staff was attentive",
  },
  {
    id: 2,
    src: "https://thumbs.dreamstime.com/b/young-male-doctor-close-up-happy-looking-camera-56751540.jpg",
    userName: "Sabrina Alam",
    feedback:
      "From consultation to recovery, the service was seamless. Their personalized approach made a big difference in my healing process to recovery, the service was seamless. Their personalized approach made a big difference in my healing process.",
  },
  {
    id: 3,
    src: "https://thumbs.dreamstime.com/b/young-male-doctor-close-up-happy-looking-camera-56751540.jpg",
    userName: "Rahim Uddin",
    feedback:
      "I’ve never felt more confident in a healthcare team. Their professionalism and care exceeded my expectations.",
  },
  {
    id: 4,
    src: "https://thumbs.dreamstime.com/b/young-male-doctor-close-up-happy-looking-camera-56751540.jpg",
    userName: "Dr. Nusrat Jahan",
    feedback:
      "A truly patient-centered experience. The communication  I felt genuinely cared for. care exceeded my expectations. care exceeded my expectations.",
  },
  {
    id: 5,
    src: "https://thumbs.dreamstime.com/b/young-male-doctor-close-up-happy-looking-camera-56751540.jpg",
    userName: "Tanvir Ahmed",
    feedback:
      "They listened carefully and offered thoughtful guidance throughout my treatment.",
  },
  {
    id: 6,
    src: "https://thumbs.dreamstime.com/b/young-male-doctor-close-up-happy-looking-camera-56751540.jpg",
    userName: "Faria Rahman",
    feedback:
      "Warm and welcoming environment with skilled professionals. I’d trust them again without hesitation.",
  },
];

const breakpointColumnsObj = {
  default: 3,
  1536: 3,
  1280: 2,
  640: 1,
};

export default function TestimonialSection() {
  return (
    <div>
      <Container className="my-24">
        <div className="space-y-6">
          <h2 className="text-[#415be7] font-bold text-xl">
            What Our Patients Say
          </h2>

          <p className="text-3xl md:text-4xl text-[#09090B] font-bold">
            Healing Experiences Shared
            <br />
            by Real People
          </p>
          {/* cards */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto gap-5"
            columnClassName="bg-clip-padding"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="shadow-xl rounded-lg p-6 mb-5 bg-white break-inside-avoid"
              >
                <div className="flex items-center gap-5 space-y-3">
                  <div className="relative w-18 h-18 rounded-full">
                    <Image
                      src={testimonial.src}
                      alt={`${testimonial.userName} - Image`}
                      fill
                      priority
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className="text-xl font-bold text-[#09090B]">
                    {testimonial.userName}
                  </p>
                </div>
                <p className="text-zinc-900 text-base md:text-lg">
                  {testimonial.feedback}
                </p>
              </div>
            ))}
          </Masonry>
        </div>
      </Container>
    </div>
  );
}
