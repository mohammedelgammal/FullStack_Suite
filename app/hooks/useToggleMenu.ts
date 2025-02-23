import { useState } from "react";
import { ToggleHookProps } from "@/types/hooks";

const useToggleMenu: () => ToggleHookProps = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleMenuClick: () => void = () => {
    setToggleMenu((prevMenuState) => !prevMenuState);
  };

  return { isMenuOpen: toggleMenu, menuClickHandler: handleMenuClick };
};

export default useToggleMenu;
