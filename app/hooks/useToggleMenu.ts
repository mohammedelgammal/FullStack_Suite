import { useEffect, useState } from "react";
import { ToggleHookProps } from "@/types/hooks";

const useToggleMenu: () => ToggleHookProps = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
      window.onscroll = () => {
        scroll(0, 0);
      };
    } else {
      document.body.style.overflow = "auto";
      window.onscroll = null;
    }
  }, [toggleMenu]);

  const handleMenuClick: () => void = () => {
    setToggleMenu((prevMenuState) => !prevMenuState);
  };

  return { isMenuOpen: toggleMenu, menuClickHandler: handleMenuClick };
};

export default useToggleMenu;
