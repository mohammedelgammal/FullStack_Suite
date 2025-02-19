"use client";

import { useRef } from "react";
import { Achievement } from "./components";
import { AchievementPropsType } from "./components/Achievement";

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className="container-center max-w-screen overflow-hidden flex-wrap px-5 py-16 max-lg:py-11 gap-20 max-md:gap-12 bg-dark"
    >
      {achievements.map((achievement, key) => (
        <Achievement ref={containerRef} key={key} {...achievement} />
      ))}
    </div>
  );
};

const achievements: Achievements[] = [
  { achievement: "Members", to: 850, duration: 4, countUnit: "+" },
  { achievement: "Sessions", to: 13, duration: 4, countUnit: "K" },
  { achievement: "Success Rate", to: 97, duration: 4, countUnit: "%" },
  { achievement: "Followers", to: 1.23, duration: 4, countUnit: "M+" },
];

// types definitions starts here

type Achievements = Pick<
  AchievementPropsType,
  "achievement" | "to" | "duration" | "countUnit"
>;

export default Achievements;
