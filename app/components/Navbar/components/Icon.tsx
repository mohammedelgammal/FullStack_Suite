"use client";

import { useContext } from "react";
import NavbarMenuContext from "@/contexts/NavbarMenuContext";
import Style from "./styles/Icon.module.css";

const Icon = () => {
  const menuContext = useContext(NavbarMenuContext);

  return (
    <div
      className="z-20 container-center-v gap-0 bg-primary w-11 h-11 cursor-pointer"
      onClick={menuContext?.menuClickHandler}
    >
      <svg
        className={`${Style.ham} ${Style.hamRotate} ${Style.hamS} ${
          menuContext?.isMenuOpen ? Style.active : ""
        }`}
        viewBox="0 0 100 100"
        width="80"
      >
        <path
          className={`${Style.line} ${Style.top}`}
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className={`${Style.line} ${Style.middle}`} d="m 70,50 h -40" />
        <path
          className={`${Style.line} ${Style.bottom}`}
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
    </div>
  );
};

export default Icon;
