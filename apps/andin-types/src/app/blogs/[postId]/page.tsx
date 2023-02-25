import { dynamoClient, getPost, getPosts } from "@/services/blog";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts(dynamoClient());

  return (
    posts?.map((post) => ({
      postId: post.id,
    })) ?? []
  );
}

export default async function Blog({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const blog = await getPost(dynamoClient(), postId);
  if (!blog) redirect("/");

  return (
    <main className="flex flex-col p-8 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <h3 className="text-lg font-medium">{blog.description}</h3>
        <span></span>
      </div>
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
