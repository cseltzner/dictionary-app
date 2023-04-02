import React, { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  children?: React.ReactNode;
}

const Layout = (props: Props) => {
  const [theme, setTheme] = useTheme();

  // Set dark theme to body
  useEffect(() => {
    if (theme.isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme.isDarkTheme]);

  // Set Font family to body
  useEffect(() => {
    if (theme.fontFamily === "serif") {
      document.body.classList.add("font-serif");
      document.body.classList.remove("font-sans");
      document.body.classList.remove("font-mono");
    }
    if (theme.fontFamily === "sans") {
      document.body.classList.remove("font-serif");
      document.body.classList.add("font-sans");
      document.body.classList.remove("font-mono");
    }
    if (theme.fontFamily === "mono") {
      document.body.classList.remove("font-serif");
      document.body.classList.remove("font-sans");
      document.body.classList.add("font-mono");
    }
  }, [theme.fontFamily]);

  return (
    <div className={`relative overflow-x-hidden h-full `}>
      <div className="min-h-full dark:bg-neutral-900">
        <div
          className={`

        container max-w-6xl mx-auto text-neutral-900 dark:text-neutral-300 px-8 xl:px-0`}
        >
          <Navbar theme={theme} setTheme={setTheme} />
          <main>{props.children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
