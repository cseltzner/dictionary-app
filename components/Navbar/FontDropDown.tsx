import React, { Dispatch, SetStateAction, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FontType, ThemeInterface } from "@/hooks/useTheme";
import ChevronDown from "../Icons/ChevronDown";

interface Props {
  theme: ThemeInterface;
  setTheme: Dispatch<SetStateAction<ThemeInterface>>;
}

const FontDropDown = (props: Props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const getCurrentFontText = () => {
    if (props.theme.fontFamily === "serif") return "Serif";
    if (props.theme.fontFamily === "sans") return "Sans-serif";
    if (props.theme.fontFamily === "mono") return "Monospace";
    return "Error";
  };

  const setFontText = (fontFamily: FontType) => {
    props.setTheme({ ...props.theme, fontFamily: fontFamily });
  };

  return (
    <DropdownMenu.Root onOpenChange={(open) => setIsDropDownOpen(open)}>
      <DropdownMenu.Trigger className="outline-none flex flex-row gap-2 items-center justify-center text-lg font-bold transition-all hover:text-primary">
        {getCurrentFontText()}
        <ChevronDown
          className={`w-5 h-5 stroke-primary transition-all duration-100 ${
            isDropDownOpen && "rotate-180"
          }`}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`border-2 border-primary bg-white rounded-lg transition-all text-center flex flex-col items-center ${
            isDropDownOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1"
          }`}
        >
          <DropdownMenu.Item
            onSelect={() => setFontText("serif")}
            className={
              "px-4 py-4 cursor-pointer outline-none transition-all hover:text-primary"
            }
          >
            Serif
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="border-b border-primary w-1/2" />
          <DropdownMenu.Item
            onSelect={() => setFontText("sans")}
            className={
              "px-4 py-4 cursor-pointer outline-none transition-all hover:text-primary"
            }
          >
            Sans-serif
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="border-b border-primary w-1/2" />

          <DropdownMenu.Item
            onSelect={() => setFontText("mono")}
            className={
              "px-4 py-4 cursor-pointer outline-none transition-all hover:text-primary"
            }
          >
            Monospace
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-primary" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default FontDropDown;
