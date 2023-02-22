import { BlogPost, getPost, getPosts } from "@/services/blog";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();

  return (
    posts?.map((post) => ({
      postId: post.id,
    })) ?? []
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths =
    posts?.map((post) => {
      return {
        params: {
          postId: post.id,
        },
      };
    }) ?? [];
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { postId } = context.params ?? {};

  if (typeof postId === "string") {
    const blog = await getPost(postId);
    if (blog) {
      return {
        props: { blog },
      };
    }
  }
  return {
    props: {}, // will be passed to the page component as props
  };
};

export default function Blog({ blog }: { blog?: BlogPost }) {
  if (!blog) redirect("/");

  return (
    <main className="flex flex-col p-8 space-y-8">
      <div className="font-medium whitespace-pre-wrap">
        <p>{blog.content}</p>
      </div>

      <Link href="/">
        <p className="italic hover:underline underline-offset-4 text-slate-600">
          ← back
        </p>
      </Link>
    </main>
  );
}
