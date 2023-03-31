import { ThemeInterface } from "@/hooks/useTheme";
import React, { Dispatch, SetStateAction } from "react";
import BrandIcon from "../Icons/BrandIcon";
import MoonIcon from "../Icons/MoonIcon";
import DarkModeSwitch from "./DarkModeSwitch";
import FontDropDown from "./FontDropDown";

interface Props {
  theme: ThemeInterface;
  setTheme: Dispatch<SetStateAction<ThemeInterface>>;
}

const Navbar = (props: Props) => {
  return (
    <nav className="flex flex-row items-center justify-center py-6 gap-2 xl:gap-0">
      <a href="#" className="w-12 h-12">
        <BrandIcon className="w-full h-full transition-all hover:stroke-primary" />
      </a>
      <div className="ml-auto">
        <FontDropDown theme={props.theme} setTheme={props.setTheme} />
      </div>
      <DarkModeSwitch
        className="lg:ml-24 shrink-0"
        theme={props.theme}
        setTheme={props.setTheme}
      />
      <MoonIcon
        className={`stroke-neutral-400 h-8 w-8 ml-4 dark:stroke-neutral-100 shrink-0`}
      />
    </nav>
  );
};

export default Navbar;
