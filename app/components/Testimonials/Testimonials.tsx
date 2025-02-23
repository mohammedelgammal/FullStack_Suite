import Image from "next/image";
import { Forehead } from "@/common/components";
import Carousel from "./components/Carousel";
import { space_grotesk } from "@/common/fonts";

const Testimonials = () => {
  return (
    <section className="bg-dark py-6">
      <Forehead
        variant="start"
        meta="Our Testimonials"
        icon={
          <Image
            src="/chat.svg"
            alt="testimonials icon"
            width={25}
            height={25}
            className="-translate-y-0.5 mr-1"
          />
        }
        title="Our Members Share Their Experiences"
      >
        <p className={`text-lg text-fade mt-5 ${space_grotesk.className}`}>
          Step into the stories of those who’ve turned their fitness dreams into
          reality—our members share their powerful experiences, celebrating the
          strength, confidence, and life-changing results they’ve achieved with
          our guidance and support.
        </p>
      </Forehead>
      <Carousel />
    </section>
  );
};

export default Testimonials;
