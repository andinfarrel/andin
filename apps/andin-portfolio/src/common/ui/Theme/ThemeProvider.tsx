import { FC, ReactNode } from "react";

const ThemeProvider: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <div className="min-h-screen bg-slate-100">{children}</div>
);

export default ThemeProvider;
