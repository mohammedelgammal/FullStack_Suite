"use client";

import Link from "next/link";
import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";

const Button = ({
  variant,
  href,
  classNames,
  children,
  ...props
}: ButtonPropsType) => {
  const StyledButton = () => (
    <motion.div
      variants={getVariant(variant).parentVariants}
      initial="offset"
      whileHover="place"
      animate="offset"
    >
      <motion.button
        className={`relative overflow-hidden container-center tracking-wide px-5 py-3 text-2xl
        ${variant == "outline" ? "border border-primary" : ""}
        ${classNames}`}
        {...props}
        variants={getVariant(variant).btnFramerVariants}
      >
        <motion.div className="z-10">{children}</motion.div>
        <motion.div
          className={`z-0 absolute w-full h-full`}
          transition={{ duration: 0.3, bounce: 1 }}
          variants={getVariant(variant).pseudoFramerVariants}
        />
      </motion.button>
    </motion.div>
  );

  return href ? (
    <Link href={href}>
      <StyledButton />
    </Link>
  ) : (
    <StyledButton />
  );
};

const btnVariants: BtnVariantsType = {
  primary: {
    place: {
      bg: "var(--primary-color)",
      color: "var(--dark-color)",
      pseudoBg: "var(--secondary-color)",
    },
    offset: {
      bg: "var(--primary-color)",
      color: "var(--dark-color)",
      pseudoBg: "var(--secondary-color)",
    },
  },
  outline: {
    place: {
      bg: "",
      color: "var(--dark-color)",
      pseudoBg: "var(--primary-color)",
    },
    offset: {
      bg: "",
      color: "var(--primary-color)",
      pseudoBg: "var(--primary-color)",
    },
  },
  dark: {
    place: {
      bg: "var(--background-color)",
      color: "var(--dark-color)",
      pseudoBg: "var(--secondary-color)",
    },
    offset: {
      bg: "var(--background-color)",
      color: "var(--primary-color)",
      pseudoBg: "var(--secondary-color)",
    },
  },
};

const getVariant: GetVariantType = (variant) => ({
  parentVariants: {
    offset: {},
    place: {},
  },
  btnFramerVariants: {
    offset: {
      backgroundColor: btnVariants[variant].offset.bg,
      color: btnVariants[variant].offset.color,
    },
    place: {
      color: btnVariants[variant].place.color,
    },
  },
  pseudoFramerVariants: {
    offset: {
      x: "100%",
      y: "100%",
      backgroundColor: btnVariants[variant].offset.pseudoBg,
    },
    place: {
      x: 0,
      y: 0,
      backgroundColor: btnVariants[variant].place.pseudoBg,
    },
  },
});

// Types definitions starts here

type ButtonPropsType = ChildrenPropType &
  React.ComponentProps<
    ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<"button">>
  > & {
    variant: ButtonVariants;
    href?: string;
    classNames?: string;
  };

export type motionType = {
  [key in "place" | "offset"]: {
    [key: string]: string | number;
  };
};

type BtnVariantsType = {
  [key in ButtonVariants]: motionType;
};

type GetVariantType = (variant: ButtonVariants) => {
  [key: string]: motionType;
};

type ButtonVariants = "primary" | "outline" | "dark";

export default Button;
