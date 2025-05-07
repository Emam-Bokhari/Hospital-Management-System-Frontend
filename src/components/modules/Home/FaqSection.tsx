import Container from "@/components/shared/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FaqSection() {
  return (
    <div>
      <Container className="my-24">
        <div className="space-y-6">
          <h2 className="text-[#415be7] font-bold text-xl">
            Frequently Asked Questions
          </h2>

          <p className="text-3xl md:text-4xl text-[#09090B] font-bold">
            Answers to Common Queries
            <br />
            About Our Hospital and Services
          </p>
          {/* accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#09090B] text-xl font-medium">
                How can I book an appointment with a doctor?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-base md:text-lg">
                You can book an appointment online through our website or call
                our front desk. Walk-in appointments are also available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#09090B] text-xl font-medium">
                What diagnostic tests are available at your hospital?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-base md:text-lg">
                We offer a wide range of diagnostic tests including HIV, ECG, CT
                Scan, Blood Test, Dengue Test, CVC, X-Ray, Semen Analysis, and
                many more.
                <p className="mt-4">
                  For detailed information, including a full list of tests and
                  their prices, please visit the{" "}
                  <Link href="#" className="font-medium text-[#415be7]">
                    Services → Diagnostic Tests
                  </Link>{" "}
                  page on our website.
                </p>
                <p className="mt-4">
                  You can also contact our front desk for more information or
                  call the number provided on the site.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[#09090B] text-xl font-medium">
                Is there an emergency department available 24/7?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-base md:text-lg">
                Yes, our emergency department is open 24/7 with doctors, nurses,
                and ambulance support ready anytime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[#09090B] text-xl font-medium">
                Can I pay using bKash?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-base md:text-lg">
                Absolutely! We accept payments via bKash as well as cash at the
                counter.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-[#09090B] text-xl font-medium">
                Do you provide home care services?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-base md:text-lg">
                Yes, we provide professional home care services including
                nursing, elderly care, and physiotherapy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-[#09090B] text-xl font-medium">
                How can I get an ambulance?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-base md:text-lg">
                You can request an ambulance anytime by calling our emergency
                number or using the quick-access button on our website.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-[#09090B] text-xl font-medium">
                Is blood available at your blood bank?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-base md:text-lg">
                Yes, our blood bank is fully equipped and maintained.
                Availability depends on the current stock and type required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-[#09090B] text-xl font-medium">
                Can I buy medicine directly from the hospital?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-base md:text-lg">
                Yes, we have an in-house medicine shop that is open 24/7 for
                your convenience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}
