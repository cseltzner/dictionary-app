import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  children?: React.ReactNode;
}

const Layout = (props: Props) => {
  const [theme, setTheme] = useTheme();

  return (
    <div
      className={`${theme.isDarkTheme && "dark"}
     ${theme.fontFamily === "serif" && "font-serif"} 
     ${theme.fontFamily === "sans" && "font-sans"} 
     ${theme.fontFamily === "mono" && "font-mono"} 
     container max-w-6xl mx-auto text-neutral-800`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
