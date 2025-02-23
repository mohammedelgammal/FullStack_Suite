import Image from "next/image";
import { Forehead } from "@/common/components";
import { Service, AvatarStack } from "./components";
import { space_grotesk } from "@/common/fonts";

const Services = () => {
  return (
    <section className="bg-dark px-6">
      <Forehead
        variant="center"
        meta="Our Services"
        title="What We Offer for Your Fitness Journey"
        icon={
          <Image
            src="/muscle.svg"
            alt="services icon"
            width={25}
            height={25}
            className="-translate-y-0.5 mr-1"
          />
        }
      >
        <div className="container-center-v gap-10">
          <p
            className={`text-lg text-fade mt-5 text-center w-3/4 ${space_grotesk.className}`}
          >
            Your Goals, Our Expertise—Tailored Training and Nutrition Plans to
            Transform Your Fitness Journey. Let’s Achieve Results Together!
          </p>
          <AvatarStack />
        </div>
      </Forehead>
      <div className="grid grid-cols-2 max-md:grid-cols-1 grid-rows-2 max-md:grid-rows-4 gap-2">
        {services.map((service, key) => (
          <Service key={key} {...service} />
        ))}
      </div>
    </section>
  );
};

const services: ServiceType[] = [
  { title: "Personalized Workout Plans", src: "/our_services/workout.jpg" },
  {
    title: "One-on-One Training Sessions",
    src: "/our_services/one-to-one.jpg",
  },
  { title: "Nutrition Guidance", src: "/our_services/nutrition.jpg" },
  {
    title: "Motivation and Accountability",
    src: "/our_services/motivation.jpg",
  },
];

// type definitions start here

type ServiceType = { title: string; src: string };

export default Services;
