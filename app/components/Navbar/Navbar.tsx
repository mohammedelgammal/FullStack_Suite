"use client";

import { motion } from "framer-motion";
import { Logo, Icon } from "./components";
import useNavbarScroll from "@/hooks/useNavbarScroll";

const Navbar = () => {
  const isNavbarHidden = useNavbarScroll();

  return (
    <motion.div
      variants={{
        hidden: { translateY: -100 },
        visible: { translateY: 0 },
      }}
      animate={isNavbarHidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, bounce: 1 }}
      className="bg-red-700 absolute top-0 left-0 right-0  flex justify-between items-center h-24 px-6"
    >
      <Logo />
      <Icon />
    </motion.div>
  );
};

export default Navbar;
