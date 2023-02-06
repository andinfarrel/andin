import { FC } from "react";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-800 bg-slate-100">
      <div className="p-8 sm:p-24">
        <PageHeader />
        <BlogList />
      </div>
    </main>
  );
}

const PageHeader: FC = () => {
  return (
    <div className="flex flex-col p-4 space-y-4 sm:py-8">
      <h1 className="text-4xl sm:text-7xl">
        <span className="font-bold ">Andin&apos;s</span> 🧠 💩
      </h1>
      <h3 className="text-lg italic font-bold sm:text-2xl">
        Type and machine goes brr
      </h3>
    </div>
  );
};

const BlogList: FC = () => {
  return (
    <div className="flex flex-col sm:space-y-4">
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
      <h3 className="text-xl font-medium sm:text-4xl">Blog title</h3>
      <p className="text-sm sm:text-md line-clamp-3">
        short example of content that will get trimmed here. short example of
        content that will get trimmed here. short example of content that will
        get trimmed here. short example of content that will get trimmed here.
        short example of content that will get trimmed here. short example of
        content that will get trimmed here
      </p>
    </div>
  );
};
