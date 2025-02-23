"use client";

import { RefObject, useEffect } from "react";
import {
  animate,
  AnimationPlaybackControls,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Nullable } from "@/types/common";

const Count = ({ to = 0, duration = 3, classNames, ref }: CountPropsType) => {
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()).toString());

  useEffect(() => {
    let controls: Nullable<AnimationPlaybackControls>;
    if (isInView) {
      controls = animate(count, to, { duration });
    }
    return () => controls?.stop();
  }, [isInView, count, duration, to]);

  return <motion.pre className={classNames}>{rounded}</motion.pre>;
};

// types definitions starts here

export type CountPropsType = {
  to: number;
  duration: number;
  classNames?: string;
  ref: RefObject<HTMLDivElement | null>;
};

export default Count;
