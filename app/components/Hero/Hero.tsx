import Image from "next/image";
import { Button } from "@/common/components";
import { Icon, Heading } from "./components";
import Style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="container-start max-w-screen h-cover p-6 bg-[url(/HeroSection.jpg)] max-md:bg-[url(/HeroSectionMd.jpg)] max-sm:bg-[url(/HeroSectionSm.jpg)] bg-cover bg-center text-white text-4xl">
      <div className="container-start-v">
        <div
          className={`container-center gap-1 text-secondary text-lg mb-4 
            ${Style.moveDown}`}
        >
          <Image
            className="-translate-y-0.5"
            src="/GymIcon.svg"
            alt="Gym Icon"
            height={35}
            width={35}
          />
          Fitness & Gym
        </div>
        <Heading />
        <div className="container-center gap-5 max-md:gap-3">
          <Button classNames={Style.firstBtn} variant="primary">
            Join us now
          </Button>
          <Button classNames={Style.secondBtn} variant="outline">
            <div className="relative container-center pr-7 dela">
              <span>About me</span>
              <Icon />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
