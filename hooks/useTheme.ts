import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ThemeInterface {
  isDarkTheme: boolean;
  fontFamily: "serif" | "sans" | "mono";
}

const defaultTheme: ThemeInterface = {
  isDarkTheme: false,
  fontFamily: "serif",
};

/**
 * Attempts to set theme based stringified ThemeInterface in localstorage.
 * Returns theme and setTheme state
 */
export function useTheme(): [
  ThemeInterface,
  Dispatch<SetStateAction<ThemeInterface>>
] {
  const [theme, setTheme] = useState<ThemeInterface>(defaultTheme);

  // Set theme based on what is in localstorage on initial render
  // Otherwise use default theme
  useEffect(() => {
    const themeString = localStorage.getItem("theme");
    if (themeString) {
      const localStorageTheme: ThemeInterface = JSON.parse(themeString);

      try {
        setTheme(localStorageTheme);
      } catch (e) {
        setTheme(defaultTheme);
      }
    }
  }, []);

  return [theme, setTheme];
}
