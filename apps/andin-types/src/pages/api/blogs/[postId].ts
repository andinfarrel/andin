import { BlogPost, dynamoClient, getPost } from "@/services/blog";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost>
) {
  const { postId } = req.query;
  if (typeof postId !== "string") return;
  const post = await getPost(dynamoClient(), postId);
  if (post) return res.status(200).json(post);
}
