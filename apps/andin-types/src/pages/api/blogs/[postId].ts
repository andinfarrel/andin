import { BlogPost, blogParams, getDynamoClient } from "@/services/blog";
import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import type { NextApiRequest, NextApiResponse } from "next";

export async function getPost(id: string): Promise<BlogPost | undefined> {
  const dynamo = getDynamoClient();
  const data = await dynamo.send(
    new GetItemCommand({
      TableName: blogParams.TableName,
      Key: {
        id: { S: id },
      },
    })
  );

  const item = data.Item ?? {};
  return {
    id: item.id.S ?? "",
    content: item.content.S ?? "",
    title: item.title.S ?? "",
    description: item.description.S ?? "",
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost>
) {
  const { postId } = req.query;
  if (typeof postId !== "string") return;
  const post = await getPost(postId);
  if (post) return res.status(200).json(post);
}
