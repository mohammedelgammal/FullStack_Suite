"use client";

import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import useNavbarScroll from "@/hooks/useNavbarScroll";

const ScrollContainer = ({ children, ...props }: ScrollContainerPropTypes) => {
  const isNavbarHidden = useNavbarScroll();
  const navbarAnimate = isNavbarHidden ? "hidden" : "visible";

  return (
    <motion.div
      variants={{
        hidden: { translateY: -100 },
        visible: { translateY: 0 },
      }}
      animate={props.animate ?? navbarAnimate}
      transition={{ duration: 0.2, bounce: 1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

type ScrollContainerPropTypes = ChildrenPropType &
  React.ComponentProps<
    ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>
  >;

export default ScrollContainer;
