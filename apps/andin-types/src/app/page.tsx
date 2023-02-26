import { BlogPost, getDynamoClient, getPosts } from "@/services/blog";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export default async function Home() {
  const blogs = await getPosts(getDynamoClient());
  if (!blogs) redirect("/");

  return (
    <>
      <PageHeader />
      <Blogs blogs={blogs} />
    </>
  );
}

const PageHeader: FC = () => {
  return (
    <div
      className="flex flex-col space-y-2 sm:space-y-4"
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

const Blogs: FC<{ blogs: BlogPost[] }> = ({ blogs }) => {
  return (
    <div className="flex flex-col pt-4 sm:space-y-4">
      {blogs?.map(({ id, title, description }) => (
        <BlogPreview key={id} id={id} title={title} description={description} />
      ))}
    </div>
  );
};

const BlogPreview: FC<{
  id: string;
  title: string;
  description: string;
}> = ({ id, title, description }) => {
  return (
    <Link href={`/blogs/${id}`}>
      <div className="transition ease-in-out hover:-translate-y-[0.125rem] flex flex-col p-4 space-y-1 rounded-md shadow-md  hover:cursor-pointer bg-slate-100 hover:bg-slate-50 sm:space-y-2">
        <h2 className="text-2xl font-semibold sm:text-4xl">{title}</h2>
        <p className="text-sm sm:text-md line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};
