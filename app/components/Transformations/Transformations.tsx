import { Button, Forehead } from "@/common/components";
import transformationIcon from "/public/fire.svg";
import Image from "next/image";

const Transformations = () => {
  return (
    <section className="container-start-v bg-dark max-w-screen overflow-hidden">
      <Forehead
        variant="start"
        meta="Transformations"
        icon={
          <Image
            className="-translate-y-[1.5px] mr-1"
            src={transformationIcon}
            alt="transformations icon"
            width={20}
            height={20}
          />
        }
        title="Your Goals, Their Results.  Be Next!"
      />
      <div className="relative container-center px-6">
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 grid-rows-2 max-lg:grid-rows-2 overflow-hidden gap-5 justify-self-center blur-sm">
          {[...Array(8).keys()].map((key) => (
            <Image
              className={`${
                key + 1 > 6
                  ? "max-lg:hidden"
                  : key + 1 > 4
                  ? "max-md:hidden"
                  : ""
              }`}
              key={key}
              src={`/transformations/${key + 1}.webp`}
              alt="transformation"
              width={1000}
              height={1000}
            />
          ))}
        </div>
        <Button
          classNames="abs-center w-fit"
          variant="outline"
          href="transformations"
        >
          See More Transformations
        </Button>
      </div>
    </section>
  );
};

export default Transformations;
