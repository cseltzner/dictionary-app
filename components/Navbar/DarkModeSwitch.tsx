import React, { Dispatch, SetStateAction } from "react";
import * as Switch from "@radix-ui/react-switch";
import { ThemeInterface } from "@/hooks/useTheme";

interface Props {
  theme: ThemeInterface;
  setTheme: Dispatch<SetStateAction<ThemeInterface>>;
  className?: string;
}

const DarkModeSwitch = (props: Props) => {
  return (
    <Switch.Root
      checked={props.theme.isDarkTheme}
      onCheckedChange={(checked) =>
        props.setTheme({ ...props.theme, isDarkTheme: checked })
      }
      className={`w-12 h-6 bg-neutral-400 rounded-full relative data-[state=checked]:bg-primary outline-none ${props.className}`}
    >
      <Switch.Thumb className="block w-[18px] h-[18px] bg-white rounded-full  transition-transform duration-100 translate-x-[3px]  data-[state=checked]:translate-x-[26px]" />
    </Switch.Root>
  );
};

export default DarkModeSwitch;
