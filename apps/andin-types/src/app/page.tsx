"use client";

import Button from "@/components/ui/Button";
import ThemeProvider, { ToggleTheme } from "@/components/ui/ThemeProvider";
import { BlogItems, getItems } from "@/services/dynamo";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="p-2">
          <div className="p-6 mx-auto md:p-12 md:w-3/4 lg:w-2/3">
            <PageHeader />
            <BlogList />
          </div>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const PageHeader: FC = () => {
  return (
    <div
      className="flex flex-col space-y-2 sm:space-y-4 sm:py-8"
      typeof="button"
    >
      <h1 className="text-4xl lg:text-7xl">
        <span className="font-bold">Types</span>
      </h1>
      <h3 className="text-lg italic font-bold sm:text-2xl">
        Type and machine goes brr
      </h3>
      <div className="w-fit">
        <Link target="_blank" href="https://www.andinfarrel.codes">
          <div className="flex px-2 py-2 space-x-2 transition ease-in-out rounded-md bg-slate-100 shadow-md hover:-translate-y-[0.125rem] hover:bg-slate-50 place-items-center">
            <div className="w-10 h-10 overflow-hidden rounded-full">
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
    </div>
  );
};

const BlogList: FC = () => {
  const { data: blogs, isLoading } = useQuery<BlogItems>(
    ["blog-posts"],
    async () => {
      const response = await fetch("api/blogs/fetchAll");
      return (await response.json()) as BlogItems;
    }
  );

  return (
    <div className="flex flex-col sm:space-y-4">
      {isLoading && <p>🐈</p>}
      {blogs?.items.map(({ id, title, description }) => (
        <BlogPreview key={id} title={title} description={description} />
      ))}
    </div>
  );
};

const BlogPreview: FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="transition ease-in-out hover:-translate-y-[0.125rem] flex flex-col p-4 space-y-1 rounded-md shadow-md  hover:cursor-pointer bg-slate-100 hover:bg-slate-50 sm:space-y-2">
      <h2 className="text-2xl font-semibold sm:text-4xl">{title}</h2>
      <p className="text-sm sm:text-md line-clamp-3">{description}</p>
    </div>
  );
};
