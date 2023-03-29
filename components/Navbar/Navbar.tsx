import { ThemeInterface } from "@/hooks/useTheme";
import React, { Dispatch, SetStateAction } from "react";
import BrandIcon from "../Icons/BrandIcon";
import FontDropDown from "./FontDropDown";

interface Props {
  theme: ThemeInterface;
  setTheme: Dispatch<SetStateAction<ThemeInterface>>;
}

const Navbar = (props: Props) => {
  return (
    <nav className="flex flex-row">
      <a href="#">
        <BrandIcon className="h-10 w-10 transition-all hover:stroke-primary" />
      </a>
      <div className="ml-auto">
        <FontDropDown theme={props.theme} setTheme={props.setTheme} />
      </div>
    </nav>
  );
};

export default Navbar;
