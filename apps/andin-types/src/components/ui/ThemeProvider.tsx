"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import Button from "./Button";

type Mode = "light" | "dark";

const ThemeContext = createContext<{
  mode: Mode;
  toggleMode: () => void;
}>({ mode: "light", toggleMode: () => {} });

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>("light");

  const toggleMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <div className={mode}>
        <main className="min-h-screen dark text-slate-800 bg-slate-200 dark:text-slate-50 dark:bg-slate-800">
          {children}
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const ToggleTheme: FC = () => {
  const { mode, toggleMode } = useTheme();
  return (
    <Button onClick={toggleMode}>
      Toggle {mode === "light" ? "dark" : "light"} mode
    </Button>
  );
};

export default ThemeProvider;
