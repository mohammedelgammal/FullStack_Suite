import Image from "next/image";
import { Button } from "@/common/components";
import Icon from "./components/Icon";
import gymIcon from "/public/GymIcon.svg";

const Hero = () => {
  return (
    <div className="container-start max-w-screen h-cover p-6 bg-[url(/HeroSection.jpg)] max-md:bg-[url(/HeroSectionMd.jpg)] max-sm:bg-[url(/HeroSectionSm.jpg)] bg-cover bg-center text-white text-4xl">
      <div className="container-start-v">
        <div className="container-center gap-1 text-secondary text-lg mb-4">
          <Image
            className="-translate-y-0.5"
            src={gymIcon}
            alt="Gym Icon"
            height={35}
            width={35}
          />
          Fitness & Gym
        </div>
        <h1 className="text-7xl mb-10 max-lg:text-6xl max-md:text-5xl tracking-wide">
          Gain Strength,
          <br /> Shed Weight, <br />
          Unleash Confidence.
        </h1>
        <div className="container-center gap-5 max-md:gap-3">
          <Button variant="primary">Join Us Today</Button>
          <Button variant="outline">
            <div className="relative container-center pr-7">
              <span>About Us</span>
              <Icon />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
