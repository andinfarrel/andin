import { BlogPost, blogParams, getDynamoClient } from "@/services/blog";
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import type { NextApiRequest, NextApiResponse } from "next";

export async function getPosts(): Promise<BlogPost[] | undefined> {
  const dynamo = getDynamoClient();
  const data = await dynamo.send(new ScanCommand(blogParams));
  return data.Items?.map((item) => {
    const blogPost: BlogPost = {
      id: item.id.S ?? "",
      content: item.content.S ?? "",
      title: item.title.S ?? "",
      description: item.description.S ?? "",
    };
    return blogPost;
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    items: BlogPost[];
  }>
) {
  const items = await getPosts();
  if (items) res.status(200).json({ items });
}
