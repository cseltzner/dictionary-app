import { Dispatch, SetStateAction, useEffect, useState } from "react";

export type FontType = "serif" | "sans" | "mono";

export interface ThemeInterface {
  isDarkTheme: boolean;
  fontFamily: FontType;
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

  // Sets theme using React state manager
  // AND sets theme value in local storage whenever theme is updated
  const setThemeLocalStorage: Dispatch<SetStateAction<ThemeInterface>> = (
    value: SetStateAction<ThemeInterface>
  ) => {
    setTheme(value);
    localStorage.setItem("theme", JSON.stringify(value));
  };

  return [theme, setThemeLocalStorage];
}
