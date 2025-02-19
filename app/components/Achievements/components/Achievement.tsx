import { RefObject } from "react";
import { barlow_condensed } from "@/common/fonts";
import { Count } from "../components";
import { CountPropsType } from "./Count";

const Achievement = ({
  to,
  duration,
  achievement,
  countUnit,
  ref,
}: AchievementPropsType) => {
  const classNames = `z-10 text-8xl max-lg:text-7xl text-gray-500 stroke-gray-500 stroke-3 -translate-y-1 ${barlow_condensed.className}`;

  return (
    <div className="relative">
      <div className="container-center">
        <Count ref={ref} to={to} duration={duration} classNames={classNames} />
        <span className={classNames}>{countUnit}</span>
      </div>
      <span className="z-20 absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 container-center py-0.5 px-2.5 bg-semiDark text-2xl max-lg:text-xl text-primary text-nowrap">
        {achievement}
      </span>
    </div>
  );
};

// type definitions starts here

export type AchievementPropsType = CountPropsType & {
  achievement: string;
  countUnit?: string;
  ref: RefObject<HTMLDivElement | null>;
};

export default Achievement;
