import { BlogPost } from "@/services/blog";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getPost(postId: string) {
  const data = await fetch(`${process.env.BASE_URL}/api/blogs/${postId}`);
  if (!data.ok) return;
  return data.json() as Promise<BlogPost>;
}

export default async function Blog({ params }: { params: { postId: string } }) {
  const blog = await getPost(params.postId);
  if (!blog) redirect("/");

  return (
    <main className="flex flex-col p-8 space-y-8">
      <div className="font-medium whitespace-pre-wrap">
        <p>{blog.content}</p>
      </div>

      <Link href="/">
        <p className="italic hover:underline underline-offset-4 text-slate-600">← back</p>
      </Link>
    </main>
  );
}
