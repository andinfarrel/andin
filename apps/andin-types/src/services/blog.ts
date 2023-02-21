import { dynamo } from "./dynamo";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

export const blogParams = {
  TableName: "blog",
};

export type BlogItem = Record<string, any>;

export async function getPosts(): Promise<BlogItem[] | undefined> {
  const data = await dynamo.send(new ScanCommand(blogParams));
  return data.Items;
};
