"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionType } from "@/common/components/Button";
import RightPrimary from "/public/right-arrow.svg";
import RightSecondary from "/public/arrow-right-s.svg";

const Icon = () => {
  const primaryVariant: motionType = {
    offset: { opacity: 1 },
    place: { opacity: 0 },
  };
  const secondaryVariant: motionType = {
    offset: { opacity: 0 },
    place: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -right-2"
        variants={primaryVariant}
      >
        <Image
          src={RightPrimary}
          alt="Right Arrow Image"
          width={30}
          height={30}
        />
      </motion.div>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -right-2"
        variants={secondaryVariant}
      >
        <Image
          src={RightSecondary}
          alt="Right Arrow Image"
          width={30}
          height={30}
        />
      </motion.div>
    </>
  );
};

export default Icon;
