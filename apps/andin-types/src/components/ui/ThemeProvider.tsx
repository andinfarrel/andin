import { FC, ReactNode } from "react";

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <main className="min-h-screen dark text-slate-800 bg-slate-200 dark:text-slate-50 dark:bg-slate-800">
        <div className="p-8 mx-auto md:p-12 md:w-3/4 lg:w-2/3">{children}</div>
      </main>
    </div>
  );
};

export default Theme;
