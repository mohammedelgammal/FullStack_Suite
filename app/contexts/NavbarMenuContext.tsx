"use client";

import { createContext } from "react";
import { Navbar } from "@/components";
import { Icon, Menu } from "@/components/Navbar/components";
import useToggleMenu from "@/hooks/useToggleMenu";
import { ToggleHookProps } from "@/types/hooks";
import { Nullable } from "@/types/common";

const NavbarMenuContext = createContext<Nullable<ToggleHookProps>>(null);

export const NavbarWithMenu = () => {
  const { isMenuOpen, menuClickHandler } = useToggleMenu();

  return (
    <NavbarMenuContext.Provider value={{ isMenuOpen, menuClickHandler }}>
      <Menu />
      <Icon />
      <Navbar />
    </NavbarMenuContext.Provider>
  );
};

export default NavbarMenuContext;
