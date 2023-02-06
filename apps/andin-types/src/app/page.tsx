import { FC } from "react";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-800 bg-slate-100">
      <div className="p-12 sm:p-24">
        <PageHeader />
        <BlogList />
      </div>
    </main>
  );
}

const PageHeader: FC = () => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <h1 className="text-5xl sm:text-7xl">
        <span className="font-bold ">Andin&apos;s</span> 🧠 💩
      </h1>
      <h2 className="italic font-bold text-x ">Type and machine goes brr</h2>
    </div>
  );
};

const BlogList: FC = () => {
  return (
    <div className="flex flex-col ">
      <BlogPreview />
      <BlogPreview />
      <BlogPreview />
      <BlogPreview />
      <BlogPreview />
      <BlogPreview />
    </div>
  );
};

const BlogPreview: FC = () => {
  return (
    <div className="flex flex-col p-4 space-y-1 rounded-md hover:cursor-pointer hover:bg-slate-50 bg-opacity-5 sm:space-y-2">
      <h2 className="text-2xl font-medium sm:text-4xl">Blog title</h2>
      <p className="text-sm line-clamp-3">
        short example of content that will get trimmed here. short example of
        content that will get trimmed here. short example of content that will
        get trimmed here. short example of content that will get trimmed here.
        short example of content that will get trimmed here. short example of
        content that will get trimmed here
      </p>
    </div>
  );
};
