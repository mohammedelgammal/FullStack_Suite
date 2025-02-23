import Image from "next/image";
import { Forehead } from "@/common/components";
import { space_grotesk } from "@/common/fonts";

const About = () => {
  return (
    <section className="bg-dark pt-10">
      <Forehead
        variant="start"
        meta="About us"
        title="The Face Behind Your Transformation"
        icon={
          <Image
            src="/chat.svg"
            alt="testimonials icon"
            width={25}
            height={25}
            className="-translate-y-0.5 mr-1"
          />
        }
      />
      <div className="grid grid-cols-2 max-lg:grid-cols-1 grid-rows-1 gap-10 px-6">
        <div className="flex flex-col gap-10 text-white">
          <div className="container-start-v gap-5">
            <span className="text-2xl text-secondary">Biography</span>
            <p className={`text-lg text-fade ${space_grotesk.className}`}>
              My training philosophy is simple: fitness should be fun,
              sustainable, and tailored to your unique needs. I don’t believe in
              one-size-fits-all solutions—your program will be as unique as you
              are. Together, we’ll set realistic goals, track your progress, and
              celebrate every milestone along the way. When I’m not in the gym,
              you can find me exploring new healthy recipes. I’m passionate
              about living a balanced, active lifestyle, and I’m excited to help
              you do the same.
              <br />
              <br />
              Let’s work together to build a stronger, healthier, and more
              confident you. Your transformation starts here!
            </p>
          </div>
          <div className="container-start-v gap-5">
            <span className="text-2xl text-secondary">Qualifications</span>
            <ol className="">
              <li className={`text-lg text-fade ${space_grotesk.className}`}>
                Certified in NASM, ACE, and CrossFit Level 1
              </li>
              <li className={`text-lg text-fade ${space_grotesk.className}`}>
                Proven track record of helping clients achieve weight loss,
                muscle gain, and improved athletic performance.
              </li>
              <li className={`text-lg text-fade ${space_grotesk.className}`}>
                Personalized training plans tailored to your goals and fitness
                level.
              </li>
              <li className={`text-lg text-fade ${space_grotesk.className}`}>
                A supportive and motivating environment to keep you inspired.
              </li>
            </ol>
          </div>
        </div>
        <div className="h-[680px] bg-[url(/about.jpg)] bg-cover bg-center max-lg:bg-top"></div>
      </div>
    </section>
  );
};

export default About;
