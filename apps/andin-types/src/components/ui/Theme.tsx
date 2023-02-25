import { FC, ReactNode } from "react";

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="relative flex flex-col h-full min-h-screen overflow-hidden dark text-slate-800 bg-slate-200 dark:text-slate-50 dark:bg-slate-800">
      <div className="fixed z-10 flex w-full h-full">
        <div className="absolute bg-purple-200 rounded-full top-[32rem] h-[32rem] w-[32rem] aspect-square mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute right-0 bg-red-200 rounded-full top-40 h-80 w-80 aspect-square mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 bg-orange-200 rounded-full h-80 w-80 aspect-square mix-blend-multiply filter blur-xl animate-pulse" />
      </div>
      <div className="relative z-10 w-full p-12 mx-auto md:p-12 lg:w-2/3">
        {children}
      </div>
    </main>
  );
};

export default Theme;
