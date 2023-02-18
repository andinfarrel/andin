// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BlogItems, getItems } from "@/services/dynamo";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogItems>
) {
  const items = await getItems();
  if (items) res.status(200).json({ items });
}
