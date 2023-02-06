import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-800 bg-slate-100">
      <div className="p-6 mx-auto md:p-12 md:w-3/4 lg:w-2/3">
        <PageHeader />
        <BlogList />
      </div>
    </main>
  );
}

const PageHeader: FC = () => {
  return (
    <div
      className="flex flex-col p-4 space-y-2 sm:space-y-4 sm:py-8"
      typeof="button"
    >
      <h1 className="text-4xl lg:text-7xl">
        <span className="font-bold">Types</span>
      </h1>
      <div className="w-fit">
        <Link target="_blank" href="https://www.andinfarrel.codes">
          <div className="flex px-2 py-2 space-x-2 transition ease-in-out rounded-md shadow-inner bg-slate-200 hover:-translate-y-[0.125rem] hover:shadow-none hover:bg-slate-200 place-items-center">
            <div className="w-10 h-10 overflow-hidden bg-white rounded-full">
              <Image
                src="/images/andin-weeb.jpeg"
                alt="Andin's profile picture, credit goes to https://picrew.me/image_maker/197705"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h4 className="font-semibold text-md">Andin&apos;s 🧠 💩</h4>
              <h5 className="text-sm">Software engineer</h5>
            </div>
          </div>
        </Link>
      </div>
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
    <div className="transition ease-in-out hover:-translate-y-[0.125rem] flex flex-col p-4 space-y-1 rounded-md hover:shadow-inner hover:cursor-pointer hover:bg-slate-50 bg-opacity-5 sm:space-y-2">
      <h2 className="text-2xl font-semibold sm:text-4xl">Blog title</h2>
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
