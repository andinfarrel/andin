import { BlogItem, getPosts } from "@/services/blog";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    items: BlogItem[];
  }>
) {
  const items = await getPosts();
  if (items) res.status(200).json({ items });
}
