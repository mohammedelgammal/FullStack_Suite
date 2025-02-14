"use client";

import { createContext } from "react";
import { Navbar } from "@/components";
import { Menu } from "@/components/Navbar/components";
import useToggleMenu from "@/hooks/useToggleMenu";
import { ToggleHookProps } from "@/types/hooks";

const NavbarMenuContext = createContext<Nullable<ToggleHookProps>>(null);

export const NavbarWithMenu = () => {
  const { isMenuOpen, menuClickHandler } = useToggleMenu();

  return (
    <NavbarMenuContext.Provider value={{ isMenuOpen, menuClickHandler }}>
      <Menu />
      <Navbar />
    </NavbarMenuContext.Provider>
  );
};

export default NavbarMenuContext;
