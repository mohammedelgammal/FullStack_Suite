import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const useNavbarScroll: () => boolean = () => {
  const [isNavbarHidden, setNavbarHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - (scrollY.getPrevious() ?? 0);
    if (diff > 0 && latest > 10) {
      setNavbarHidden(true);
    } else {
      setNavbarHidden(false);
    }
  });

  return isNavbarHidden;
};

export default useNavbarScroll;
